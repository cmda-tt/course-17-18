# Transitions with a Bubble Chart
In this exercise I am adding transitions and easing to element within the bubble chart.

![bubble preview](https://github.com/levizimmerman/course-17-18/blob/transition/site/class-3-transition/levizimmerman/bubble-preview.gif?raw=true)

## Background
In this project you will find the following files:
* [`index.html`](https://github.com/levizimmerman/course-17-18/blob/transition/site/class-3-transition/levizimmerman/index.html) - adds basic structure.
* [`index.css`](https://github.com/levizimmerman/course-17-18/blob/transition/site/class-3-transition/levizimmerman/index.css)  - add minimal style to `<svg>` and `<text>`.
* [`index.csv`](https://github.com/levizimmerman/course-17-18/blob/transition/site/class-3-transition/levizimmerman/index.csv) - holds hierarchial data about myself.
* [`index.js`](https://github.com/levizimmerman/course-17-18/blob/transition/site/class-3-transition/levizimmerman/index.js) - this is where the magic happens: uses D3 to draw data and adds transitions.

## Data
The data that is used has a hierachial structure. This is needed to create clusters which in D3 is translated to packages. The data looks as follows:
```csv
id,value
levi,
levi.hobbys
levi.hobbys.skateboarding, 20
levi.hobbys.gaming, 40
levi.hobbys.cooking, 40
```
* __id__:string =  identiefier of value ('levi' is top id, then followed by more specific information about the value).
* __value__:number = represents a percentage (of 100).

## Features

### Data formatting
* [scaleOrdinal()](https://github.com/d3/d3-scale/blob/master/README.md#scaleOrdinal) - create an ordinal scale.
* [pack()](https://github.com/d3/d3-hierarchy/blob/master/README.md#pack) - create a new circle-packing layout.
* [csv()](https://github.com/d3/d3-request/blob/master/README.md#csv) - get a comma-separated values (CSV) file.
* [hierarchy()](https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy) - constructs a root node from hierarchical data.

### Appending data
* [append()](https://github.com/d3/d3-selection/blob/master/README.md#selection_append) - create, append and select new elements.
* [attr()](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr) - get or set an attribute.
* [selectAll()](https://github.com/d3/d3-selection/blob/master/README.md#selectAll) - select multiple elements from the document.
* [enter()](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter) - get the enter selection (data missing elements).
* [data()](https://github.com/d3/d3-selection/blob/master/README.md#selection_data) - join elements to data.
* [text()](https://github.com/d3/d3-selection/blob/master/README.md#selection_text) - get or set the text content.

### Transitions
* [transition](https://github.com/d3/d3-transition/blob/master/README.md#selection_transition) - schedule a transition for the selected elements.
* [duration](https://github.com/d3/d3-transition/blob/master/README.md#transition_duration) - specify per-element duration in milliseconds.
* [ease](https://github.com/d3/d3-transition/blob/master/README.md#transition_ease) - specify the easing function.
* [d3.easeBackOut](https://github.com/d3/d3-ease/blob/master/README.md#easeBackOut) - reverse anticipatory easing.
* [delay](https://github.com/d3/d3-transition/blob/master/README.md#transition_delay) - specify per-element delay in milliseconds.

The transitions in this project are appended on two stages. When the data is loaded in, the radius of the circles are animated with a `d3.easeBackOut` to give it more "pop". The second stage is when you hover over circles. Each circle is part of a package (e.g. `levi.hobbys`). Every circle that is part of that package will scale with a ten percent based on its original radius. For the second stage the same easing is used as the first stage, also to give it more "pop".


## License
Released under the [GNU General Public License, version 3](https://opensource.org/licenses/GPL-3.0) &copy; Levi Zimmerman
