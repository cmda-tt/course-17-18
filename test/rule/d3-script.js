'use strict';

var rule = require('unified-lint-rule');
var select = require('hast-util-select').select;

module.exports = rule('lint:d3-script', d3);

var selector = [
  'script[src^=https://d3js.org]',
  'script[src^=//d3js.org]'
].join(', ');

function d3(tree, file) {
  var node = select(selector, tree);

  if (!node) {
    file.message('Add a script to d3');
  }
}
