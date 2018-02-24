// Original: https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4
// Inspiration: https://cmda-fe3x3.github.io/course-17-18/class-4/sort/

// Set the width, height and the margins of the svg.
var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
  },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// Set the range of the svg.
var x = d3.scaleBand()
  .range([0, width])
  .padding(0.1);
var y = d3.scaleLinear()
  .range([height, 0]);

// Append (add) the svg to the body.
// Add a group element (g) to the svg.
// The g element goes to te top left of the page (from the margins).
var svg = d3.select("body").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Here is where the data is getting loaded.
d3.csv("index.csv", function (error, data) {
  if (error) throw error;

  // Data formatting.
  data.forEach(function (d) {
    d.percentage = +d.percentage;
  });

  // Scale the range of the data in the domains (the x-axis and y-axis lenght).
  x.domain(data.map(function (d) {
    return d.letter;
  }));
  y.domain([0, d3.max(data, function (d) {
    return d.percentage;
  })]);

  // Create and add the rectangles to the bar chart.
  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function (d) {
      return x(d.letter);
    })
    .attr("width", x.bandwidth())
    .attr("height", 0)
    .attr("y", height)
    // Give the bar a gradient look-a-like style.
    .style("fill", function (d, i) {
      return 'rgb(38, 78, ' + ((i * 5) + 100) + ')';
    })
    // Animation for the bars. Has a delay of 3 seconds. Source: https://bl.ocks.org/jamesleesaunders/f32a8817f7724b17b7f1
    .transition()
    .duration(1000)
    .ease(d3.easeBounceOut)
    .attr("y", function (d) {
      return y(d.percentage);
    })
    .attr("height", function (d) {
      return height - y(d.percentage);
    });

  // Add the x-axis
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .attr('class', 'axis axis-x')
    .call(d3.axisBottom(x));

  // Add the y Axis
  svg.append("g")
    .call(d3.axisLeft(y));

  d3.select("#sort").on("click", sort);

  // Function where sorting is being done on the precentage.  
  function sort() {
    var axisX = x.domain(data.sort(sortPercentage).map(letter)).copy();
    var transition = svg.transition();

    // Bars have a transition when moving. They also have an delay when 
    transition.selectAll('.bar')
      .delay(delay)
      .attr('x', barX);

    // Label have a transition and I gave the label a class .axis-x. The transition is selecting that class for a animation.
    transition.select('.axis-x')
      .call(d3.axisBottom(x))
      .selectAll('g')
      .delay(delay);

    function barX(d) {
      return axisX(letter(d));
    }

    function delay(d, i) {
      return i * 10;
    }
  }

  d3.select("#reset").on("click", reset);

  // Function where sorting is being done on the precentage.  
  function reset() {
    var axisX = x.domain(data.sort(sortLetter).map(letter)).copy();
    var transition = svg.transition();

    // Bars have a transition when moving. They also have an delay when 
    transition.selectAll('.bar')
      .delay(delay)
      .attr('x', barX);

    // Label have a transition and I gave the label a class .axis-x. The transition is selecting that class for a animation.
    transition.select('.axis-x')
      .call(d3.axisBottom(x))
      .selectAll('g')
      .delay(delay);

    function barX(d) {
      return axisX(letter(d));
    }

    function delay(d, i) {
      return i * 10;
    }
  }
});

function sortPercentage(a, b) {
  return d3.ascending(percentage(b), percentage(a));
}

// Row for the percentage.
function percentage(d) {
  return d.percentage;
}

function sortLetter(a, b) {
  return d3.descending(letter(b), letter(a));
}

// Row for the letter.
function letter(d) {
  return d.letter;
}