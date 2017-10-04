// based on Mike Bostock's d3 Bar Chart
// https://bl.ocks.org/mbostock/3885304 


// set up svg field and subtract margins

var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

// set up graph size so all data fits in graph

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

// shorthand to append groups to svg 
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// load tsv data, data input contains 'regular' percentages (0-100), therefor divide by 100
d3.tsv("data.tsv", function(d) {
  d.sleepquality = (+d.sleepquality)/100;
  return d;
}, function(error, data) {
  if (error) throw error;

  // set range of data input

  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.sleepquality; })]);

// group x axis, add class attribute and transform attribute, draw axis
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

// group y axis, add class attribute, set ticks (amount of numbered notches) and type (percentage)
// draw axis and rotate vertically
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(6, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 4)
      .attr("dy", "0.80em")
      .attr("text-anchor", "end")
      .text("sleepquality");

// group bars, draw the actual <rect> elements and position them
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("y", function(d) { return y(d.sleepquality); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.sleepquality); });
});