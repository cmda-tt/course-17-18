'use strict';

/* Based on http://bl.ocks.org/mbostock/3943967 by Mike Bostock. */

/* Number of series and values per series. */
var n = 4;
var m = 58;

/* - `xz`
 *   — Array with `m` elements, representing the x-values shared by all series
 * - `yz`
 *   - Array with `n` elements, representing the y-values of each of the `n`
 *   series.  Each yz[i] is an array of m non-negative numbers representing a
 *   y-value for xz[i].
 * - `y01z`
 *   – Array of the same structure as `yz`, but with stacked `[y₀, y₁]`
 *   instead of `y`.
 */
var xz = d3.range(m);
var yz = d3.range(n).map(function () { return bumps(m); });
var y01z = d3.stack().keys(d3.range(n))(d3.transpose(yz));

var yMax = d3.max(yz, function (y) { return d3.max(y); });
var y1Max = d3.max(y01z, function (y) { return d3.max(y, d1) });

var transitionDuration = 500;
var transitionDelay = 10;

var svg = d3.select('svg');
var margin = {top: 50, right: 50, bottom: 50, left: 50};
var width = parseInt(svg.style('width'), 10) - margin.left - margin.right;
var height = parseInt(svg.style('height'), 10) - margin.left - margin.right;

var x = d3.scaleBand().domain(xz).rangeRound([0, width]).padding(0.05);
var y = d3.scaleLinear().domain([0, y1Max]).range([height, 0]);
var color = d3.scaleOrdinal(['#feca2f', '#2ffe63', '#2f63fe', '#fe2fca']);

var axis = d3.axisBottom(x).tickSize(4).tickPadding(4);

/* Change after 2s automatically. */
var timeout = d3.timeout(change, 2000);

/* Add margins. */
var group = svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

/* Add groups for each bar type. */
var series = group.selectAll('.series')
  .data(y01z)
  .enter()
  .append('g')
  .attr('class', 'series')
  .attr('fill', fill);

var rect = series.selectAll('rect')
  .data(identity)
  .enter()
  .append('rect')
  .attr('x', rectStackedX)
  .attr('y', height)
  .attr('width', x.bandwidth())
  .attr('height', 0);

/* Initial transition. */
rect
  .transition()
  .delay(delay)
  .attr('y', rectStackedY)
  .attr('height', rectStackedHeight);

/* Add axis. */
group.append('g')
  .attr('class', 'axis axis--x')
  .attr('transform', 'translate(0,' + height + ')')
  .call(axis);

/* Listen to changes. */
d3.selectAll('input').on('change', onchange);

function onchange() {
  (this.value === 'grouped' ? transitionGrouped : transitionStacked)();
  timeout.stop();
}

function change() {
  d3
    .select('input[value=grouped]')
    .property('checked', true)
    .dispatch('change');
}

function transitionGrouped() {
  y.domain([0, yMax]);

  rect
    .transition()
    .duration(transitionDuration)
    .delay(delay)
    .attr('x', rectGroupedX)
    .attr('width', x.bandwidth() / n)
    .transition()
    .attr('y', rectGroupedY)
    .attr('height', rectGroupedHeight);
}

function transitionStacked() {
  y.domain([0, y1Max]);

  rect
    .transition()
    .duration(transitionDuration)
    .delay(delay)
    .attr('y', rectStackedY)
    .attr('height', rectStackedHeight)
    .transition()
    .attr('x', rectStackedX)
    .attr('width', x.bandwidth());
}

function fill(d, i) {
  return color(i);
}

function rectStackedX(d, i) {
  return x(i);
}

function rectGroupedX(d, i) {
  return x(i) + x.bandwidth() / n * this.parentNode.__data__.key;
}

function rectStackedY(d) {
  return y(d1(d));
}

function rectStackedHeight(d) {
  return y(d0(d)) - rectStackedY(d);
}

function rectGroupedY(d) {
  return y(d1(d) - d0(d));
}

function rectGroupedHeight(d) {
  return y(0) - rectGroupedY(d);
}

function delay(d, i) {
  return i * transitionDelay;
}

function identity(d) {
  return d;
}

function d0(d) {
  return d[0];
}

function d1(d) {
  return d[1];
}

/* Returns an array of m psuedorandom, smoothly-varying non-negative
 * numbers.  Inspired by Lee Byron’s test data generator.
 * http://leebyron.com/streamgraph/ */
function bumps(m) {
  var count = 5;
  var values = d3.range(m).map(paddedRandom);
  var index = -1;
  var offset;
  var x;
  var y;
  var z;
  var weight;

  /* Add `count` random bumps. */
  while (++index < count) {
    offset = -1;
    x = 1 / random();
    y = 2 * Math.random() - 0.5;
    z = 10 / random();

    while (++offset < m) {
      weight = (offset / m - y) * z;
      values[offset] += x * Math.exp(-weight * weight);
    }
  }

  return values.map(positive);
}

function paddedRandom() {
  return 0.1 * random();
}

function random() {
  return 0.1 + Math.random();
}

function positive(d) {
  return Math.max(0, d);
}
