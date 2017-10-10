# Transition

A bubble chart visualising some data in a bubble form. Original: [`bl.ock`][block] by [**@mbostock**][block-author].

## Background

For this assignment I had to make some transitions for the bubble chart to make it a bit more interactive.

![preview][cover]

## How?

First I've copy and pasted the origianl files to my own directory. I've cleaned up the code into several files:

* 'index.html'
* 'index.css'
* 'index.js'
* 'flare.csv'

After that I've followed the slides how to add a transition to a bubble or circle. I've added the code below the section where the chart is being made. I made a hover and click transition. The hover transition slowly makes a trandition into another color, and the click transition goes also slowly into a color.
The hover transition I've added a '.ease' to it. > Easing is a method of distorting time to control apparent motion in animation.
I got this from the [D3 ease] github.

## License

*  [D3](https://d3js.org/)
*  [D3 ease](https://github.com/d3/d3-ease)
*  [D3 transition](https://github.com/d3/d3-transition)

[block]: https://bl.ocks.org/mbostock/4063269

[block-author]: https://github.com/mbostock

[D3 ease]: https://github.com/d3/d3-ease

[cover]: preview.png
