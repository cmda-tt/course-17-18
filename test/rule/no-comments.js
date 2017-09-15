'use strict';

var rule = require('unified-lint-rule');
var visit = require('unist-util-visit');

module.exports = rule('lint:no-comments', noComments);

function noComments(tree, file) {
  visit(tree, 'comment', visitor);

  function visitor(node) {
    file.message('Remove comments', node);
  }
}
