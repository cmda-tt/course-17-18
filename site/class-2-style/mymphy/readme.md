# Donut chart

A simple responsive donut chart visualizing the populations of various age
groups with pretty colors original from [`bl.ock`][block]
by [**@mbostock**][block-author] (GPL-3.0) and based on the [**Donut chart**](https://github.com/cmda-fe3/course-17-18/tree/master/site/class-2/style) from [**@wooorm**](https://github.com/wooorm). 

![Alt text](preview.png)

## Background

For a style assignment I reformatted the code from the [**Donut chart**](https://github.com/cmda-fe3/course-17-18/tree/master/site/class-2/style) and made it in my own style. 
My following changes where:
### HTML:
* I gave it a basic HTML structure.
* I closed the `<body>` tag.
* I used `" "` to link the style en script files.

### CSS:
* I made it readable by putting each CSS rule-set and declaration in one line. 
* I used hex color codes to designate a color.
* I closed every declaration with a `;`.
* I changed the font-family to `"Helvetica Neue", Helvetica, sans-serif`.
* I changed the color of the data inside the donut chart to white.

### JavaScript:
* I made it readable by putting each variable and function in one line. 
* I moved all the global variables to the top, assigned `var` in the front and closed it with a `;`. 
* I gave the code more white space where needed. 
* Changed some variable names to more accurate ones.

## Data

Comma-separated values (CSV) with eight rows and five columns:
* `age` — Stands for the age group from the population. 
* `population` — Stands for how big a population is.

## Features

*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.csv`
    — Loading files
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleOrdinal`
    — Position encodings
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Select elements
*   [`d3-shape`](https://github.com/d3/d3-shape#api-reference)
    — `d3.pie` and `d3.arc`
    — Graphical primitives

## License

GPL-3.0 © Luisa Braga dos Santos

[block]: https://bl.ocks.org/mbostock/3887193

[block-author]: https://github.com/mbostock
