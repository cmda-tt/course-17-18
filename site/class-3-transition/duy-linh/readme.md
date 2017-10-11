# Transition!

## Achtergrond

Dit was een opdracht voor Front-End 3 waarbij we transities en de style hebben moeten aanpassen bij de gekozen chart.

## Aanpassingen

### index.html
* Javascript en CSS gelinked
* Legenda gemaakt binnen de SVG
* Titel toegevoegd

### index.css
* Gradient tekst toegevoegd (bron staat in de js file)

### index.js
* Waardes aangepast naar passende waardes
``` javascript
var n = 5,
m = 32; 
```

* Margin aangepast
``` javascript
margin = {top: 40, right: 10, bottom: 150, left: 10}
```

* Duration aangepast aan transitionGrouped() en transitionStacked()
``` javascript
function transitionGrouped() {
  y.domain([0, yMax]);

  rect.transition()
  .duration(1200)
  .delay(function(d, i) { return i * 10; })
  .attr("x", function(d, i) { return x(i) + x.bandwidth() / n * this.parentNode.__data__.key; })
  .attr("width", x.bandwidth() / n)
  .transition()
  .attr("y", function(d) { return y(d[1] - d[0]); })
  .attr("height", function(d) { return y(0) - y(d[1] - d[0]); })
  .ease(d3.easeExpIn);
}

function transitionStacked() {
  y.domain([0, y1Max]);

  rect.transition()
  .duration(1200)
  .delay(function(d, i) { return i * 10; })
  .attr("y", function(d) { return y(d[1]); })
  .attr("height", function(d) { return y(d[0]) - y(d[1]); })
  .transition()
  .attr("x", function(d, i) { return x(i); })
  .attr("width", x.bandwidth())
  .ease(d3.easeExpIn);
}
```

* Transitie toegevoegd
``` javascript
.ease(d3.easeExpIn);
```

* SchemeCategory aangepast (https://github.com/d3/d3-scale)
``` javascript
var color = d3.scaleOrdinal()
.domain(d3.range(n))
.range(d3.schemeCategory10);
```

* Tekst toegevoegd aan de x-as
``` javascript
.append("text")
.attr('y', 40)
.attr("x", 900)
.attr("fill", "black")
.attr("dy", "0.71em")
.attr("text-anchor", "end")
.text("Days in October");
```

## Data

De chart maakt gebruik van wiskundige formules die de data zelf maken. 

``` javascript
// Returns an array of m psuedorandom, smoothly-varying non-negative numbers.
// Inspired by Lee Byron’s test data generator.
// http://leebyron.com/streamgraph/
function bumps(m) {
  var values = [], i, j, w, x, y, z;

  // Initialize with uniform random values in [0.1, 0.2).
  for (i = 0; i < m; ++i) {
    values[i] = 0.1 + 0.1 * Math.random();
  }

  // Add five random bumps.
  for (j = 0; j < 5; ++j) {
    x = 1 / (0.1 + Math.random());
    y = 2 * Math.random() - 0.5;
    z = 10 / (0.1 + Math.random());
    for (i = 0; i < m; i++) {
      w = (i / m - y) * z;
      values[i] += x * Math.exp(-w * w);
    }
  }

  // Ensure all values are positive.
  for (i = 0; i < m; ++i) {
    values[i] = Math.max(0, values[i]);
  }

  return values;
}
```

## Licentie

GPL-3.0 © Duy-Linh Pham
