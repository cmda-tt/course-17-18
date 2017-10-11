'use strict'; // Variable declaration
var margin = { top: 20, right: 20, bottom: 40, left: 30 };
var height = 460 - margin.top - margin.bottom;
var width = 900 - margin.left - margin.right;

// Add svg to
var svg = d3.select('body'). //size the canvas of the svg.
append('svg').
attr('width', width + margin.left + margin.right).
attr('height', height + margin.top + margin.bottom).
append('g').
attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// X scale
var x = d3.scaleLinear(). // scale the x axis to full width
range([0, width]);
var y = d3.scaleBand(). // scale the y axis to full height
rangeRound([height, 0]);

var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y).
tickSize(6, 0);


d3.tsv('data.tsv', type, function (error, data) { //loading tsv dataset to variable data
  x.domain(d3.extent(data, function (d) {return d.value;})).nice(); //creates a domain of x axis for variable data
  y.domain(data.map(function (d) {return d.name;})); //creates y axis with scale from a-h letters




  svg.selectAll('.bar'). //select all objects with class "bar"
  data(data).
  enter().append('rect'). //creates rectangle
  attr('class', function (d) {
    return "bar bar--" + (d.value < 0 ? "negative" : "positive"); //checks if value is negative of positive and gives a class bar bar--negative of bar bar--positive
  }).
  attr('x', function (d) {return x(Math.min(0, d.value));}). //defines x axis position
  attr('y', function (d) {return y(d.name);}). //defines y axis position
  attr('width', function (d) {return Math.abs(x(d.value) - x(0));}). //width of bar
  attr('height', 45); //set height of bar to 45

/*  grouping x axis and give classname*/
  svg.append('g').
  attr('class', 'x axis').
  attr('transform', 'translate(0,' + height + ')').
  call(xAxis);

// filter negative values to change position of label and line
  var tickNegative = svg.append('g').
  attr('class', 'y axis').
  attr('transform', 'translate(' + x(0) + ',0)').
  call(yAxis).
  selectAll('.tick').
  filter(function (d, i) {return data[i].value < 0;})
  .attr('class', 'tick nega'); // give class nega to negative values.

  tickNegative.select('line'). //re-position line
  attr('x2', 6);

  tickNegative.select('text'). //re-position label
  attr('x', 9).
  style('text-anchor', 'start');

   d3.select('.sort').on('change', onchange); //check if the input checkbox with class "sort" has changed.
   function onchange() {
    var sort = this.checked ? sortOnValue : sortOnName; //if its checked, start funtion sortOnValue, if its unchecked start function sortOnName
    var y0 = y.domain(data.sort(sort).map(name)).copy();
    var transition = svg.transition().ease(d3.easeBackIn);

    // timeout.stop();

    /* Initial sort */
    svg.selectAll('.bar').sort(sortBar);

    /* Move the bars. */
    transition.selectAll('.bar')
      .delay(delay)
      .attr('y', barY0); //change the y attribute to changed the position of the bars.

    /* Move the labels. */
    transition.selectAll('.y')
      .call(d3.axisLeft(y))
      .selectAll('g')
      .delay(delay);

    d3.selectAll('.nega') //change the values of x2 of the line at the negative values. this way the line will stay of the correct side of the y axis
    .selectAll('line')
    .transition()
    .attr('x2', 6);

    d3.selectAll('.nega') //change the values of x of the text(label) at the negative values. this way the text(label) will stay of the correct side of the y axis
    .selectAll('text')
    .transition()
    .attr('x','9')



    function sortBar(a, b) { //sort bars
      return y0(name(a)) - y0(name(b));
    }

    function barY0(d) { // y values of the bars
      return y0(name(d));
    }

    function delay(d, i) { //delay of the transition
      return i * 50;
    }

  }


});
function change() { // checked if input change is true.
    d3
      .select('input')
      .property('checked', true)
      .dispatch('change');
  }

  /* Calculate `y` for a bar. */
  function barY(d) {
    return y(name(d));
  }

  /* Calculate `x` for a bar. */
  function barX(d) {
    return x(value(d));
  }

/* Clean a row. */
function row(d) {
  d.value = Number(value(d));
  return d;
}

/* Sort on value. */
function sortOnValue(a, b) {
  return value(b) - value(a);
}

/* Sort on name. */
function sortOnName(a, b) {
  return d3.ascending(name(a), name(b));
}

/* Get the letter field for a row. */
function name(d) {
  return d.name;
}

/* Get the frequency field for a row. */
function value(d) {
  return d.value;
}

function type(d) {
  d.value = +d.value;
  return d;
}
