# The Transition Assignment

For this assignment I took the [Stacked-to-Grouped Bars chart](http://bl.ocks.org/mbostock/3943967) and copied the files into my text editor. 

First of all I moved the JS and CSS into their own files. 

## The code I changed

The following code describes the way of how i applied transition and easing:

```js
function transitionStacked() {
  y.domain([0, y1Max]);

 rect.transition()
-->   .duration(1000)
      .delay(function(d, i) { return i * 10; })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
      .transition()
-->   .style('fill', 'red')  
      .attr("x", function(d, i) { return x(i); })
      .attr("width", x.bandwidth())
-->   .ease(d3.easeBounceOut)
-->   .delay(750);

}
```
I did this for the transitionStacked function as well as the transitionGrouped function. I gave the transition a easing of bounceOut so the graph will sightly bounce at the end of the transition for a nice look. Besides that I gave the transition a style and fill the graph with a color (red and pink).

## License

MIT @Björn Völkers
