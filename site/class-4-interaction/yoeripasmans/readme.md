# Interactive Bar Chart

For this assignment I've made a simple interactive bar chart with d3.

![][cover]

## Background

First I've picked a bar chart in d3@4 from d3noob - [Simple bar graph in v4](https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4). Then I made the chart working locally and started making it interactive.

### index.html

- Moved Javascript and CSS into separate files.
- Added D3@4 library
- Linked to Javascript and CSS files.
- Added heading
- Added a section element for the svg
- Added a button wrapper for the sort buttons

### index.css

- Added basic styles to the body and heading
- Removed tick lines from graph
- Changed colors of the graph
- Added button styles

### index.js

- Added a transition on load with:

  ```javascript
  .attr("height", 0)
  .transition()
  .duration(200)
  .delay(function(d, i) {
  return i * 50;
  })
  .attr("height", function(d) {
  return height - y(d.frequency);
  });
  ```

- Changed the y Axis tick to a percentage

    From:

    ```javascript
    svg.append("g")
       .call(d3.axisLeft(y));
    ```

    To:

    ```javascript
    svg.append("g")
    .call(d3.axisLeft(y).ticks(10, '%'));
    ```

- Added events on the sort buttons to trigger the sort functions

  ```javascript
  d3.select('.button-wrapper').append('button').on('click', sortTrigger) .attr('class', 'trigger-button') .text('High to Low');

  d3.select('.button-wrapper').append('button').on('click', unsortTrigger) .attr('class', 'trigger-button') .text('Reset');
  ```

- Added a function to sort the data and display it in the graph using this example and changed it to my own from Titus Wormer - <https://cmda-fe3x3.github.io/course-17-18/class-4/sort/>

    ```javascript
    function sortTrigger() {

      var x0 = x.domain(data.sort(sortOnFrequency).map(letter)).copy();
      var transition = svg.transition();

      transition.selectAll('.bar')
        .delay(delay)
        .attr('x', barX0);

      transition.select('.axisX')
        .call(d3.axisBottom(x))
        .selectAll('g')
        .delay(delay);

      function barX0(d) {
        return x0(letter(d));
      }

      function sortOnFrequency(a, b) {
        return d3.ascending(frequency(b), frequency(a));
      }

    }
    ```

- Same for the reset function

  ```js
  function resetTrigger() { var x0 = x.domain(data.sort(sortOnLetter).map(letter)).copy(); var transition = svg.transition();

    transition.selectAll('.bar') .delay(delay) .attr('x', barX0);

    transition.select('.axisX') .call(d3.axisBottom(x)) .selectAll('g') .delay(delay);

    function barX0(d) { return x0(letter(d)); }

    function sortOnLetter(a, b) { return d3.descending(letter(b), letter(a)); }

  }
  ```

- At least different functions to set the delay and get the frequency/letter field from a row

```javascript

function delay(d, i) {
  return i * 50;
}

function frequency(d) {
  return d.frequency;
}

function letter(d) {
  return d.letter;
}
```

## Data

Tab-separated values (TSV) with 17 rows and two columns. Consist the whole alphabet with the frequency of the letters in the dictionary

- `letter` -- All of the letters in the alphabet
- `frequency` -- Frequency of the letters in the dictionary

## Features

- [d3.scale.ordinal](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
- [d3.tsv](https://github.com/d3/d3-request/blob/master/README.md#tsv)
- [d3.select](https://github.com/d3/d3-selection/blob/master/README.md#select)
- [d3.selectAll](https://github.com/d3/d3-selection/blob/master/README.md#selectAll)
- [_selection_.append](https://github.com/d3/d3-selection/blob/master/README.md#selection_append)
- [_selection_.attr](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr)
- [_selection_.enter](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter)
- [d3.pack](https://github.com/d3/d3-hierarchy/blob/master/README.md#pack)
- [d3.hierarchy](https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy)
- [_node_.sum](https://github.com/d3/d3-hierarchy/blob/master/README.md#node_sum)
- [_node_.each](https://github.com/d3/d3-hierarchy/blob/master/README.md#node_each)

## License

[MIT](https://opensource.org/licenses/MIT) © Yoeri Pasmans

[cover]: preview.png
