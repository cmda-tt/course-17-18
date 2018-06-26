# Debug assignment

In this challenge we had to debug some HTML, css ans Js files. 
_This is what my chart looks like_
![preview of chart](/preview.png)

## The changes

#### Javascript
_Javascript was easy to detect, but difficult to solve. I detected problems by looking at the console and googleing my code._

* Changed ".tsv" to ".csv"  
I started with Js, as these mistakes probably inhibits the data from being displayed. The first thing I saw in the console, was a warning of the "_index.tsv_" not found. 

* Changed the writing of the .attr('viewBox') on svg variable 
  This was probably the hardest to solve, I got the error that viewbox values were 0, 0, NaN, NaN. The problem had to be whatever was on the latter two values. It turned out to be "margin.t, margin.l" ect. I looked this up, and found [an example](https://eddyerburgh.me/create-responsive-bar-chart-d3-js) where these are written out as "margin.top, margin.left". I cmd+f searched for everything called "margin." and found more of these as variables. I changed all of them and the error dissapeared. 

### CSS
_CSS was way harder to detect, so in inspect mode, I looked up all the selectors from the CSS file on the page._

* Changed svg width and height from "100w / 100h" to "100vw / 100vh" 
 I have worked with these values before and they didn't look right so I worked from memory.
* I saw the declaration of fill wasn't colored blue, like my text editor does with all values. I figured it wasn't supposed to be "no" but "none". I've made this mistake before on my internship.

### HTML 

* Addead <head> and <body> element
* Added quotemarks around all links
  
## Features

* [d3-responsive-bar-chart](https://eddyerburgh.me/create-responsive-bar-chart-d3-js) - d3js usage of viewbox attribute
* [d3-request](https://github.com/d3/d3-request#api-reference) — Rendering the .csv file
* [d3-axis](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis) — d3.select — select elements
* [d3-shape](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal) - .scale and .ordinal


## Licence 

MIT © Leonie Smits
