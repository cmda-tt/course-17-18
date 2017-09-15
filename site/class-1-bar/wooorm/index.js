'use strict';

/* Based on https://bl.ocks.org/mbostock/3885304 by Mike Bostock. */

/* Select the element. */
var svg = d3.select('svg');

/* Define margins. */
var margin = {top: 16, right: 16, bottom: 48, left: 48};

/* Define axes. */
var x = d3.scaleBand().padding(0.2);
var y = d3.scaleLinear();

/* Conventional margins: https://bl.ocks.org/mbostock/3019563. */
var group = svg
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

/* Load data. Map it with `row`. */
d3.csv('index.csv', row, onload);

function onload(err, data) {
  /* Fail if anything went awry. */
  if (err) throw err;

  /* Set domains. */
  x.domain(data.map(letter));
  y.domain([0, d3.max(data, frequency)]);

  /* Add a group for the x axis. */
  var xAxis = group
    .append('g')
    .attr('class', 'axis axis-x');

  /* Add a group for the y axis. */
  var yAxis = group
    .append('g')
    .attr('class', 'axis axis-y');

  /* Add a label for the y-axis. */
  var label = yAxis.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Frequency');

  /* Add bars for the data. */
  var bars = group
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar');

  /* Trigger the initial resize. */
  onresize();

  /* Listen to future resizes. */
  d3.select(window).on('resize', onresize);

  function onresize() {
    /* Get current dimensions. */
    var width = parseInt(svg.style('width'), 10) - margin.left - margin.right;
    var height = parseInt(svg.style('height'), 10) - margin.top - margin.bottom;

    /* Set the scales range. Round to integers. */
    x.rangeRound([0, width]);
    y.rangeRound([height, 0]);

    /* Size the bars. */
    bars
      .attr('x', barX)
      .attr('y', barY)
      .attr('width', x.bandwidth())
      .attr('height', barHeight);

    /* Render x and y. */
    xAxis.call(d3.axisBottom(x)).attr('transform', 'translate(0,' + height + ')');
    yAxis.call(d3.axisLeft(y).ticks(10, '%'));

    /* Hide the y-axis label if there’s no space. */
    label.attr('display', height < 300 ? 'none' : 'block');

    /* Calculate `height` for a bar. */
    function barHeight(d) {
      return height - barY(d);
    }
  }

  /* Calculate `x` for a bar. */
  function barX(d) {
    return x(letter(d));
  }

  /* Calculate `y` for a bar. */
  function barY(d) {
    return y(frequency(d));
  }
}

/* Clean a row. */
function row(d) {
  d.frequency = Number(frequency(d));
  return d;
}

/* Get the letter field for a row. */
function letter(d) {
  return d.letter;
}

/* Get the frequency field for a row. */
function frequency(d) {
  return d.frequency;
}
