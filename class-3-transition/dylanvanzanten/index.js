// Original: https://bl.ocks.org/mbostock/4063269

// SVG
var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

var format = d3.format(",d");

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pack = d3.pack()
  .size([width, height])
  .padding(1.5);

// Data being loaded in
d3.csv("flare.csv", function (d) {
  d.value = +d.value;
  if (d.value) return d;
}, function (error, classes) {
  if (error) throw error;

  var root = d3.hierarchy({
      children: classes
    })
    .sum(function (d) {
      return d.value;
    })
    .each(function (d) {
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
    .attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

  node.append("circle")
    .attr("id", function (d) {
      return d.id;
    })
    .attr("r", function (d) {
      return d.r;
    })
    .style("fill", function (d) {
      return color(d.package);
    });

  node.append("clipPath")
    .attr("id", function (d) {
      return "clip-" + d.id;
    })
    .append("use")
    .attr("xlink:href", function (d) {
      return "#" + d.id;
    });

  node.append("text")
    .attr("clip-path", function (d) {
      return "url(#clip-" + d.id + ")";
    })
    .selectAll("tspan")
    .data(function (d) {
      return d.class.split(/(?=[A-Z][^A-Z])/g);
    })
    .enter().append("tspan")
    .attr("x", 0)
    .attr("y", function (d, i, nodes) {
      return 13 + (i - nodes.length / 2 - 0.5) * 10;
    })
    .text(function (d) {
      return d;
    });

  node.append("title")
    .text(function (d) {
      return d.id + "\n" + format(d.value);
    });

  // The ease transition for the bubble
  d3.selectAll('circle')
    .on('mouseover', function (d) {
      d3.select(this)
        .transition()
        .duration(2000)
        .ease(d3.easeBounceOut)
        .style("fill", "#E6E6E6");
    })

  // Fade transition for the bubble
  d3.selectAll('circle')
    .on('click', function (d) {
      d3.select(this)
      .transition()
      .duration(4000)
      .style("fill", "#000");
    });
});