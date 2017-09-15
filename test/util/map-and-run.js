'use strict';

var async = require('async');

module.exports = mapAndRun;

function mapAndRun(middleware) {
  return mapper;
  function mapper(paths, next) {
    return async.map(paths, middleware.run, next);
  }
}
