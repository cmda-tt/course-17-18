/*Taken from https://bl.ocks.org/mbostock/4063269*/

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var format = d3.format(",d");

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pack = d3.pack()
    .size([width, height])
    .padding(1.5);

/*Data is loaded in*/

d3.csv("flare.csv", function(d) {
  d.value = +d.value;
  if (d.value) return d;
}, function(error, classes) {
  if (error) throw error;

/*'Classes' from data are put in a hierarchy..? */

  var root = d3.hierarchy({children: classes})
      .sum(function(d) { return d.value; })
      .each(function(d) {
        if (id = d.data.id) {
          var id, i = id.lastIndexOf(".");
          d.id = id;
          d.package = id.slice(0, i);
          d.class = id.slice(i + 1);
        }
      });

  var node = svg.selectAll(".node")
    .data(pack(root).leaves())
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

/*The circles are created for each entry of data*/

  node.append("circle")
      .attr("id", function(d) { return d.id; })
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.package); })
      .style("opacity", 0)
      .style("stroke", "DarkBlue")
      .style("stroke-width", "20px")
      .style("stroke-opacity", 1)
      .transition()
      .duration("5000")
      .ease(d3.easeCubicInOut)
      .style("stroke-opacity", .5)
      .style("stroke-width", "8px")
      .style("opacity", 0.5)
      .style("stroke", "white")
      .transition()
      .duration("5000")
      .ease(d3.easeCubicInOut)
      .style("stroke-opacity", 1)
      .style("stroke-width", "20px")
      .style("opacity", 1)
      .style("stroke", "DarkBlue");

  node.append("clipPath")
      .attr("id", function(d) { return "clip-" + d.id; })
    .append("use")
      .attr("xlink:href", function(d) { return "#" + d.id; });

  node.append("text")
      .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
    .selectAll("tspan")
    .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
    .enter().append("tspan")
      .attr("x", 0)
      .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
      .text(function(d) { return d; })
      .style("opacity", 0)
      .transition()
      .duration("5000")
      .ease(d3.easeCubicInOut)
      .style("opacity", 0.5)
      .transition()
      .duration("5000")
      .ease(d3.easeCubicInOut)
      .style("opacity", 1);

  node.append("title")
      .text(function(d) { return d.id + "\n" + format(d.value); });
});
