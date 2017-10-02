<!--Based on https://bl.ocks.org/mbostock/3885304 by Mike Bostock-->

//Select svg element, add height, width and padding 
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

//Define edges of barchart 
var x = d3.scaleBand().rangeRound([0, width]).padding(0.2),
    y = d3.scaleLinear().rangeRound([height, 0]);

//create a group and it to the svg
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Load the tsv file
d3.tsv("data.tsv", function (d) {
  d.frequency = +d.frequency;
  return d;
}, function (error, data) {
  if (error) throw error;

 //setting the domains of the barchart  
  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

//create a group, attribute x axis  
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    
//create a group, attribute y axis 
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");
    
//Select all bars and set height and width 
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("y", function(d) { return y(d.frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.frequency); });
});