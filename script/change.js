'use strict';

var select = require('hast-util-select');
var fromString = require('hast-util-from-string');

module.exports = change;

function change(options) {
  return transformer;

  function transformer(tree) {
    fromString(select.select(options.selector, tree), options.value);
  }
}
