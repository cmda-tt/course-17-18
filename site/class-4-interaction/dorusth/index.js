//selecteert het svg element in de html
var svg = d3.select("svg"),
	//maakt de marign waardes aan
	margin = {
		top: 20,
		right: 20,
		bottom: 90,
		left: 90
	},
	//stelt de het formaat van de grafiek aan dmv de margins en de grote van het svg "canvas"
	width = +svg.attr("width") - margin.left - margin.right,
	height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
	y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Load in the tsv file with data
d3.tsv("data.tsv", function(d) {
	d.speakers = +d.speakers;
	return d;
}, function(error, data) {
	if (error)
		throw error;

	//Define X and Y axis based on the values from the dataset
	x.domain(data.map(function(d) {
		return d.language;
	}));
	y.domain([
		0,
		d3.max(data, function(d) {
			return d.speakers;
		})
	]);

	//A svg group is made for te X axis
	g.append("g").attr("class", "axis axis--x").attr("transform", "translate(1," + height + ")").call(d3.axisBottom(x))

	//http://bl.ocks.org/d3noob/ccdcb7673cdb3a796e13 <-- inspiration from ||| the titles of the x axis are rotated
		.selectAll("text").style("text-anchor", "end").attr("dx", "-.8em").attr("dy", ".15em").attr("transform", function(d) {
		return "rotate(-65)"
	});

	//A svg group is made for te X axis
	g.append("g").attr("class", "axis axis--y").call(d3.axisLeft(y).ticks(16)).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", "0.71em").attr("text-anchor", "end").text("speakers");

	//The bars for the graph are defined
	g.selectAll(".bar").data(data).enter().append("rect").attr("class", "bar").attr("x", function(d) {
		return x(d.language);
	}).attr("y", function(d) {
		return y(d.speakers);
	})
	//The bars get a random fill with every reload
		.attr("fill", "#" + Math.floor(Math.random() * 999999)).attr("width", x.bandwidth()).attr("height", function(d) {
		return height - y(d.speakers);
	});

	//when the check changes its state it triggers the onchange function
	d3.select("input").on("change", onChange);

	var sortTimeout = setTimeout(function() {
		d3.select("input").property("checked", false).each(onChange);
	}, 0);

	function onChange() {
		clearTimeout(sortTimeout);
		var x0 = x.domain(data.sort(this.checked
			// when checked data is sorted by speakers
			? function(a, b) {
				return b.speakers - a.speakers;
			}
			//when not checkt its sorted alphabeticaly by language
			: function(a, b) {
				return d3.ascending(a.language, b.language);
			}).map(function(d) {
			return d.language;
		})).copy();


		svg.selectAll(".bar").sort(function(a, b) {
			return x0(a.language) - x0(b.language);
		});

		var transition = svg.transition().duration(750),
			delay = function(d, i) {
				return i * 0;
			};

		transition.selectAll(".bar").delay(delay).attr("x", function(d) {
			return x0(d.language);
		});

		// The languages on the X axis are rearanged according to the sort value
		transition.select(".axis--x").call(d3.axisBottom(x)).selectAll("g").delay(delay);
	}
});
