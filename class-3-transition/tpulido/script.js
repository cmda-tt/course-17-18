// code from https://bl.ocks.org/mbostock/4063269

var svg = d3.select("svg"),
	width = +svg.attr("width"),
	height = +svg.attr("height");

var format = d3.format(",d");

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pack = d3.pack()
	.size([width, height])
	.padding(1.5);

d3.csv("flare.csv", function(d) {
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

	var node = svg.selectAll(".node")
		.data(pack(root).leaves())
		.enter().append("g")
		.attr("class", "node")
		.attr("transform", function(d) {
			return "translate(" + d.x + "," + d.y + ")";
		});

	node.append("circle")
		.attr("id", function(d) {
			return d.id;
		})
		.attr("r", function(d) {
			return d.r;
		})
		.style("fill", function(d) {
			return color(d.package);
		});

	node.append("clipPath")
		.attr("id", function(d) {
			return "clip-" + d.id;
		})
		.append("use")
		.attr("xlink:href", function(d) {
			return "#" + d.id;
		});

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

	node.append("title")
		.text(function(d) {
			return d.id + "\n" + format(d.value);
		});


	// CODE FROM http://bl.ocks.org/jdarling/06019d16cb5fd6795edf
	var randomColor = (function() {
		var golden_ratio_conjugate = 0.618033988749895;
		var h = Math.random();

		var hslToRgb = function(h, s, l) {
			var r, g, b;

			if (s == 0) {
				r = g = b = l; // achromatic
			} else {
				function hue2rgb(p, q, t) {
					if (t < 0) t += 1;
					if (t > 1) t -= 1;
					if (t < 1 / 6) return p + (q - p) * 6 * t;
					if (t < 1 / 2) return q;
					if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
					return p;
				}

				var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
				var p = 2 * l - q;
				r = hue2rgb(p, q, h + 1 / 3);
				g = hue2rgb(p, q, h);
				b = hue2rgb(p, q, h - 1 / 3);
			}

			return '#' + Math.round(r * 255).toString(16) + Math.round(g * 255).toString(16) + Math.round(b * 255).toString(16);
		};

		return function() {
			h += golden_ratio_conjugate;
			h %= 1;
			return hslToRgb(h, 0.5, 0.60);
		};
	})();


	// CODE FROM https://stackoverflow.com/questions/42155320/how-to-make-a-bar-bigger-on-mouseover-in-d3
	var randomSize = (function() {
		var min = 80
		var max = 150
		return Math.floor(Math.random() * (max - min + 1)) + min;
	})
  var randomFontSize = (function() {
		var min = 14
		var max = 40
		return Math.floor(Math.random() * (max - min + 1)) + min;
	})

	// ON HOVER : CIRCLE BIGGER
	d3.selectAll('circle')
		.on("mouseover", function(d) {
			d3.select(this)
				.transition()
				.attr("r", randomSize()).style("fill", randomColor())
				.ease(d3.easeCubicInOut)
				.duration(500)
				.delay(750)
				.attr("r", randomSize()).style("fill", randomColor())
		})

	// ON CLICK : REMOVE
	d3.selectAll('circle')
		.on("click", function(d) {
			d3.select(this)
			this.remove()
		})

	// on mouse over, make text diffrent color
	d3.selectAll('text')
		.on("mouseover", function(d) {
			d3.select(this)
      .attr("font-size", randomFontSize())
		})
});
