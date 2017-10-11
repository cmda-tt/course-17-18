//Sets the diameter of the svg
var diameter = 660;

//Selects svg from document and sets the diameter
var svg = d3.select('body').append('svg')
  .attr("width", diameter)
  .attr("height", diameter);

//Sets the format
var format = d3.format(",d");

//Sets own color scheme
var color = d3.scaleOrdinal(["#DB5542", "#5CCBC1", "9DE0DA", "#F1BBB3", "#333136", "#ADADAF"]);

// create a new circle-packing layout
var pack = d3.pack()
  .size([diameter, diameter])
  .padding(3.5);

//Gets the data out of the CSV file.
d3.csv("index.csv", function(d) {
  d.value = +d.value;
  if (d.value) return d;
}, function(error, classes) {
  if (error) throw error;

  var root = d3.hierarchy({
      children: classes
    })
    .sum(function(d) {
      return d.value;
    })
    .each(function(d) {
      if (id = d.data.id) {
        var id, i = id.lastIndexOf(".");
        d.id = id;
        d.package = id.slice(0, i);
        d.class = id.slice(i + 1);
      }
    });

  //Selects all nodes
  var node = svg.selectAll(".node")
    .data(pack(root).leaves())
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

  //Append circle to the root node and adds atrributes
  node.append("circle")
    .attr("id", function(d) {
      return d.id;
    })
    .style("fill", function(d) {
      return color(d.package);
    })
    //Animate
    .transition() //Fade
    .ease(d3.easeElasticOut) // Ease animation
    .attr("r", function(d) { // Sets the radius of the circles
      return d.r;
    })
    .duration(2000); // Duration of 2 seconds


  node.append("clipPath")
    .attr("id", function(d) {
      return "clip-" + d.id;
    })
    .append("use")
    .attr("xlink:href", function(d) {
      return "#" + d.id;
    });

  //Appends the text labels to the root node
  node.append("text")
    .attr("clip-path", function(d) {
      return "url(#clip-" + d.id + ")";
    })
    .selectAll("tspan")
    .data(function(d) {
      return d.class.split(/(?=[A-Z][^A-Z])/g);
    })
    .enter().append("tspan")
    .attr("x", 0)
    .attr("y", function(d, i, nodes) {
      return 13 + (i - nodes.length / 2 - 0.5) * 10;
    })
    .text(function(d) {
      return d;
    });

  node.selectAll("tspan:nth-child(2)")
    .attr("y", 15);


  //Append the title to the root node
  node.append("title")
    .text(function(d) {
      return d.id + "\n" + format(d.value);
    });

});

//Based on https://bl.ocks.org/mbostock/4063269
