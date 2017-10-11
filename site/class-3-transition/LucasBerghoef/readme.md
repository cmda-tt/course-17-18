# Class 3: Transition

In this project I render a map of America showing poverty using transitions.

## How I made the transitions
I've decided to add two transitions. One for each chart. I wanted the legend to appear gradually. Because it is made up from multiple gradations each consisting of it's own bar, I wanted them to appear after one another.
To achieve this, I've added a delay that increases for each rendered element.

```js
.transition()
.delay(function(d, i) { return i * 100; })
.duration(100)
```

The duration is identical to the delay. This will ensure the next bar starts animating as soon as the previous one is finished.

For the actual map I decided not to use any easing or duration. This allowed me to let each county 'pop' into view. I experimented with a couple of different delay timings but ended up using 0.5, as that created the effect I was looking for.

```js
.transition()
.delay(function(d, i) { return i * 0.5; })
```

## Styling
For the styling I centered the map, made the background blue and changed the colour of the map to shades of red instead of blue.

## Features

*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.max` and `d3.range`
    — Array statistics and transformations
*   [`d3-request`](https://github.com/d3/d3-request)
    — `d3.tsv`
    — Convenient XHRs
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleQuantile`
    — Position encoding
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select` and `d3.selectAll`
    — Select elements
*   [`d3-transition`](https://github.com/d3/d3-transition#api-reference)
    — `d3.delay`, `d3.duration`, and `d3.transition`
    — Animated transitions

## License

MIT © Lucas Berghoef
