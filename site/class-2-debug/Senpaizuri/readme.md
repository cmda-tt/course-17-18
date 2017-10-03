# Debugger;
In this exercise I debugged faulty code.

## The Ways of the code
There were multiple faults in this code:

* The margin variable wasn't used correctly;
```Javascript
  var margin = {top: 48, right: 48, bottom: 48, left: 48};
  var width = 960 - margin.l - margin.r;
  var height = 500 - margin.t - margin.b;
  //Later in the code
  var svg = d3
  .select('svg')
  .attr('viewBox', [
    0,
    0,
    margin.l + width + margin.r,
    margin.t + height + margin.b
  ].join(' '))
  .append('g')
  .attr('transform', 'translate(' + margin.l + ',' + margin.t + ')');

  /*
    Re:written
  */

  var
    margin = {top: 48, right: 48, bottom: 48, left: 48},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom
  //Later in the code
  var svg = d3
    .select('svg')
    .attr('viewBox', [
      0,
      0,
      margin.left + width + margin.right,
      margin.top + height + margin.bottom
    ].join(' '))
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');  
```

* The data file was imported, albeit incorrect;
```Javascript
  d3.tsv('index.tsv', row, onload);

  /*
    Re:written
  */

  d3.csv('index.csv', row, onload)
```

## Upgrading from V3 to V4

When Upgrading to version four of D3 some code was malfunctioning due to deprecated code. The following code had to be changed.
```Javascript
  //Old code
  var x = d3.scale.linear().range([0, width]);
  var y = d3.scale.linear().range([height, 0]);
  var color = d3.scale.ordinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
  var xAxis = d3.svg.axis().scale(x).orient('bottom');
  var yAxis = d3.svg.axis().scale(y).orient('left');

  //New code
  var
    x = d3.scaleLinear().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']),
    xAxis = d3.axisBottom(x),
    yAxis = d3.axisLeft(y)
```

## License

MIT Maikel Sleebos
