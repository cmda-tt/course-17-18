'use strict';

/* Select the element. */
var svg = d3.select('svg');

var single = 48;
var double = 2 * single;
var width = parseInt(svg.style('width'), 10) - double;
var height = parseInt(svg.style('height'), 10) - double;

/* d3 easing function names. */
var names = [
  'linear',
  'quadIn',
  'quadOut',
  'quadInOut',
  'cubicIn',
  'cubicOut',
  'cubicInOut',
  'polyIn',
  'polyOut',
  'polyInOut',
  'sinIn',
  'sinOut',
  'sinInOut',
  'expIn',
  'expOut',
  'expInOut',
  'circleIn',
  'circleOut',
  'circleInOut',
  'bounceIn',
  'bounceOut',
  'bounceInOut',
  'backIn',
  'backOut',
  'backInOut',
  'elasticIn',
  'elasticOut',
  'elasticInOut'
];

/* Margins. */
var group = svg.append('g')
  .attr('transform', 'translate(' + single + ',' + single + ')');

/* Scales. */
var xScale = d3.scaleLinear().range([single, width]);
var yScale = d3.scaleLinear().domain([0, names.length]).range([0, height]);

/* Size of figures. */
var size = Math.floor(height / names.length);
var r = size / 2;

/* Labels. */
group.selectAll('text')
  .data(names)
  .enter()
  .append('text')
  .attr('x', single - size)
  .attr('y', y)
  .text(String);

/* Lines. */
group.selectAll('line')
  .data(names)
  .enter()
  .append('line')
  .attr('x1', single)
  .attr('y1', y)
  .attr('x2', width)
  .attr('y2', y)

/* Circles. */
var circles = group.selectAll('circle')
  .data(names)
  .enter()
  .append('circle')
  .attr('cx', xScale(0))
  .attr('cy', y)
  .attr('r', r)
  .on('click', onclick);

/* Add an `all` figure. */
group.append('text')
  .attr('x', single - size)
  .attr('y', yScale(names.length))
  .text('all');

group.append('rect')
  .attr('x', xScale(0) - r)
  .attr('y', yScale(names.length) - r)
  .attr('width', size)
  .attr('height', size)
  .on('click', all);

/* Ease circles. */
function onclick(d) {
  var self = d3.select(this);
  var ease = d3['ease' + d.charAt(0).toUpperCase() + d.slice(1)];
  var set = this.tagName === 'rect' ? setRect : setCircle;
  var time = 2000;
  var timer;

  if (self.classed('active') === false) {
    timer = d3.timer(tick);
    self.classed('active', true);
  }

  function setCircle(value) {
    self.attr('cx', value);
  }

  function setRect(value) {
    self.attr('x', value - r);
  }

  function tick(elapsed) {
    var t = elapsed > time ? 1 : elapsed / time;

    if (t === 1) {
      timer.stop();
      d3.timeout(hide, time);
    }

    set(xScale(ease(t)));
  }

  function hide() {
    self.attr('opacity', '0');
    self.classed('active', false);
    d3.timeout(show, 300);
  }

  function show() {
    self.attr('opacity', '1');
    set(xScale(0));
  }
}

/* Ease all circles (and the rect). */
function all() {
  circles.each(onclick);
  onclick.call(this, 'linear');
}

/* Calculate `y` position of figures and lines. */
function y(d, index) {
  return yScale(index);
}
