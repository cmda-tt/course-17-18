/*The SVG in the HTML file is selected and stored in variable 'svg'. Variables margin (object(, width and height are created. Values found
in index.html - the settings from the margin object are stored in 'width' and 'height'.*/

var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

/*Variables for the x and y axis are created by using the created 'width' and 'height' variables. scaleBand and scaleLinear are used to
compute the position and transformation of the data points: http://d3indepth.com/scales/ */

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

/*"G" is added, by altering 'g' you can change the behavior of the svg. The margins from the 'margin' object are added onto the svg, by
adding a transform to 'g'.*/

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*The data in CSV format is loaded in.*/

d3.csv("data.csv", function(d) {
  d.hours = +d.hours;
  return d;
}, function(error, data) {
  if (error) throw error; /*Error is thrown, in case no data is found.*/

  x.domain(data.map(function(d) { return d.day; })); /*The points on the x axis are mapped.*/
  y.domain([0, d3.max(data, function(d) { return d.hours; })]); /*The points on the y axis are mapped.*/

  d3.select('input').on('change', onchange);

  function onchange() {
    var sort = this.checked ? sortOnHours : sortOnDay;
    var x0 = x.domain(data.sort(sort).map(day)).copy();
    var transition = svg.transition();

    /* Initial sort */
    svg.selectAll('.bar').sort(sortBar);

    /* Move the bars. */
    transition.selectAll('.bar')
      .delay(delay)
      .attr('x', barX0);

    /* Move the labels. */
    transition.select('.axis-x')
      .call(d3.axisBottom(x))
      .selectAll('g')
      .delay(delay);

    function sortBar(a, b) {
      return x0(day(a)) - x0(day(b));
    }

    function barX0(d) {
      return x0(day(d));
    }

    function delay(d, i) {
      return i * 50;
    }
  }

  g.append("g")
      .attr("class", "axis axis--x") /*X axis class is created.*/
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(8, "h")) /*8 ticks defined on y axis.*/
    .append("text")
      .attr("transform", "rotate(-90)") /*The y axis went from horizontal to vertical*/
      .attr("y", 6)
      .attr("dy", "0.71em")

  g.selectAll(".bar") /*All elements with class bar are selected*/
    .data(data)
    .enter().append("rect") /*For every datapoint, a new rectangle is added to the SVG.*/
      .attr("class", "bar") /*A class by the name of bar is added to each rectangle, this can be edited in the css file.*/
      .attr("rx", 15) /*Give the bars rounded corners.*/
      .attr("x", function(d) { return x(d.day); }) /*The x position is determined by the entry in the CSV file*/
      .attr("y", function(d) { return y(d.hours); }) /*The y position is determined by the entry in the CSV file*/
      .attr("width", x.bandwidth()) /*The rectangles are given their width*/
      .attr("height", function(d) { return height - y(d.hours); }); /*The rectangles are given their height*/
});

function sortOnHours(a, b) {
  return hours(b) - hours(a);
}

function sortOnDay(a, b) {
  return d3.ascending(day(a), day(b));
}

function hours(d) {
  return d.hours;
}

function day(d) {
  return d.day;
}

/*Taken from: https://bl.ocks.org/mbostock/3885304*/
