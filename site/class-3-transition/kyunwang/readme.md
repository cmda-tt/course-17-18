# Transitions play with a bubble chart
This is chart used the work made by [Jeff Heer][sourceLink]under the [GPL 3.0 license][license]

The code used as example is a implementation made by [Mike Bostock][mikeLink] using the [codesource][codeSource]

![The bubblechart in transition][previewImg]

## Description
A look into how basic transitions work in d3. I took a non interactive and animated chart from 

## Data
The file is a CSV (Comma-seperated value)
The data consists of two columns namely:
- id
- value
The id consists of a:
- id
- category
- value/item
```
e.g.
kevin.food.Chocolate
```

## Features
- [d3-selection][selectionLink]
- [d3-scale][scaleLink]
- [d3-hierarchy][hierarchyLink]
- [d3-format][numberFormat]
- [d3-transition][transitionLink]

## Changes
- From ES5 to mostly ES6
	- vars used for hoisting
- Coding style changed
- Added comments
- Added global variables
- Transitions added

## How Transitions are applied
Transitions are added on:
- Onload - Appending the circles(after `enter()`)
- On `mouse over` and `mouse out` of the `circle`

### Transition on load:
```
nodeGroup.append('circle')
...
	.transition()
		.delay(transDelay)
		.duration(transDuration)
		.ease(easeStyle)
		.style('fill', d => colorSet(d.package))
		.attr('r', d =>  d.r)
```

### On mouse over / mouse out:
```
nodeGroup.append('circle')
...
	.on('mouseover', handleMouseOver)
	.on('mouseout', handleMouseOut)
...
```

The mouse over function:
```
function handleMouseOver() {
	d3.select(this)
		.transition()
		.duration(transDurationShort)
		.ease(easeStyle)
		.attr('r', this.getAttribute('r') * 1.2); // Increasing the radius
}
```

The mouse out function:
```
function handleMouseOut() {
	d3.select(this)
		.transition()
		.duration(transDurationShort)
		.ease(easeStyle)
		.attr('r', this.getAttribute('r') / 1.2); // Decreasing the radius
}
```

## License
[GPL-3.0][license] © Kang Yun Wang (Kevin Wang)



[sourceLink]: https://homes.cs.washington.edu/~jheer/
[license]: https://opensource.org/licenses/GPL-3.0
[mikeLink]: https://bl.ocks.org/mbostock
[codeSource]: https://bl.ocks.org/mbostock/4063269


[selectionLink]: https://github.com/d3/d3-selection
[scaleLink]: https://github.com/d3/d3-scale
[hierarchyLink]: https://github.com/d3/d3-hierarchy
[numberFormat]: https://github.com/d3/d3-format 
[transitionLink]: https://github.com/d3/d3-transition 

[previewImg]: bubbleTrans.gif