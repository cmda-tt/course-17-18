'use strict';

var rule = require('unified-lint-rule');

module.exports = rule('lint:stem', stem);

function stem(tree, file, invalid) {
  if (file.stem === invalid) {
    file.message('Use your actual GitHub username for the file name');
  }
}
