// Selects the SVG element and removes the margins
// This ensures we know how much space we have to work with.

var svg = d3.select("svg"),
    margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*
var svg = d3.select('svg');
var height = parseInt(svg.style('height'), 10);
var margin = { top: 48, right: 48, bottom: 120, left: 48 };
var brushMargin = { top: height - margin.bottom + 24, right: 48, bottom: 48, left: 48 };
var width = parseInt(svg.style('width'), 10) - margin.left - margin.right;
var chartHeight = height - margin.top - margin.bottom;
var brushHeight = height - brushMargin.top - brushMargin.bottom;
*/

// Adds definitions element to the SVG
// Used to store 'stylesheet' like references inside the SVG
var defs = svg.append("defs");

/*
//CREATING A BRUSH

// Create a var brush for the horizontal axis
var brush = d3.brushX()
    .extent([[0, 0], [width, brushHeight]])
    .on('brush end', brushed);

var brushMargin = { top: height - margin.bottom + 20, right: 20, bottom: 30, left: 50 };
// create a var that defines the height of the brush
var brushHeight = height - brushMargin.top - brushMargin.bottom;

// Create function called brushed
function brushed() {
    var s = d3.event.selection || x2.range();

    /* Ignore brush-by-zoom */
    /*
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') {
        return;
    }

    x.domain(s.map(x2.invert, x2));

    focus.select('.area').attr('d', area);
    focus.select('.axis--x').call(xAxis);

    svg.select('.zoom')
        .call(zoom.transform, d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0));
}
*/

// Configures a gradient and adds it to the definitions mentioned above
var gradient = defs.append("linearGradient")
    .attr("id", "svgGradient")
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "0%")
    .attr("y2", "100%");

// Starting colour of the gradient
gradient.append("stop")
    .attr('class', 'start')
    .attr("offset", "0%")
    .attr("stop-color", "red")
    .attr("stop-opacity", 1);

// End colour of the gradient
gradient.append("stop")
    .attr('class', 'end')
    .attr("offset", "100%")
    .attr("stop-color", "blue")
    .attr("stop-opacity", 1);


// Creates time parsing function to match the data
// This ensures D3 knows the way we formatted the dates
var parseTime = d3.timeParse("%Y%m%d");

// Adds a horizontal scale expecting time values
var x = d3.scaleTime()
    .rangeRound([0, width]);

// Adds a vertical scale expecting decimals
var y = d3.scaleLinear()
    .rangeRound([height, 0]);

// Adds the graph line
var line = d3.line()
    .x(function (d) { return x(d.date); })
    .y(function (d) { return y(d.temp); })
    .curve(d3.curveCatmullRom.alpha(0.2)); // Rounds the corners of the line


// Reading the data from the CSV file, then parsing it with the `parseTime` function
d3.csv("index.csv", function (d) {
    d.date = parseTime(d.date);
    return d;
}, function (error, data) {
    if (error) throw error;

    // Uses D3 extent function to get the highest and lowest values for the x-axis
    x.domain(d3.extent(data, function (d) { return d.date; }));
    // Changes the scale of the y-axis to -10 : 25 degrees
    // Hardcoded because we already know what temperatures we can expect in the Netherlands
    // Without this, the chart became unreadable
    y.domain([-10.0, 25.0]);

    // Adds bottom axis and changes the amount of year "ticks" to every year
    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(
        d3.axisBottom(x).ticks(
            d3.timeYear.every(1)
        )
        )
        .select(".domain") // Removes the bottom line
        .remove();

    // Selects all text rendered so far to change its styling
    g.selectAll("text")
        .attr("y", 7)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(50)")
        .style("text-anchor", "start");

    // Adds left axis and the text next to it
    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Temperature (°c)");

    // Changes the color of all the fill and text elements to white
    g.selectAll(["fill", "text"])
        .attr("fill", "#fff");

    // Changes the color of all the line, stroke and path elements to white
    g.selectAll(["line", "stroke", "path"])
        .attr("stroke", "#fff");

    // Creates the line graphic and adds some styling
    g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line)
        .attr("stroke", "url(#svgGradient)"); // Adds the gradient to the line
});
