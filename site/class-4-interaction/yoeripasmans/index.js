// set the dimensions and margins of the graph
var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
  },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
  .range([0, width])
  .padding(0.2);
var y = d3.scaleLinear()
  .range([height, 0]);

// append the svg object to the body of the page
var svg = d3.select("section").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  // append a 'group' element to 'svg'
  .append("g")
  // moves the 'group' element to the top left margin
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.tsv("data.tsv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
    d.frequency = +d.frequency;
  });

  // Scale the range of the data in the domains
  x.domain(data.map(function(d) {
    return d.letter;
  }));
  y.domain([0, d3.max(data, function(d) {
    return d.frequency;
  })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) {
      return x(d.letter);
    })
    .attr("width", x.bandwidth())
    .attr("y", function(d) {
      return y(d.frequency);
    })
    .attr("height", 0)
    .transition()
    .duration(200)
    .delay(function(d, i) {
      return i * 50;
    })
    .attr("height", function(d) {
      return height - y(d.frequency);
    });

  // add the x Axis
  svg.append("g")
    .attr('class', 'axisX')
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // add the y Axis with ticks as percentage
  svg.append("g")
    .call(d3.axisLeft(y).ticks(10, '%'));

  //Add a trigger button and fires sortTrigger function on click
  d3.select('.button-wrapper').append('button').on('click', sortTrigger)
    .attr('class', 'trigger-button')
    .text('High to Low');
  //Add a trigger button and fires sortTrigger function on click
  d3.select('.button-wrapper').append('button').on('click', resetTrigger)
    .attr('class', 'trigger-button')
    .text('Reset');

  // Sort trigger
  function sortTrigger() {

    var x0 = x.domain(data.sort(sortOnFrequency).map(letter)).copy();
    var transition = svg.transition();

    //Move the bars
    transition.selectAll('.bar')
      .delay(delay)
      .attr('x', barX0);

    //Move the labels
    transition.select('.axisX')
      .call(d3.axisBottom(x))
      .selectAll('g')
      .delay(delay);

    function barX0(d) {
      return x0(letter(d));
    }
    //Returns sorted data on frequency
    function sortOnFrequency(a, b) {
      return d3.ascending(frequency(b), frequency(a));
    }

  }

  // Reset trigger

  function resetTrigger() {
    var x0 = x.domain(data.sort(sortOnLetter).map(letter)).copy();
    var transition = svg.transition();

    //Move the bars
    transition.selectAll('.bar')
      .delay(delay)
      .attr('x', barX0);

    //Move the labels
    transition.select('.axisX')
      .call(d3.axisBottom(x))
      .selectAll('g')
      .delay(delay);

    function barX0(d) {
      return x0(letter(d));
    }
    //Returns sorted data on letter
    function sortOnLetter(a, b) {
      return d3.descending(letter(b), letter(a));
    }

  }

  //Sets delay
  function delay(d, i) {
    return i * 50;
  }

  //Get the frequency field for a row
  function frequency(d) {
    return d.frequency;
  }

  //Get the letter field for a row
  function letter(d) {
    return d.letter;
  }

});

//Based on https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4 and https://cmda-fe3x3.github.io/course-17-18/class-4/sort/
