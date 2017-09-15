'use strict';

module.exports = flatten;

function flatten(directories) {
  return [].concat.apply([], directories.map(mapper));
  function mapper(ctx) {
    return [ctx.directory].concat(ctx.files);
  }
}
