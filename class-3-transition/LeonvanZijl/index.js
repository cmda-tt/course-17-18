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
	},function(error, classes) {
	if (error) throw error;

	var root = d3.hierarchy({children: classes})
      	.sum(function(d) { return d.value; })
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
      	.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  	node.append("circle")
      	.attr("id", function(d) { return d.id; })
	  	.attr("r", "0")
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

	// ====================ANIMATION====================

	//Getting the total amount of bars and adding 1 so the last bar will also be shown
	var totalNodes = svg.selectAll(".node").size() + 1;

	var index = 1;
	function animateBar () {
		setTimeout(function () { //Adds a 0.2s delay inbetween the functions calls

			svg.selectAll(".node:nth-child("+index+") circle")
			  	.transition().delay(1000).duration(1000).ease(d3.easeBounce).attr("r", function(d) { return d.r; })

		index++;                     //Add 1 to the current index

		if (index < totalNodes) { //If the index in lower than totalLanguages ..
			animateBar();             //Call the function again
		}

	}, 50); //The delay in between each function
	}

	animateBar(); //Start the loop

});
