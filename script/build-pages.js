'use strict';

var fs = require('fs');
var path = require('path');
var glob = require('glob');
var ejs = require('ejs');
var async = require('async');
var unified = require('unified');
var html = require('rehype-parse');
var parse = require('remark-parse');
var stringify = require('rehype-stringify');
var remark2rehype = require('remark-rehype');
var select = require('hast-util-select');
var toString = require('hast-util-to-string');
var xtend = require('xtend');
var not = require('not');
var bail = require('bail');
var hidden = require('is-hidden');
var titleCase = require('title-case');
var trough = require('trough');

var pack = JSON.parse(fs.readFileSync('package.json'));

var readable = ['.svg', '.html'];

var index = fs.readFileSync(path.join(__dirname, 'index.ejs'), 'utf8');

var markup = unified().use(html, {fragment: true});
var md2html = unified().use(parse).use(remark2rehype).use(stringify);

var example = trough()
  /* Process the example. */
  .use(function (config, next) {
    var example = config.example;
    var fp = config.page.path + '/' + example.basename;

    example.type = 'image';
    example.name = titleCase(example.basename.slice(0, example.basename.indexOf('.')));
    example.path = fp;
    example.filePath = fp;

    fs.readFile(fp, onread);

    function onread(err, buf) {
      if (err) {
        if (err.code === 'EISDIR') {
          fp = path.join(fp, 'index.html');
          example.filePath = fp;
          fs.readFile(fp, onreadindex);
        } else {
          next(err);
        }
      } else {
        example.value = buf;
        next();
      }
    }

    function onreadindex(err, buf) {
      if (err) {
        next(err);
      } else {
        example.value = buf;
        next();
      }
    }
  })
  .use(function (config) {
    if (path.extname(config.example.filePath) === '.html') {
      config.example.type = 'iframe';
    }
  })
  .use(function (config) {
    var example = config.example;
    var title;

    if (readable.indexOf(path.extname(example.filePath)) === -1) {
      return;
    }

    title = select.select('title', markup.parse(example.value));

    if (title) {
      example.name = toString(title);
    }
  })
  .use(function (config, next) {
    md2html.process(config.example.name, done);

    function done(err, file) {
      if (err) {
        next(err);
      } else {
        config.example.description = file.toString();
        next();
      }
    }
  })
  .use(function (config) {
    var base = config.page.path.split(path.sep).join('/') + '/';
    var example = config.example;
    example.url = example.path.split(path.sep).join('/').slice(base.length);
    example.href = example.filePath.split(path.sep).join('/').slice(base.length);
    example.source = example.path.split(path.sep).join('/');
  });

var page = trough()
  /* Process the page. */
  .use(function (fp) {
    var name = titleCase(path.basename(fp));
    var type = name.split(/\s/, 1)[0].toLowerCase();
    var num = Number(name.split(/\s/, 2)[1]);

    return {
      path: fp,
      out: path.join(fp, 'index.html'),
      type: type,
      short: '×' + num,
      id: num,
      name: name,
      examples: [],
      pack: pack
    };
  })
  /* Get metadata. */
  .use(function (config, next) {
    fs.readFile(path.join(config.path, '.metadata.json'), onmetadata);
    function onmetadata(_, buf) {
      if (buf) {
        next(null, xtend(config, JSON.parse(buf)));
      } else {
        next();
      }
    }
  })
  /* Get examples. */
  .use(function (config, next) {
    fs.readdir(config.path, ondir);
    function ondir(err, paths) {
      if (err) {
        next(err);
      } else {
        config.examples = paths.filter(not(hidden)).filter(not(index));
        next();
      }
    }
    function index(name) {
      return name === 'index.html';
    }
  })
  /* Process examples. */
  .use(function (config, next) {
    return async.map(config.examples, run, done);
    function run(fp, cb) {
      example.run({example: {basename: fp}, page: config}, cb);
    }
    function done(err, examples) {
      if (err) {
        next(err);
      } else {
        config.examples = examples.map(pick);
        next(null, config);
      }
      function pick(example) {
        return example.example;
      }
    }
  })
  .use(function (config, next) {
    fs.writeFile(config.out, ejs.render(index, config), next);
  })
  .use(function (config) {
    console.log('✓ %s', config.name);

    config.examples.forEach(function (example) {
      var name = example.basename;
      var end = name.indexOf('.');
      console.log('  └─ %s', name.slice(0, end === -1 ? name.length : end));
    });
  });

trough()
  .use(glob)
  /* Filter non-directories out. */
  .use(function (paths, next) {
    async.filter(paths, check, next);
    function check(fp, next) {
      fs.stat(fp, onstats);
      function onstats(err, stats) {
        next(null, err ? false : stats.isDirectory());
      }
    }
  })
  /* Process pages. */
  .use(function (paths, next) {
    return async.map(paths, page.run, next);
  })
  .run('docs/*', bail);
