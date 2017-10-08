# Transistions

[An assignment about transistions](https://github.com/cmda-fe3/course-17-18/blob/master/class-3.md) to fix the the line chart! 

## Background

This assignment is to work on a static chart and have a dynamic feel to it. This assignment is to learn about `.transistion()` and `.ease()`. This assignment I used my weekend data to show what I did this weekend. Plus I animated it to the 'theme' of this weekend.

![result of this code](preview.png)

### Style Used

I use single quotes for strings and every new piece of code gets a new line (for readability). Keep it DRY _(Don't Repeat Yourself)_.

For multiple variables I end on the latest line (in case you want to add more just `,` +  <button>enter</button> and add another one).

The next example you see how I use a function. array and loop.  
*   New line on every new entry in the array (same for objects).
*   Close the array on a line of his own.
*   Loop on the same line.
*   Code to execute on the next.

```js
function myStyle() {
  var arrayColors = [
    '#ed9b50',
    '#ffb91b',
    '#5b85ff',
    '#8c63d9',
    '#dbe5ed',
    '#4ebc6b',
    '#f54784',
    '#43c5e5',
    '#46c999'
  ];

  for (var i = 0; i < arrayColors.length; i++) {
    console.log(arrayColors[i], 'color');
  }
}
```

### features

[**d3 API**](https://github.com/d3/d3/blob/master/API.md)
-   [`d3.scaleOrdinal()`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
-   [`d3.extent()`](https://github.com/d3/d3-array/blob/master/README.md#extent)
-   [`d3.hierarchy()`](https://github.com/d3/d3-hierarchy)
-   [`.transistion()`](https://github.com/d3/d3-transition)
-   [`.ease()`](https://github.com/d3/d3-ease)
-   [`.delay()`](https://github.com/d3/d3-transition/blob/master/README.md#transition_delay)
-   [`.on()`](https://github.com/d3/d3-transition/blob/master/README.md#transition_on)
-   [`.pack()`](https://github.com/d3/d3-hierarchy/blob/master/README.md#pack)
-   [`.active()`](https://github.com/d3/d3-transition/blob/master/README.md#active)


### License

[The chart I used](https://bl.ocks.org/mbostock/4063269) is made by [@mbostock](https://github.com/mbostock) [(GPLv3)](https://choosealicense.com/licenses/gpl-3.0/).

[GPLv3](https://choosealicense.com/licenses/gpl-3.0/) Vincent Kempers 👨🏽‍💻
