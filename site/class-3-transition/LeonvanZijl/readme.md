# **Transition**

## **Introduction**
Downloaded a bubble graph from the d3 gallery and made is visually more appealing by adding a playful interaction to the graph.

### **Source**
[Bubble Chart by Mike Bostock](https://bl.ocks.org/mbostock/4063269)

## **Description**
In this assignment I started with a static bubble graph from the d3 gallery. From there I inspected the javascript and decided I wanted to animated the radius of the circles.

1. Changed the radius to ```0``` as a starting point
2. Used a transition with corresponding functions (delay, ease, etc..) to let the radius animate
3. Changed the easing a couple of times to find a right fit

At this point I got the circles animating. But it wasn't really that hard. So I figured lets animate them one by one. In order to do so I needed a function with a delay. I also needed to find the total number of circles with the size() function. Afterward I'm glad I went a bit further, it's fun to watch it animate. Like a spreading virus.

## **Data**
Not even sure, used the data file from the bubble chart.

## **Features**
*   [`.transition()`](https://github.com/d3/d3-transition)
*   [`.delay()`](https://github.com/d3/d3-transition)
*   [`.ease()`](https://github.com/d3/d3-ease)
*   [`.duration()`](https://github.com/d3/d3-transition)
*   [`looping through all the circles`](https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop)
*   [`.size()`](https://stackoverflow.com/questions/31208915/d3-selectall-count-results)

## **License**
MIT © Leon van Zijl
