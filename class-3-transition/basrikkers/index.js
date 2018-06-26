
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var format = d3.format(",d");

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pack = d3.pack()
    .size([width, height])
    .padding(1.5);

d3.csv("index.csv", function(d) {
  d.value = +d.value;
  if (d.value) return d;
}, function(error, classes) {
  if (error) throw error;

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

  node.append("circle")
      .attr("id", function(d) { return d.id; })
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.package); });


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
      .style("font-size", "18")
      .text(function(d) { return d; });

  node.append("title")
      .text(function(d) { return d.id + "\n" + format(d.value); });



  svg.selectAll('.node') //select all elements with class "node"
  .on("click", function() {//on click eventhandler
        widthdefault = d3.select(this).select('circle').attr("r") //default radius of the circles
        textdefault =  d3.select(this).select('text').select('tspan').style("font-size") //default font-size of the text within the circles

          d3.selectAll('circle') // select all circles
          .transition()
          .duration("500")
          .ease(d3.easeLinear) // linear motion
          .style("opacity", 0.1) // make all circles opacity 0
          .transition()
          .delay(1000)
          .ease(d3.easeLinear) //linear motion
          .duration("300")
          .style("opacity", 1) // make opasity 100% again.

          d3.selectAll('text').selectAll('tspan') //all text elements
          .transition()
          .duration("500")
          .ease(d3.easeLinear)
          .style("opacity", 0)
          .transition()
          .delay(1000)
          .ease(d3.easeLinear)
          .duration("300")
          .style("opacity", 1)

          d3.select(this).select('circle') //select specific circles that was clicked
          .transition()
          .duration("500")
          .ease(d3.easeBackIn)
          .attr("r", widthdefault * 2) //multiply r by 2, circle 2 times bigger
          .transition()
          .delay(500)
          .ease(d3.easeLinear)
          .duration("500")
          .attr("r", widthdefault)
          .style("fill", "grey") //circle grey, so you know that you've clicked it already

          d3.select(this).select('text').selectAll('tspan')//specific text from clicked circle
          .transition()
          .duration("500")
          .ease(d3.easeBackIn)
          .style("font-size", "24")
          .transition()
          .delay(500)
          .ease(d3.easeLinear)
          .duration("500")
          .style("font-size", textdefault)





  })

});
