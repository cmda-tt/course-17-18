// Original Dual-scale-D3-Bar-Chart https://github.com/liufly/Dual-scale-D3-Bar-Chart made with d3js by liufly
var margin = {top: 80, right: 150, bottom: 80, left: 120},
width = 600 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

var x = d3.scaleBand()
    .range([0, width], .1)
    .paddingOuter(0.20)
    .paddingInner(0.20);

// scale for the data from the left yAxis
var y0 = d3.scaleLinear()
    .domain([0, 4])
    .range([height, 0]),

// scale for the data from the right yAxis
y1 = d3.scaleLinear()
    .domain([0, 60])
    .range([height, 0]);

// xAxis 
var xAxis = d3.axisBottom(x);

// create left yAxis
var yAxisLeft = d3.axisLeft(y0)
    .scale(y0)
    .ticks(4)

// create right yAxis
var yAxisRight = d3.axisRight(y1)
    .scale(y1)
    .ticks(6)

// create svg inside de body inside the HTML
var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("class", "graph")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// loads data
d3.tsv("data.tsv", type, function(error, data) {
    x.domain(data.map(function(d) { return d.day; }));
    y0.domain([0, d3.max(data, function(d) { return d.totaal; })]);

    // creates a group for the xAxis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // creates a group for the yAxis on the left
    svg.append("g")
        .attr("class", "y axis axisLeft")
        .attr("transform", "translate(0,0)")
        .call(yAxisLeft)
        .append("text")
        .attr("y", 6)
        .attr("dy", "-2em")
        .style("text-anchor", "end")
        .text("Hours phone usage");

    // creates a group for the yAxis on the right
    svg.append("g")
        .attr("class", "y axis axisRight")
        .attr("transform", "translate(" + (width) + ",0)")
        .call(yAxisRight)
        .append("text")
        .attr("y", 6)
        .attr("dy", "-2em")
        .attr("dx", "2em")
        .style("text-anchor", "start")
        .text("Minutes Whatsapp usage");

    // enter the data 
    bars = svg.selectAll(".bar")
        .data(data)
        .enter();
        
    // create a rect for the data y0
    bars.append("rect")
        .attr("class", "bar1")
        .attr("x", function(d) { return x(d.day); })
        .attr("width", x.bandwidth()/2)
        .attr("height",0)
        .attr("y", height)
        
        .transition()
            .attr("height", function(d,i,j) { return height - y0(d.totaal); })
            .attr("y", function(d) { return y0(d.totaal); })
            .delay(function(d, i){
                return i * 500;
            })
            .duration(500)
            .ease(d3.easeBounce);

    // create a rect for the data y1
    bars.append("rect")
        .attr("class", "bar2")
        .attr("x", function(d) { return x(d.day) + x.bandwidth()/2; })
        .attr("width", x.bandwidth() / 2)
        .attr("height",0)
        .attr("y", height)
        
        .transition()
            .attr("height", function(d,i,j) { return height - y1(d.whatsapp); })
            .attr("y", function(d) { return y1(d.whatsapp); })
            .delay(function(d, i){
                return i * 550;
            })
            .duration(400)
            .ease(d3.easeBounce);

    bars.selectAll("rect")
        .on("mouseover", function(d) {
            d3.select(this).style("opacity", .5);
        })
        .on("mouseout", function(d){
        d3.select(this).style("opacity", 1); 
        });
});

function type(d) {
    d.totaal = +d.totaal; // Sums up the data of the row totaal.
    return d;
    
}


