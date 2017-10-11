//Set the dimensions and margins of the graph
var margin = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 40
	},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
	.range([0, width])
	.padding(0.1);
var y = d3.scaleLinear()
	.range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select(".container").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform",
		"translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("people.csv", function onload(error, data) {
	if (error) throw error;

	// format the data
	data.forEach(function(d) {
		d.age = +d.age;
	});

	//Sort the data on age (older -> younger)
	data.sort(function(x, y) {
		return d3.descending(x.age, y.age);
	});

	// Scale the range of the data in the domains
	x.domain(data.map(function(d) {
		return d.name;
	}));
	y.domain([0, d3.max(data, function(d) {
		return d.age;
	})]);

	// append the rectangles for the bar chart
	svg.selectAll(".bar")
		.data(data)
		.enter().append("rect")
		.attr("class", "bar")
		.attr("x", function(d) {
			return x(d.name);
		})
		.attr("width", x.bandwidth())
		.attr("y", function(d) {
			return y(d.age);
		})
		.attr("height", function(d) {
			return height - y(d.age);
		});

	// add the x Axis
	svg.append("g")
		.attr("transform", "translate(0," + height + ")")
		.attr('class', 'axisX')
		.call(d3.axisBottom(x));

	// add the y Axis
	svg.append("g")
		.attr('class', 'axisY')
		.call(d3.axisLeft(y));

	console.log(data); //Checking the whole data set
	console.log(data[3]); //Checking one particular data set

	// ================= TRIGGER =================

	d3.select("span").on('click', sortTrigger);

	function sortTrigger() {

		d3.select("span").text("Sort on Age");
		console.log("Sort on name");
		d3.select("span").on('click', unsortTrigger);

		// ================= SORTING NAME =================

		var x0 = x.domain(data.sort(sortOnName).map(name)).copy();
		var transition = svg.transition();

		console.log(data[3]);

		/* Move the bars. */
		transition.selectAll('.bar')
			.attr('x', barX0);

		/* Move the labels. */
		transition.select('.axisX')
			.call(d3.axisBottom(x))
			.selectAll('g');

		function barX0(d) {
			return x0(name(d));
		}

		/* Sort on Names. */
		function sortOnName(doesnt, matter) {
			return d3.ascending(name(doesnt), name(matter));
		}

		/* Get the name field for a row. */
		function name(d) {
			return d.name;
		}

		// ================= END SORTING NAME =================

		function unsortTrigger() {

			d3.select("span").text("Sort on Name");
			console.log("Sort on age");
			d3.select("span").on('click', sortTrigger);

			// ================= SORTING AGE =================

			var x0 = x.domain(data.sort(sortOnAge).map(name)).copy();
			var transition = svg.transition();

			data.sort(function(x, y) {
				return d3.ascending(x.age, y.age);
			});

			console.log(data);

			/* Move the bars. */
			transition.selectAll('.bar')
				.attr('x', barX0);

			/* Move the labels. */
			transition.select('.axisX')
				.call(d3.axisBottom(x))
				.selectAll('g');

			function barX0(d) {
				return x0(name(d));
			}

			/* Sort on Age. */
			function sortOnAge(a, b) {
				return age(b) - age(a);
			}

			/* Get the age field for a row. */
			function age(d) {
				return d.age;
			}

			// ================= END SORTING AGE =================

		}

	}

	// ================= END TRIGGER =================

});
