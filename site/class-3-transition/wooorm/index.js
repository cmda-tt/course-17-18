'use strict';

/* Based on https://bl.ocks.org/tjdecke/5558084 by Tom May. */

/* Select the element. */
var svg = d3.select('svg');

var days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
var margin = {top: 50, right: 50, bottom: 50, left: 50};
var width = parseInt(svg.style('width'), 10) - margin.left - margin.right;
var gridSize = Math.floor(width / 24);
var legendElementWidth = gridSize * 2;
var legendElementHeight = gridSize / 2
var height = (days.length * gridSize) + (2 * legendElementHeight);
var buckets = 9;
var duration = 500;
var speed = 50;
var workweekStart = 0;
var workweekEnd = 4;
var worktimeStart = 8;
var worktimeEnd = 17;
var minMeridiem = 600;
var colors = [
  'hsl(45, 99%, 95%)',
  'hsl(45, 99%, 82.5%)',
  'hsl(45, 99%, 70%)',
  'hsl(165, 99%, 70%)',
  'hsl(165, 99%, 57.5%)',
  'hsl(165, 99%, 45%)',
  'hsl(285, 99%, 40%)',
  'hsl(285, 99%, 27.5%)',
  'hsl(285, 99%, 15%)'
];

svg.attr('height', height + margin.top + margin.bottom);

var group = svg
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var dayLabels = group
  .selectAll('.day')
  .data(days)
  .enter()
  .append('text')
  .text(String)
  .attr('x', 0)
  .attr('y', labelPosition)
  .attr('transform', 'translate(-6, ' + gridSize / 1.5 + ')')
  .classed('day', true)
  .classed('work', workDay);

var timeLabels = group
  .selectAll('.time')
  .data(d3.range(24))
  .enter()
  .append('text')
  .text(timeLabel)
  .attr('x', labelPosition)
  .attr('y', 0)
  .attr('transform', 'translate(' + gridSize / 2 + ', -6)')
  .classed('time', true)
  .classed('work', workTime);

d3.tsv('index.tsv', row, onload);

function onload(error, data) {
  var colorScale = d3
    .scaleQuantile()
    .domain([0, colors.length - 1, d3.max(data, value)])
    .range(colors);

  group
    .selectAll('.hour')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', x)
    .attr('y', y)
    .attr('class', 'hour')
    .attr('width', gridSize)
    .attr('height', gridSize)
    .style('fill', colors[0])
    .transition()
    .delay(delay)
    .duration(duration)
    .style('fill', fill);

  var legend = group
    .selectAll('.legend')
    .data([0].concat(colorScale.quantiles()), String)
    .enter()
    .append('g')
    .attr('class', 'legend');

  legend
    .append('rect')
    .attr('x', legendX)
    .attr('y', height)
    .attr('width', legendElementWidth)
    .attr('height', legendElementHeight)
    .style('fill', legendFill);

  legend
    .append('text')
    .attr('class', 'mono')
    .text(legendText)
    .attr('x', legendX)
    .attr('y', height + gridSize)
    .attr('transform', 'translate(0, 6)')

  function fill(d) {
    return colorScale(d.value);
  }
}

function labelPosition(d, i) {
  return i * gridSize;
}

function delay(d, i) {
  return i * speed;
}

function x(d) {
  return (d.hour - 1) * gridSize;
}

function y(d) {
  return (d.day - 1) * gridSize;
}

function legendX(d, i) {
  return i * legendElementWidth;
}

function legendFill(d, i) {
  return colors[i];
}

function legendText(d) {
  return '≥ ' + Math.round(d);
}

function value(d) {
  return d.value;
}

function workDay(d, i) {
  return i >= workweekStart && i <= workweekEnd;
}

function workTime(d, i) {
  return i >= worktimeStart && i <= worktimeEnd;
}

function timeLabel(d) {
  var x = d + 1;
  var value = (x % 12 || 12);

  if (width > minMeridiem) {
    value += x > 12 ? 'p' : 'a';
  }

  return value;
}

function row(d) {
  return {
    day: Number(d.day),
    hour: Number(d.hour),
    value: Number(d.value)
  };
}
