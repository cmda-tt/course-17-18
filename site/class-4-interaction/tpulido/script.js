// Chart made by Mike Bockstok: https://bl.ocks.org/mbostock/3885304

var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// GET DATA FROM TSV
d3.tsv("data.tsv", function(d) {
  d.frequency = +d.frequency;
  return d;
}, function(error, data) {
  // SET DATA FROM DSV IN DATA VARIABLE
  if (error) throw error;
  // IF D3 CANNOT GET TSV, THROW ERROR

  // SET DOMAINS (HIGHEST AND LOWEST VALUE)
  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  //SET EVENT HANDLER ON CHANGE
  d3.select('#checkbox').on('change', onchange);

  // ONCHANGE FUNCTION FROM TITUS WORMER - https://cmda-fe3x3.github.io/course-17-18/class-4/sort/
  function onchange() {
    /* Based on if the button is checked it will launch "sortOnfrequency" or "sortOnletter"*/
    var sort = this.checked ? sortOnfrequency : sortOnletter;
    var x0 = x.domain(data.sort(sort).map(frequency)).copy();

    // SET TRANSITION
    var transition = svg.transition().duration(1500).ease(d3.easeElastic);

    /* This will sort the bar in the svg and using the function "sortBar" for it*/
    svg.selectAll('.bar').sort(sortBar);

   /* With this transition that's initaded ad line 31 it will move the bar smoothly at it's new position */
    transition.selectAll('.bar')
      .attr('x', barX0);

    /* This function will sort a and b based and the labels I used in my data */
    function sortBar(a, b) {
      return x0(letter(a)) - x0(letter(b));
    }

    function barX0(d) {
      return x0(frequency(d));
    }


  }

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "0em")
      .attr("text-anchor", "start")
      .style("font-size", "20px")
      .text("Frequency");



  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("y", function(d) { return y(d.frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.frequency); });
});

// sort functions from Titus Wormer - https://cmda-fe3x3.github.io/course-17-18/class-4/sort/
function sortOnfrequency(a, b) {
  return frequency(b) - frequency(a);
}

function sortOnletter(a, b) {
  return d3.ascending(letter(a), letter(b));
}

function frequency(d) {
  return d.frequency;
}

function letter(d) {
  return d.letter;
}
