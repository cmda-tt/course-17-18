/* 
* Based on: https://bl.ocks.org/mbostock/4063269
*/

// Get SVG element and select the width and height attribute
var svg = d3.select("svg"),
width = +svg.attr("width"),
height = +svg.attr("height");

// Specifies how to format the found value
// d = decimal notation, rounded to integer, https://github.com/d3/d3-format
var format = d3.format(",d");

// Create a color scheme function based on predefined schemes
// https://github.com/d3/d3-scale#schemeCategory20
var color = d3.scaleOrdinal(d3.schemeCategory20);

// Creates a pack to contain all data: https://github.com/d3/d3-hierarchy/blob/master/README.md#pack
// .size() specifies the width and height of the pack
// .padding() specifies space between the packs and its children
var pack = d3.pack()
.size([width, height])
.padding(4.5);

// Load CSV and return the found data: https://github.com/d3/d3-request/blob/master/README.md#csv
d3.csv("index.csv", function(d) {
  d.value = +d.value;
  if (d.value) return d;
}, function(error, classes) {
  if (error) throw error;

  // CSV is not hierarchical layout
  // .hierarchy() creates hierarchical layout: https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy
  var root = d3.hierarchy({children: classes})
  // Sets the total value for each found group of data: https://github.com/d3/d3-hierarchy/blob/master/README.md#node_sum
  .sum(function(d) { return d.value; })
  .each(function(d) {
    // Creates groups based dot separated string, like ('levi.hobbys.skateboarding')
    if (id = d.data.id) {
      var id, i = id.lastIndexOf(".");
      d.id = id;
      // Path to package, e.g. 'levi.hobbys'
      d.package = id.slice(0, i);
      // Classname of value, e.g. 'skateboarding'
      d.class = id.slice(i + 1);
    }
  });

  /* Custom edit by Levi Zimmerman */
  // Stores leaves of pack in variable
  var leaves = pack(root).leaves();
  // Create new array and store in cluster variable
  var clusters = [];
  // Append <g> element to SVG with class name legend
  svg.append("g").attr("class", "legend");
  // Loop through leaves and create a clusterObject per package name
  leaves.forEach(function(leave, index) {
    // Replace global identifier 'levi.' with an empty string
    var clusterName = leave.package.replace('levi.', '');
    // Find cluster based on name in clusters array
    var foundInClusters = clusters.find(function(object) {return object.name === clusterName});
    // If cluster is nog yet defined create a new cluster object
    if (foundInClusters === undefined) {
      var clusterObject = {
        name: clusterName,
        color: color(leave.package)
      };
      // Push new cluster object to clusters array
      clusters.push(clusterObject);
    }
  });
  // Select element with 'legend' class name
  var legend = svg.select(".legend");
  // Loop through clusters and create a legend item per cluster
  clusters.forEach(function(cluster, index) {
    // Create <g> element for each item
    var legendItem = legend.append("g")
    .attr("class", "legend-item")
    .attr("transform", "translate(0,"+index*25+")");
    // Add color rectangle for each item
    legendItem.append("rect")
    .attr("fill", cluster.color)
    .attr("width", 20)
    .attr("height", 20);
    // Add label to each item
    legendItem.append("text")
    .attr("text-anchor", "start")
    .attr("x", 30)
    .attr("y", 15)
    .text(cluster.name);
  });
  /* End Custom edit by Levi Zimmerman */

  // Select all existing node, in case there is a input change and data was rendered before
  var node = svg.selectAll(".node")
  // Join the data: https://github.com/d3/d3-selection/blob/master/README.md#selection_data
  .data(leaves)
  // Use .enter() to ensure the data entry has a corresponding DOM element: https://github.com/d3/d3-selection/blob/master/README.md#selection_enter
  .enter().append("g")
  // Add classname 'node' to <g> element
  .attr("class", "node")
  // Position each class based on the X and Y given by the .hierarchy() function
  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });


  // Append <circle> element 
  node.append("circle")
  // Set ID attribute based on the ID of the class
  .attr("id", function(d) { return d.id; })
  // Set radius of circle using the class radius given by the .hierarchy() function
  .attr("r", function(d) { return d.r; })
  // Set fill of circle using the color scheme function
  .style("fill", function(d) { return color(d.package); });

  // Append <clipPath> element 
  // Ensure that text or other children elements of <g> will not exceed the boundaries of the circle shape
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath
  node.append("clipPath")
  // Set ID attribute based on the ID of the class + 'clip-' as prefix
  .attr("id", function(d) { return "clip-" + d.id; })
  // Append <use> element to duplicate a node from the SVG document: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath
  .append("use")
  // Set reference attribute to link the use element to the circle element based on the ID of the class
  .attr("xlink:href", function(d) { return "#" + d.id; });

  // Append <text> element
  node.append("text")
  // Set clip-path attribute to ensure the text will not overflow the earlier defined <circle> element
  // refer to clipping path using the ID of the class
  .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
  // Select all <tspan> element
  // used to address text, font properties with a <text> element: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
  .selectAll("tspan")
  // Use regex to detect camelCase in strings
  .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
  // Append <tspan> elements
  .enter().append("tspan")
  // Set x attribute to 0 = center of element
  .attr("x", 0)
  // Set y attribute using a function
  // Based on the amount of <tspan> elements the text will be vertically aligned
  .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
  // Set textNode of <tspan> to the class value
  .text(function(d) { return d; });

  // To improve the accessibility of the <svg>, we add a <title> element
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title
  node.append("title")
  .text(function(d) { return d.id + "\n" + format(d.value); });
});
