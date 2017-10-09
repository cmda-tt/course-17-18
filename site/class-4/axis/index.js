'use strict';

/* Based on https://bl.ocks.org/mbostock/3885304 by Mike Bostock
 * and http://bl.ocks.org/jonahwilliams/2f16643b999ada7b1909 by
 * Jonah Williams. */

var correctYear = 2012;

/* Select the element. */
var svg = d3.select('svg');

var formatPercent = d3.format('.0%');
var formatPopulation = d3.format(',.0f');

/* Define margins. */
var margin = {top: 48, right: 72, bottom: 120, left: 72};

/* Define axes. */
var x = d3.scaleBand().padding(0.2);
var y = d3.scaleLinear();

/* Conventional margins: https://bl.ocks.org/mbostock/3019563. */
var group = svg
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

/* Load data. Map it with `row`. */
d3.tsv('index.tsv', row, onload);

function onload(err, data) {
  /* Fail if anything went awry. */
  if (err) throw err;

  data = data.filter(applicableYear);

  var fields = Object.keys(data[0]).filter(applicableField);
  var field = fields[0];

  /* Set domains. */
  x.domain(data.map(state));
  y.domain([0, d3.max(data, current)]);

  /* Add a group for the x axis. */
  var xAxis = group
    .append('g')
    .attr('class', 'axis axis-x');

  /* Add a group for the y axis. */
  var yAxis = group
    .append('g')
    .attr('class', 'axis axis-y');

  /* Add bars for the data. */
  var bars = group
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')

  /* Add select. */
  d3.select('form')
    .style('left', '16px')
    .style('top', '16px')
    .append('select')
    .on('change', onchange)
    .selectAll('option')
    .data(fields)
    .enter()
    .append('option')
    .attr('value', identity)
    .text(sentence)

  /* Trigger the initial resize. */
  onresize();

  /* Listen to future resizes. */
  d3.select(window).on('resize', onresize);

  /* Change after 2s automatically. */
  var timeout = d3.timeout(change, 2000);

  function onchange(d) {
    var height = parseInt(svg.style('height'), 10) - margin.top - margin.bottom;
    var transition = svg.transition();

    field = this.value;

    y.domain([0, d3.max(data, current)]);

    transition.selectAll('.bar')
      .delay(delay)
      .attr('x', barX)
      .attr('y', barY)
      .attr('width', x.bandwidth())
      .attr('height', barHeight);

    transition.select('.axis-y')
      .call(d3.axisLeft(y).ticks(10, currentFormat()))
      .selectAll('g')
      .delay(delay);

    /* Calculate `height` for a bar. */
    function barHeight(d) {
      return height - barY(d);
    }
  }

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
    xAxis
      .call(d3.axisBottom(x)).attr('transform', 'translate(0,' + height + ')')
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-0.8em')
      .attr('dy', '-0.8em')
      .attr('transform', 'rotate(-90)');

    yAxis.call(d3.axisLeft(y).ticks(10, currentFormat()));

    /* Calculate `height` for a bar. */
    function barHeight(d) {
      return height - barY(d);
    }
  }

  function change() {
    d3.select('select')
      .property('selectedIndex', fields.length - 1)
      .dispatch('change');
  }

  /* Calculate `x` for a bar. */
  function barX(d) {
    return x(state(d));
  }

  /* Calculate `y` for a bar. */
  function barY(d) {
    return y(current(d));
  }

  function current(d) {
    return d[field];
  }

  function currentFormat(d) {
    return /percent/.test(field) ? formatPercent : formatPopulation;
  }

  function delay(d, i) {
    return i * 10;
  }
}

/* Clean a row. */
function row(d) {
  var result = {};
  var key;
  var next;
  var value;

  for (key in d) {
    value = d[key];
    next = key.charAt(0).toLowerCase() + key.slice(1);

    if (next === 'state') {
      value = lower(value).replace(/\b[a-z]/g, upper);
    } else {
      value = Number(value);
    }

    result[next] = value;
  }

  return result;
}

/* Check if this row has an applicable year. */
function applicableYear(d) {
  return d.year === correctYear;
}

/* Check if this field can be filtered on. */
function applicableField(d) {
  return d !== 'year' && d !== 'state';
}

/* Get the state field for a row. */
function state(d) {
  return d.state;
}

/* To lower case. */
function lower(d) {
  return d.toLowerCase();
}

/* To upper case. */
function upper(d) {
  return d.toUpperCase();
}

/* To sentence case. */
function sentence(d) {
  return d.replace(/[A-Z]/g, replace);
  function replace(d) {
    return ' ' + d.charAt(0).toLowerCase()
  }
}

/* Identity function. */
function identity(d) {
  return d;
}
