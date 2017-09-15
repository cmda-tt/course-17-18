'use strict';

var fs = require('fs');
var async = require('async');

module.exports = isDirectory;

function isDirectory(paths, next) {
  async.filter(paths, check, next);
  function check(fp, done) {
    fs.stat(fp, onstats);
    function onstats(err, stats) {
      done(null, err ? false : stats.isDirectory());
    }
  }
}
