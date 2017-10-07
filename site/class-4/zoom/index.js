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

var g = svg.append('g');

g.selectAll('circle')
  .data(points)
  .enter()
  .append('circle')
  .attr('cx', x)
  .attr('cy', y)
  .attr('r', 2.5)
  .call(d3.drag().on('drag', ondrag));

svg.call(d3.zoom().scaleExtent([1 / 8, 24]).on('zoom', onzoom));

function onzoom() {
  g.attr('transform', d3.event.transform);
}

function ondrag(d) {
  d.x = d3.event.x;
  d.y = d3.event.y;
  d3.select(this).attr('cx', x(d)).attr('cy', y(d));
}

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
