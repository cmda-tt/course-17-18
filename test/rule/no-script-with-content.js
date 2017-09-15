'use strict';

var rule = require('unified-lint-rule');
var select = require('hast-util-select').selectAll;

module.exports = rule('lint:no-script-with-content', noScriptWithContent);

function noScriptWithContent(tree, file) {
  select('script:not([src])', tree).forEach(warn);

  function warn(node) {
    file.message('Do not use `<script>` elements with content', node);
  }
}
