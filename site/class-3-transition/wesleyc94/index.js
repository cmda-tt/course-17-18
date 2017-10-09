// original work: https://bl.ocks.org/mbostock/4063269
// Select the elements
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var format = d3.format(",d");

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pack = d3.pack()
    .size([width, height])
    .padding(1.5);
// Get the data from the index.csv
d3.csv("index.csv", function(d) {
    d.value = +d.value;
    if (d.value) return d;
}, function(error, classes) {
    if (error) throw error;

    var root = d3.hierarchy({ children: classes })
        .sum(function(d) { return d.value; })
        .each(function(d) {
            if (id = d.data.id) {
                var id, i = id.lastIndexOf(".");
                d.id = id;
                d.package = id.slice(0, i);
                d.class = id.slice(i + 1);
            }
        });
// Below here the elements will be created.
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
        .text(function(d) { return d; });

    node.append("title")
        .text(function(d) { return d.id + "\n" + format(d.value); });
// On every circle i've added the transition fading from silver to red.
    d3.selectAll('circle')
        .transition().duration(3000).style('fill', 'silver') // Fade to silver.
        .transition().style('fill', 'red') //after silver fade to red.
        .transition() // next up
        .delay(3000) // delay for three seconds…
        .ease(d3.easeBounce) //and bounce…
        .style('fill', 'transparent') //to transparent…
        .remove() //and remove
});