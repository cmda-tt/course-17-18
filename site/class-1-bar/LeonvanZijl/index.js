// Code from https://bl.ocks.org/mbostock/3885304

// Create a variable from the svg
var svg = d3.select("svg"),
	// Creates a var with values which will later be used as margins
    margin = {top: 20, right: 20, bottom: 30, left: 60},
	// The width & height is calculated by subtracting the margins from the values
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

//scaleBand tells what values to use for the width width and padding of the bars - https://github.com/d3/d3-scale#band-scales
var x = d3.scaleBand().rangeRound([0, width]).padding(0.5),
	//scaleLinear is for the height - https://github.com/d3/d3-scale#linear-scales
    y = d3.scaleLinear().rangeRound([height, 0]);

// Creats an group inside the svg with the margins from the margin variable
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Reads the data from the .tsv file
d3.tsv("data.tsv", function(d) {
	d.frequency = +d.frequency;
	return d;
	},

	function(error, data) {
  		if (error) throw error;

  		x.domain(data.map(function(d) { return d.letter; }));
  		y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

	//Places another group (X axis) in the previous group with a couple of attrbutes
  	g.append("g")
    	.attr("class", "doesnt matter")
		.attr("font-size", "60")
      	.attr("transform", "translate(0," + height + ")")
      	.call(d3.axisBottom(x));

	//Places another group (Y axis) in the previous group with a couple of attrbutes
  	g.append("g")
      	.attr("class", "axisy")
		.attr("font-size", "60")
      	.call(d3.axisLeft(y).ticks(6, "%"))
    	.append("text").attr("fill", "red")
      	.attr("transform", "rotate(-90)")
      	.attr("y", 6)
      	.attr("dy", "0.71em")
		.attr("fill", "red")
      	.attr("text-anchor", "end")
      	.text("Frequency");

	//Selects all text elements in the svg and adds attributes to them
	g.selectAll("text")
		.attr("fill", "#1C2541")
		.attr("font-size", "20");

	//Selects all line elements in the svg and adds attributes to them
	g.selectAll("line")
		.attr("stroke", "#0B132B");

	//Selects the bar elements in the svg and adds attributes to them
  	g.selectAll(".bar")
    	.data(data)
    	.enter().append("rect")
      	.attr("class", "bar")
		.attr("rx", "10")
		.attr("ry", "10")
		.attr("font-size", "60")
      	.attr("x", function(d) { return x(d.letter); })
      	.attr("y", function(d) { return y(d.frequency); })
      	.attr("width", x.bandwidth())
      	.attr("height", function(d) { return height - y(d.frequency);
	});

});
