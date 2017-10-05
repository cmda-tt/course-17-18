//Select svg and sets margin, width and height
var svg = d3.select("svg"),
  margin = {
    top: 20,
    right: 40,
    bottom: 30,
    left: 40
  },
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom;

//Sets padding between rectrangles and the height of graph
var x = d3.scaleBand().rangeRound([0, width]).padding(0.4),
  y = d3.scaleLinear().rangeRound([height, 0]);

//Add an group to the svg with attribute
var g = svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Loads data
d3.csv("data.csv", function(d) {
  d.distance = +d.distance;
  return d;
}, function(error, data) {
  if (error) throw error;

  //Sets data from x axis
  x.domain(data.map(function(d) {
    return d.day;
  }));
  //Sets data from y axis
  y.domain([0, d3.max(data, function(d) {
    return d.distance;
  })]);

  //Sets the units of the x axis
  g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));


  //Sets the units of the y axis
  g.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y).ticks(8))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("distance");

  //Selects all bars and sets the height from the data
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) {
      return x(d.day);
    })
    .attr("y", function(d) {
      return y(d.distance);
    })
    .attr("width", x.bandwidth())
    .attr("height", function(d) {
      return height - y(d.distance);
    });
});

/*
Code from https://bl.ocks.org/mbostock/3885304
*/
