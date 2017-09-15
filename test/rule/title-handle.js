'use strict';

var rule = require('unified-lint-rule');
var select = require('hast-util-select');
var toString = require('hast-util-to-string');

module.exports = rule('lint:title', correctTitle);

function correctTitle(tree, file) {
  var node = select.select('title', tree);
  var val = node && toString(node).trim();
  if (!node) {
    file.message('Add the `<title>` element back!');
  } else if (val === '@handle' || val === '@') {
    file.message('Update your title element with your GitHub handle', node);
  } else if (val.indexOf('@') !== 0) {
    file.message('Add an `@` before your GitHub handle', node);
  }
}
