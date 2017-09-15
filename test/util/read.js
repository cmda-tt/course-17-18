'use strict';

var path = require('path');
var async = require('async');
var vfile = require('to-vfile');

module.exports = read;

function read(files) {
  return reader;

  function reader(dir, next) {
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
  }
}
