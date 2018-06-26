# Transitions
This is a d3 graph with some animations in the size and color of the circles


## Features
I added a transition for the bubbles
```
.transition() //make a transition over time for the following elements
.attr("r", function(d) { return d.r; })
.ease(d3.easeBounce)
.delay(1000)
.style("fill", function(d) { return color(d.package); })
.duration(1500);
```

A hover transition
```
.on('mouseover', function(d){ //when the mouse is on the circle
d3.select(this)
.transition()
.duration(950)
.attr("r", d.r + 100) // increases the size of the bubble
.style("z-index", 1000); //puts it on top of all the other circles
})
```

and a mouseout transition
```
.on('mouseout', function(d){
	d3.select(this)
	.transition()
	.duration(950)
	.attr("r", d.r) // brings it back to the normal size
	.style("z-index", 1); // puts the z-index back to normal
})
```

## License

The original code for the graph belongs to mbostock and i added some features

[original]: https://bl.ocks.org/mbostock/4063269
