'use strict';

var glob = require('glob');
var bail = require('bail');
var trough = require('trough');
var vfile = require('to-vfile');
var report = require('vfile-reporter');
var unified = require('unified');
var parse = require('rehype-parse');
var title = require('./rule/title-handle');
var d3 = require('./rule/d3-script');
var noStyle = require('./rule/no-style-element');
var noScript = require('./rule/no-script-with-content');
var flatten = require('./util/flatten');
var mapAndRun = require('./util/map-and-run');
var failOnWarnings = require('./util/fail-on-warnings');
var isDirectory = require('./util/is-directory');
var read = require('./util/read');
var run = require('./util/run');

var html = unified()
  .use(parse)
  .use(title)
  .use(noStyle)
  .use(noScript)
  .use(d3);

var pipelines = {
  css: trough(),
  js: trough(),
  html: trough()
    .use(function (file, next) {
      next(null, html.parse(file), file);
    })
    .use(html.run)
};

var checkDirectory = trough()
  .use(vfile)
  .use(read([
    'index.js',
    'index.html',
    'index.css'
  ]))
  .use(run(pipelines));

trough()
  .use(glob)
  .use(isDirectory)
  .use(mapAndRun(checkDirectory))
  .use(flatten)
  .use(function (files) {
    console.log('Class 1 Bar');
    console.error(report(files));
  })
  .use(failOnWarnings)
  .run('site/class-1-bar/*', bail);
