'use strict';

/* Based on https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084 by Mike Bostock. */

var svg = d3.select('svg');
var width = parseInt(svg.style('width'), 10);
var height = parseInt(svg.style('height'), 10);

var PI = Math.PI;
var sqrt = Math.sqrt;
var cos = Math.cos;
var sin = Math.sin;

var points = d3.range(2000).map(phyllotaxis(10));

svg.selectAll('circle')
  .data(points)
  .enter()
  .append('circle')
  .attr('cx', x)
  .attr('cy', y)
  .attr('r', 2.5)

var extent = d3.extent(points, x);

d3.select('input')
  .attr('value', extent[0] - 1)
  .attr('min', extent[0] - 1)
  .attr('max', extent[1] + 1);

function x(d) {
  return d.x;
}

function y(d) {
  return d.y;
}

function phyllotaxis(radius) {
  var theta = PI * (3 - sqrt(5));
  return factory;
  function factory(index) {
    var r = radius * sqrt(index);
    var a = theta * index;
    return {
      x: width / 2 + r * cos(a),
      y: height / 2 + r * sin(a)
    };
  }
}
