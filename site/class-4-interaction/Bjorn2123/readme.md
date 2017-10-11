# Interactivity

For this assignment i choose the [Bar Chart](https://bl.ocks.org/mbostock/3885304). After I put HTML, CSS and JS into their own files I starten to work with the code. 

## Code I Changed

The first code I added to the file was
```js
var formatPercent = d3.format(".0%");
```
Because I was working in this assignment with percentages.

Because I'm working with D3@4 I changed:

```js
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);
```
    
 To:
 
```js
var xAxis = d3.axisBottom(x)
    .scale(x)

var yAxis = d3.axisLeft(y)
    .scale(y)
    .tickFormat(formatPercent);
```
    
The following code I changed was a hard for me. That's why I looked at [d3.gallery](https://github.com/d3/d3/wiki/Gallery) for a couple examples. When i found the following code I adjusted it as far as I was capable of so that a transition was made in the chart. I applied the ease bounce, transition, delay and duration to this code. 

```js
   function change() {
        clearTimeout(sortTimeout);

        var x0 = x.domain(data.sort(this.checked ? function (a, b) {
                    return b.percentage - a.percentage;
                } : function (a, b) {
                    return d3.ascending(a.letter, b.letter);
                })
                .map(function (d) {
                    return d.letter;
                }))
            .copy();

        svg.selectAll(".bar")
            .sort(function (a, b) {
                return x0(a.letter) - x0(b.letter);
            });
        
        /*in onderstaande code geef ik de transitie van de sv een ease bounce en geef ik de transitie een duur van 1 seconde.*/

        var transition = svg.transition().duration(1000).ease(d3.easeBounce),
            delay = function (d, i) {
                return i * 50;
            };

        transition.selectAll(".bar")
            .delay(1000)
            .attr("x", function (d) {
                return x0(d.letter);
            });

        transition.select(".x.axis")
            .call(xAxis)
            .selectAll("g")
            .delay(1000);
    }
```

To let this all work i made a label in my html file that after it was checked let the chart move. I did that with the first function showed on the above code.
