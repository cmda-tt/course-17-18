// Created by: https://bl.ocks.org/alandunning/7008d0332cc28a826b37b3cf6e7bd998


var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var tooltip = d3.select("body").append("div").attr("class", "toolTip");

var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleBand().range([height, 0]);

var g = svg.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("data.json", function(error, data) {
  	if (error) throw error;

  	data.sort(function(a, b) { return a.value - b.value; });

  	x.domain([0, d3.max(data, function(d) { return d.value; })]);
    y.domain(data.map(function(d) { return d.area; })).padding(0.1);

    g.append("g")
        .attr("class", "x axis")
       	.attr("transform", "translate(0," + height + ")")
      	.call(d3.axisBottom(x).ticks(5).tickFormat(function(d) { return parseInt(d / 1000); }).tickSizeInner([-height]));

    g.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y));

  var bar = g.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("height", y.bandwidth())
        .attr("y", function(d) { return y(d.area); })
        .attr("width", function(d) { return x(d.value); })
        .transition()
      .delay(function(d, i) { return i * 30; })
      .on("start", function gradient() {
                          d3.active(this)
                            .transition()
                              .style("fill", "#e74c3c")
                              .style("stroke-width", 6)
                              .delay(300)
                              .style("height", 20)
                            .transition()
                              .style("fill", "#e67e22")
                              .style("stroke-width", 100)
                              .delay(300)
                              .style("height", 400)
                            .transition()
                              .style("fill", "#f1c40f")
                              .style("stroke-width", 63)
                              .delay(300)
                              .style("height", 20)
                            .transition()
                              .style("fill", "#f39c12")
                              .delay(300)
                              .style("height", 100)
                            .transition()
                              .on("start", gradient);


        })





});
