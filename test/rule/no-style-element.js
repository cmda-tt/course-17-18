'use strict';

var rule = require('unified-lint-rule');
var select = require('hast-util-select').selectAll;

module.exports = rule('lint:no-style-element', noStyleElement);

function noStyleElement(tree, file) {
  select('style', tree).forEach(warn);

  function warn(node) {
    file.message('Do not use `<style>` elements', node);
  }
}
