// https://bl.ocks.org/mbostock/3885304

var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data.tsv", function (d) {
  d.stappen = +d.stappen;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.dag; }));
  y.domain([0, d3.max(data, function(d) { return d.stappen; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
    .attr("x", 0)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
    .attr("fill", "black")
      .text("Stappen");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.dag); })
      .attr("y", function(d) { return y(d.stappen); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.stappen); });
});



