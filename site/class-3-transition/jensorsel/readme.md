# Transition / Ease

This assignment is all about adding transitions and easing to a d3 graph.

## Process / changes

I selected [this](https://bl.ocks.org/mbostock/4063269) graph from the [d3 gallery](https://github.com/d3/d3/wiki/Gallery).
This is how I changed the code:

* I put a transition on the opacity of the circles and the text in the bubble chart. It goes in two steps, from 0 -> 0.5 and from 0.5 -> 1. It does so with a `d3.easeCubicInOut`.

* The other transitions follow the same pattern. These transitions include a change in `stroke` and `stroke-width`.

* The data was edited to include different kinds of food, and how much I like them.

The intention behind these transitions is to make the chart gradually appear, in a 'breathing-like' way.

## License

Released under the GNU General Public License, version 3. (from [original](https://bl.ocks.org/mbostock/4063269))
