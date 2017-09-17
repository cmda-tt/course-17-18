'use strict';

var glob = require('glob');
var bail = require('bail');
var trough = require('trough');
var csvParse = require('d3-dsv').csvParse;
var vfile = require('to-vfile');
var report = require('vfile-reporter');
var unified = require('unified');
var parse = require('rehype-parse');
var title = require('./rule/title-username');
var noComments = require('./rule/no-comments');
var d3 = require('./rule/d3-script');
var flatten = require('./util/flatten');
var mapAndRun = require('./util/map-and-run');
var failOnWarnings = require('./util/fail-on-warnings');
var isDirectory = require('./util/is-directory');
var read = require('./util/read');
var run = require('./util/run');

/* Potentially to do:
 * - Check JS in HTML for `d3.json` and `d3.csv` calls
 * - Check JS in HTML for stray `console.log` calls */

var html = unified()
  .use(parse)
  .use(title)
  .use(noComments)
  .use(d3);

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
    .use(function (file, next) {
      next(null, html.parse(file), file);
    })
    .use(html.run)
};

var checkDirectory = trough()
  .use(vfile)
  .use(read([
    'details.txt',
    'index.csv',
    'index.json',
    'index.html'
  ]))
  .use(run(pipelines));

trough()
  .use(glob)
  .use(isDirectory)
  .use(mapAndRun(checkDirectory))
  .use(flatten)
  .use(function (files) {
    console.log('Class 1 Load');
    console.error(report(files));
  })
  .use(failOnWarnings)
  .run('site/class-1-load/*', bail);

function parseJSON(file, next) {
  var data;
  try {
    data = JSON.parse(file);
    next(null, data, file);
  } catch (err) {
    next(err);
  }
}

function parseCSV(file, next) {
  var data;
  try {
    data = csvParse(String(file));
    next(null, data, file);
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
