'use strict';

var fs = require('fs');
var path = require('path');
var glob = require('glob');
var async = require('async');
var bail = require('bail');
var trough = require('trough');
var csvParse = require('d3-dsv').csvParse;
var vfile = require('to-vfile');
var report = require('vfile-reporter');
var statistics = require('vfile-statistics');
var unified = require('unified');
var parse = require('rehype-parse');
var title = require('./rule/title-handle');
var noComments = require('./rule/no-comments');
var d3 = require('./rule/d3-script');

/* Potentially to do:
 * - Check JS in HTML for `d3.json` and `d3.csv` calls
 * - Check JS in HTML for stray `console.log` calls */

var html = unified()
  .use(parse)
  .use(title)
  .use(noComments)
  .use(d3);

var files = [
  'details.txt',
  'index.csv',
  'index.json',
  'index.html'
];

var pipelines = {
  txt: trough(),
  csv: trough()
    .use(parseCSV)
    .use(array)
    .use(threeRecords)
    .use(twoFields),
  json: trough()
    .use(parseJSON)
    .use(array)
    .use(threeRecords)
    .use(twoFields),
  html: trough()
    .use(function (file, directory, next) {
      next(null, html.parse(file), file);
    })
    .use(html.run)
};

var checkDirectory = trough()
  .use(vfile)
  .use(function (dir, next) {
    async.map(files, each, done);

    function each(basename, cb) {
      var fp = path.join(dir.path, basename);

      vfile.read(fp, check);

      function check(err, file) {
        if (err) {
          file = vfile(fp);
          file.message(err).fatal = true;
        }

        cb(null, file);
      }
    }

    function done(err, files) {
      next(err, files ? {files: files, directory: dir} : null);
    }
  })
  .use(function (ctx, next) {
    return async.map(ctx.files, one, all);
    function one(file, callback) {
      pipelines[file.extname.slice(1)].run(file, ctx.directory, done);

      function done(err) {
        if (err) {
          try {
            file.fail(err);
          } catch (err) {}
        }

        callback();
      }
    }
    function all(err) {
      next(err, ctx);
    }
  });

trough()
  .use(glob)
  .use(function (paths, next) {
    async.filter(paths, check, next);
    function check(fp, done) {
      fs.stat(fp, onstats);
      function onstats(err, stats) {
        done(null, err ? false : stats.isDirectory());
      }
    }
  })
  .use(function (paths, next) {
    return async.map(paths, checkDirectory.run, next);
  })
  .use(function (directories) {
    return [].concat.apply([], directories.map(mapper));
    function mapper(ctx) {
      return [ctx.directory].concat(ctx.files);
    }
  })
  .use(function (files) {
    console.log('Class 1 Load');
    console.error(report(files));
  })
  .use(function (files) {
    var stats = statistics(files);
    if (stats.fatal || stats.warn) {
      throw new Error('There were warnings!');
    }
  })
  .run('site/class-1-load/*', bail);

function parseJSON(file, directory, next) {
  var data;
  try {
    data = JSON.parse(file);
    next(null, data, file, directory);
  } catch (err) {
    next(err);
  }
}

function parseCSV(file, directory, next) {
  var data;
  try {
    data = csvParse(String(file));
    next(null, data, file, directory);
  } catch (err) {
    next(err);
  }
}

function array(data) {
  if (!Array.isArray(data)) {
    throw new Error('Expected array');
  }
}

function threeRecords(data) {
  if (data.length < 3) {
    throw new Error('Expected at least three records');
  }
}

function twoFields(data) {
  data.forEach(check);
  function check(field) {
    if (Object.keys(field).length < 2) {
      throw new Error('Expected at least two fields per record');
    }
  }
}
