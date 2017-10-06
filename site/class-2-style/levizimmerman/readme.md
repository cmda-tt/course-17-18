# Donut Chart (refactor)
A review and refactor of the donut chart developed by [@wooorm](https://github.com/wooorm) using D3 (version 4).

![preview.png](https://github.com/levizimmerman/course-17-18/raw/master/site/class-2-style/wooorm/preview.png)

## Background
In this project I reviewed that following files [`index.html`](https://github.com/levizimmerman/course-17-18/blob/master/site/class-2-style/levizimmerman/index.html), [`index.css`](https://github.com/levizimmerman/course-17-18/blob/master/site/class-2-style/levizimmerman/index.css), [`index.js`](https://github.com/levizimmerman/course-17-18/blob/master/site/class-2-style/levizimmerman/index.js). The purpose of the review is to determine if a refactor was in n place. The files were minified, so I deminified them to make them easy to work with. I have refactored the files following specific rules per filetype mentioned beneath.

### HTML
* Use spaces instead of tabs;
* Indentation is 2 spaces;
* Every attribute value is enclosed in double-quotes;
* Add `lang` attribute to HTML element;
* Add `<meta http-equiv="X-UA-Compatible" content="IE=Edge">` to ensure latest version of IE;

### CSS
* Use spaces instead of tabs;
* Indentation is 2 spaces;
* Each CSS rule is followed by an empty line;
* Each selector is followed by a space;
* Each poperty is followed by a semicolon and then a space;
* Multiple selector will be listed using linebreaks;

### JS
* Use spaces instead of tabs;
* Indentation is 2 spaces;
* File scope variables will be declared at the beginnging of the file;
* If function chains are longer than two function a line break is included;
* Each comma is followed by a space;
* Each function needs a comment block describing what that function does;
* Operators and variables/strings/number are sperated with spaces;

## Data
The data consits out of two columns: Age and population. Age is a string describing the age group and the population is an absolute number describing the amount of humans living within the given age group.
```csv
age,population
<5,2704659
5-13,4499890
14-17,2159981
18-24,3853788
25-44,14106543
45-64,8819342
≥65,612463
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
GPL-3.0 © Titus Wormer

[block]: https://bl.ocks.org/mbostock/3887193

[block-author]: https://github.com/mbostock
