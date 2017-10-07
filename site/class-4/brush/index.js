'use strict';

/* Based on https://bl.ocks.org/mbostock/3885304 by Mike Bostock. */

var svg = d3.select('svg');
var height = parseInt(svg.style('height'), 10);
var margin = {top: 48, right: 48, bottom: 120, left: 48};
var brushMargin = {top: height - margin.bottom + 24, right: 48, bottom: 48, left: 48};
var width = parseInt(svg.style('width'), 10) - margin.left - margin.right;
var chartHeight = height - margin.top - margin.bottom;
var brushHeight = height - brushMargin.top - brushMargin.bottom;

var parseDate = d3.timeParse('%b %Y');

var x = d3.scaleTime().range([0, width]);
var x2 = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([chartHeight, 0]);
var y2 = d3.scaleLinear().range([brushHeight, 0]);

var xAxis = d3.axisBottom(x);
var xAxis2 = d3.axisBottom(x2);
var yAxis = d3.axisLeft(y);

var brush = d3.brushX()
  .extent([[0, 0], [width, brushHeight]])
  .on('brush end', brushed);

var zoom = d3.zoom()
  .scaleExtent([1, Infinity])
  .translateExtent([[0, 0], [width, chartHeight]])
  .extent([[0, 0], [width, chartHeight]])
  .on('zoom', zoomed);

var area = d3.area()
  .curve(d3.curveMonotoneX)
  .x(curveChartX)
  .y0(chartHeight)
  .y1(curveChartY);

var area2 = d3.area()
  .curve(d3.curveMonotoneX)
  .x(curveBrushX)
  .y0(brushHeight)
  .y1(curveBrushY);

svg.append('defs')
  .append('clipPath')
  .attr('id', 'clip')
  .append('rect')
  .attr('width', width)
  .attr('height', chartHeight);

var focus = svg.append('g')
  .attr('class', 'focus')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var context = svg.append('g')
  .attr('class', 'context')
  .attr('transform', 'translate(' + brushMargin.left + ',' + brushMargin.top + ')');

d3.csv('index.csv', type, onload);

function onload(err, data) {
  if (err) throw err;

  x.domain(d3.extent(data, date));
  y.domain([0, d3.max(data, price)]);
  x2.domain(x.domain());
  y2.domain(y.domain());

  focus.append('path')
    .datum(data)
    .attr('class', 'area')
    .attr('d', area);

  focus.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + chartHeight + ')')
    .call(xAxis);

  focus.append('g')
    .attr('class', 'axis axis--y')
    .call(yAxis);

  context.append('path')
    .datum(data)
    .attr('class', 'area')
    .attr('d', area2);

  context.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + brushHeight + ')')
    .call(xAxis2);

  context.append('g')
    .attr('class', 'brush')
    .call(brush)
    .call(brush.move, x.range());

  svg.append('rect')
    .attr('class', 'zoom')
    .attr('width', width)
    .attr('height', chartHeight)
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .call(zoom);
}

function brushed() {
  var s = d3.event.selection || x2.range();

  /* Ignore brush-by-zoom */
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') {
    return;
  }

  x.domain(s.map(x2.invert, x2));

  focus.select('.area').attr('d', area);
  focus.select('.axis--x').call(xAxis);

  svg.select('.zoom')
    .call(zoom.transform, d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0));
}

function zoomed() {
  var t = d3.event.transform;

  /* ignore zoom-by-brush */
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'brush') {
    return;
  }

  x.domain(t.rescaleX(x2).domain());

  focus.select('.area').attr('d', area);
  focus.select('.axis--x').call(xAxis);

  context.select('.brush').call(brush.move, x.range().map(t.invertX, t));
}

function curveChartX(d) {
  return x(date(d));
}

function curveChartY(d) {
  return y(price(d));
}

function curveBrushX(d) {
  return x2(date(d));
}

function curveBrushY(d) {
  return y2(price(d));
}

function type(d) {
  return {
    date: parseDate(date(d)),
    price: Number(price(d))
  };
}

function date(d) {
  return d.date;
}

function price(d) {
  return d.price;
}
