'use strict';

var async = require('async');

module.exports = run;

function run(pipelines) {
  return runner;

  function runner(ctx, next) {
    return async.map(ctx.files, one, all);
    function one(file, callback) {
      pipelines[file.extname.slice(1)].run(file, done);

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
  }
}
