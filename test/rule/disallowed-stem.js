'use strict';

var rule = require('unified-lint-rule');

module.exports = rule('lint:stem', stem);

function stem(tree, file, invalid) {
  var disallowed = typeof invalid === 'string' ? [invalid] : invalid;
  if (disallowed.indexOf(file.stem) !== -1) {
    file.message('Use your actual GitHub username for the file name');
  }
}
