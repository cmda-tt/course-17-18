# Class 4: Interaction

In this assigment I added interaction to a bar chart by adding a checkbox that lets you order the data alphabetically and on frequence.

Based on bar chart by Mike Bostock. - Link: [`bl.ocks.org`][https://bl.ocks.org/mbostock/3885304]


## How I added Interaction / My changes in steps

* I've added an input to the html file. This input was needed to switch between the two different sorting modes. I included a label to make the input checkbox easier to click.
```html
<label for="sort">Sort</label>
<input type="checkbox" id="sort"/>
```

* Then I added an event listener to monitor changes to the input field.
```js
d3.select('input').on('change', onchange);
```

* I added a global variable for the data so it would be accesible to all helper functions.
```js
var data;

d3.tsv("data.tsv", function (d) {
    d.frequency = +d.frequency;
    return d;
}, function (error, d) {
    if (error) throw error;

    data = d; // Puts the data inside the global variable.
```

* Because there were a lot of functions only performing a single task, I decided to put these functions in a different namespace. This helped me differentiate between built in functions and 'custom' helper functions. To achieve this, I created an object called `helper` and put all these functions inside it. The keys of the object functioned like function names, and the values were the actual functions.
```js
const helper = {
    /* Calculate `x` for a bar. */
    barX: function(d) {
        return x(helper.letter(d));
    },

    // etc...
}
```

* This ment I had to change all references to these functions. For example:
```js
var x0 = x.domain(data.sort(sort).map(helper.letter)).copy();
```

## Data

This data came with the example bar chart.

#### Format

Tab-separated values (TSV) with 27 rows and 2 columns:

*   `letter` — Letter of the alphabet (A-Z)
*   `frequency` — Frequency in percentage


## Features

*   [`d3-array`](https://github.com/d3/d3-array#api-reference) — `d3.max` and `d3.ascending` — Array statistics and searching
*   [`d3-axis`](https://github.com/d3/d3-axis#api-reference) — `d3.axisBottom` and `d3.axisLeft` — Reference marks for scales
*   [`d3-request`](https://github.com/d3/d3-request#api-reference) — `d3.csv` — Loading files
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference) — `d3.scaleBand` and `d3.scaleLinear` — Position encodings
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference) — `d3.select` — Select elements
*   [`d3-timer`](https://github.com/d3/d3-timer#api-reference) — `d3.timeout` — Efficient animation queueing
    

## License

MIT © Lucas Berghoef
