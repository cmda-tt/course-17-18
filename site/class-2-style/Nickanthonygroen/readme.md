# Donut chart

A simple responsive donut chart visualising the populations of various age
groups with pretty colours based on a [`bl.ock`][block]
by [**@mbostock**][block-author] (GPL-3.0).

[![][cover]][url]



## Style of code

Since I'm not that good familiar with writing code I find that long sentences of code don't really work for me. So I made sure that there were pplenty of enters to make it legible for myself. Also instead of single quotes I used double quotes, that way it is more legible for me.

```js
var a = svg.selectAll(".arc")
        .data(pie(c))
        .enter()
        .append("g")
        .attr("class", "arc");
        a.append("path")
        .attr("d", arc)
        .style("fill", fill),
        a.append("text")
        .attr("transform",transform)
        .attr("dy", ".35em")
        .text(age)
```

Also since I'm a noob, I use var for every variable I define.

```js
var color = d3.scaleOrdinal().range(colors),
var arc = d3.arc().outerRadius(radius - 16).innerRadius(radius - 128),
var pie = d3.pie().sort(null).value(population),
var svg = d3.select("body")
```

For HTML and CSS I apply the following:

```css
html {
  color: #000;
  background-color: currentcolor;
  max-width: 100%;
}

body {
  margin: 0;
}

svg {
  width: 100vw;
  height: 100vh;
}

.arc, text {
  fill: currentcolor;
}

text {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Oxygen, Ubuntu, Cantarell, Open Sans, sans-serif;
  font-size: small;
  text-anchor: middle;
}

path {
  stroke: currentcolor;
  stroke-width: 3;
}

```

Close every line with a ";". The way it was spaced is something I already do myself. With and enter after every block of code.


Within the HTML the links were not in quotes so I added the double quotes again. I also closed the body tag.

```html
<!DOCTYPE html>
<meta charset="utf8">
<title>@Nickanthonygroen</title>
<link rel="stylesheet" href="index.css">

<body>
  <script src="https://d3js.org/d3.v4.min.js"></script>
  <script src="index.js"></script>
</body>

```



## Features

*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleOrdinal`
    — Position encodings
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Select elements
*   [`d3-shape`](https://github.com/d3/d3-shape#api-reference)
    — `d3.pie` and `d3.arc`
    — Graphical primitives
*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.csv`
    — Loading files

## License

GPL-3.0 © [Titus Wormer](https://github.com/wooorm)

GPL-3.0 © Nick Groen



[block]: https://bl.ocks.org/mbostock/3887193

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-2-style/Nickanthonygroen
