// All the credits go to the allmighty Mike Bostock
// Source: https://bl.ocks.org/mbostock/3886208, edited by @danoszz for styling purposes

// Select SVG and set size
var svg = d3.select("svg"),
	margin = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 40
	},
	width = +svg.attr("width") - margin.left - margin.right,
	height = +svg.attr("height") - margin.top - margin.bottom,
	g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
	.rangeRound([0, width])
	.paddingInner(0.05)
	.align(0.1);

var y = d3.scaleLinear()
	.rangeRound([height, 0]);

// Set stacked bar color style, with help from http://meyerweb.com/eric/tools/color-blend/#002CFC:FBFE56:5:hex
var z = d3.scaleOrdinal()
	.range(["#002CFC", "#3F61D3", "#7E95A9", "#BCCA80", "#FBFE56"]);

// Get data from file and pull data from columns with a for loop
d3.csv("index.csv", function(d, i, columns) {
	for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
	d.total = t;
	return d;
}, function(error, data) {
	if (error) throw error;

	// Slice columns for further selection
	var keys = data.columns.slice(1);


	data.sort(function(b, a) {
		return b.total - a.total;
	});

	// Set Year for x-axis
	x.domain(data.map(function(d) {
		return d.Year;
	}));
	y.domain([0, d3.max(data, function(d) {
		return d.total;
	})]).nice();


	z.domain(keys);



	g.append("g")
		.selectAll("g")
		.data(d3.stack().keys(keys)(data))
		.enter().append("g")
		.attr("fill", function(d) {
			return z(d.key);
		})
		.selectAll("rect")
		.data(function(d) {
			return d;
		})
		.enter().append("rect")
		.attr("x", function(d) {
			return x(d.data.Year);
		})
		.attr("y", function(d) {
			return y(d[1]);
		})
		.attr("height", function(d) {
			return y(d[0]) - y(d[1]);
		})
		.attr("width", x.bandwidth());

	g.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x));

	// Draw Y axis text on the left size
	g.append("g")
		.attr("class", "axis")
		.call(d3.axisLeft(y).ticks(null, "s"))
		.append("text")
		.attr("x", 2)
		.attr("y", y(y.ticks().pop()) + 0.5)
		.attr("dy", "0.32em")
		.attr("fill", "#000")
		.attr("font-weight", "bold")
		.attr("font-family", "Helvetica Neue")
		.attr("text-anchor", "start")
		.text("Bevolking");


	// Style legend
	var legend = g.append("g")
		.attr("font-family", "Helvetica Neue")
		.attr("font-size", 10)
		.attr("text-anchor", "end")
		.selectAll("g")
		.data(keys.slice().reverse())
		.enter().append("g")
		.attr("transform", function(d, i) {
			return "translate(20," + i * 20 + ")";
		});

	legend.append("rect")
		.attr("x", width - 19)
		.attr("width", 19)
		.attr("height", 19)
		.attr("fill", z);

	legend.append("text")
		.attr("x", width - 24)
		.attr("y", 9.5)
		.attr("dy", "0.32em")
		.text(function(d) {
			return d;
		});
});
