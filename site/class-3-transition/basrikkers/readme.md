# D3 transitions
###### changing a static graph to a dynamic one using d3.transitions

## Background

I've taken the [bubble chart](https://bl.ocks.org/mbostock/4063269) and added the following code:

```JS
svg.selectAll('.node') //select all elements with class "node"
  .on("click", function() {//on click eventhandler
        widthdefault = d3.select(this).select('circle').attr("r") //default radius of the circles
        textdefault =  d3.select(this).select('text').select('tspan').style("font-size") //default font-size of the text within the circles

          d3.selectAll('circle') // select all circles
          .transition()
          .duration("500")
          .ease(d3.easeLinear) // linear motion
          .style("opacity", 0.1) // make all circles opacity 0
          .transition()
          .delay(1000)
          .ease(d3.easeLinear) //linear motion
          .duration("300")
          .style("opacity", 1) // make opasity 100% again.

          d3.selectAll('text').selectAll('tspan') //all text elements
          .transition()
          .duration("500")
          .ease(d3.easeLinear)
          .style("opacity", 0)
          .transition()
          .delay(1000)
          .ease(d3.easeLinear)
          .duration("300")
          .style("opacity", 1)

          d3.select(this).select('circle') //select specific circles that was clicked
          .transition()
          .duration("500")
          .ease(d3.easeBackIn)
          .attr("r", widthdefault * 2) //multiply r by 2, circle 2 times bigger
          .transition()
          .delay(500)
          .ease(d3.easeLinear)
          .duration("500")
          .attr("r", widthdefault)
          .style("fill", "grey") //circle grey, so you know that you've clicked it already

          d3.select(this).select('text').selectAll('tspan')//specific text from clicked circle
          .transition()
          .duration("500")
          .ease(d3.easeBackIn)
          .style("font-size", "24")
          .transition()
          .delay(500)
          .ease(d3.easeLinear)
          .duration("500")
          .style("font-size", textdefault)

```

After that i've changed the dataset, created a title and played with the style

## Features
d3-transitions

## License

GNU @basrikkers
