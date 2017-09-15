'use strict';

var statistics = require('vfile-statistics');

module.exports = failOnWarnings;

function failOnWarnings(files) {
  var stats = statistics(files);
  if (stats.fatal || stats.warn) {
    throw new Error('There were warnings!');
  }
}
