/**
 * COMMENTS TO UNDERSTAND D3.JS A LIL'
 * 
 * .enter() creates the initial join of data to elements, creating one circle element for every data element in the array.
 * 
 * 
 * SOURCE:
 * - http://bl.ocks.org/alansmithy/e984477a741bc56db5a5
 * 
 */

// For changing the colors
let colorIndex = 1;

// The scale for z-axis
// The amount of keys to assign colors to
let zAxis = d3.scaleOrdinal()
	.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

// Margin is for size changes?
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

// Setting the width and height of the svg
const width = 960 - margin.left - margin.right,
	height = 400 - margin.top - margin.bottom;

function setData(data) {
	// Remove the svg to reset/update
	d3.select('svg').remove();
	// d3.select('svg').exit();

	// Select and add a new svg to add the data to.
	// Giving it a width and height
	d3.select('body')
		.append('svg')
		.attr('width', 960)
		.attr('height', 400);

	// Select the appended svg and using transform to position
	// The margins reveal the population text and y-axis. They were hidden
	let svg = d3.select("svg");
	let g = svg.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	// Range and padding x-axis
	// How it fullt works - idk yet
	let xAxis = d3.scaleBand()
		.rangeRound([0, width - 90])
		.paddingInner(0.25)
		.align(0.1);

	// Set the range/height in rangeRound
	// From height to 0 - 400 to 0 - in px?	
	let yAxis = d3.scaleLinear()
		.rangeRound([height, 0]);

	// Getting all the keys (The ages/years)
	let keys = data.columns.slice(1);

	// I think this sets all the states on the x-axis
	xAxis.domain(data.map(function (d) { return d.State; }));

	// Sets the values to the y-axis from 0 to the max
	// nice() round up the value/number nicely ;)
	yAxis.domain([0, d3.max(data, function (d) { return d.total; })]).nice();

	// Sets the keys for z-axis (the ages/years)
	// Not sure how the z is determined
	zAxis.domain(keys);


	g.append("g")
		.selectAll("g")
		// Set data?
		.data(d3.stack().keys(keys)(data))
		// Join the data
		.enter()
		.append("g")
		// Fill using the the range from z - on base of the d.key
		.attr("fill", function (d) { return zAxis(d.key); })
		.selectAll("rect")
		// Give rect the data (number of population)
		.data(function (d) { return d; })
		// Join the data to the rect
		.enter()
		// Set the rect
		.append("rect")
		// Set the x axis on basis of State?
		.attr("x", function (d) { return xAxis(d.data.State); })
		// It know to start at 0? index 1 is the next value to go to
		.attr("y", function (d) { return yAxis(d[1]); })
		// Set the height
		.attr("height", function (d) { return yAxis(d[0]) - yAxis(d[1]); })
		// Set width of the bar (based on rangeBound?)
		.attr("width", xAxis.bandwidth());

	// Append a g to add class & transform to
	// Set x-axis ticks (Where do the labels come from?) from the first g.append?
	g.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(0," + height + ")")
		// Call a function from this selection
		// Constructs a new bottom-oriented axis generator for the given scale, with empty tick arguments, a tick size of 6 and padding of 3. 
		.call(d3.axisBottom(xAxis));

	// set y-axis ticks + label
	g.append("g")
		.attr("class", "axis")
		.call(d3.axisLeft(yAxis).ticks(null, "s"))
		.append("text")
		.attr("x", 2)
		.attr("y", yAxis(yAxis.ticks().pop()) + 0.5)
		.attr("dy", "0.32em")
		.attr("fill", "#000")
		.attr("font-weight", "bold")
		.attr("text-anchor", "start")
		.text("Population");

	// Seems to mount right away.
	// Appending an group for the legend
	// Then append all g and give them data of the keys in reverse
	// enter() joins the data
	let legend = g.append("g")
		.attr("font-family", "sans-serif")
		.attr("font-size", 10)
		.attr("text-anchor", "end")
		.selectAll("g")
		.data(keys.slice().reverse())
		.enter()
		.append("g")
		.attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

	// Set a rect with the fill
	legend.append("rect")
		.attr("x", width - 19)
		.attr("width", 19)
		.attr("height", 19)
		.attr("fill", zAxis);

	// Give a label to the rect
	legend.append("text")
		.attr("x", width - 24)
		.attr("y", 9.5)
		.attr("dy", "0.32em")
		.text(function (d) { return d; });
}

// Load the base csv when window has loaded
// Unsorted
window.onload = function () {
	// d = data
	// i = index
	// columns = "labels"
	d3.csv("data.csv", function (d, i, columns) {
		for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
		d.total = t;
		return d;
	}, function (error, data) {
		if (error) throw error;
		setData(data);
	});
}

// All with .sort sort the data
d3.selectAll('.sort')
	.on('click', function (e) {
		let sortType = this.getAttribute('data-sort');

		d3.csv("data.csv", function (d, i, columns) {
			for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
			d.total = t;
			return d;
		}, function (error, data) {
			if (error) throw error;
			sortData(data, sortType);
		});
	});

// Sorting the data
function sortData(data, typeSort) {
	switch (typeSort) {
		case 'bigToSmall':
			data.sort(function (a, b) { return b.total - a.total; });
			setData(data)
			break;
		case 'smallToBig':
			data.sort(function (a, b) { return a.total - b.total; });
			setData(data);
			break;
		default:
			setData(data);
			break;
	}
}

// Change the colors
d3.selectAll('#colorChange')
	.on('click', function () {

		if (colorIndex === 1) {
			zAxis = d3.scaleOrdinal()
				.range(["#98abc5", "#e5e5ff", "#b2b2ff", "#9999ff", "#7f7fff", "#4c4cff", "#0000ff"]);
			colorIndex = 2;
		} else {
			zAxis = d3.scaleOrdinal()
				.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
			colorIndex = 1;
		}
	})
