//Sources: https://bl.ocks.org/mbostock/3885304 and https://cmda-tt.github.io/course-17-18/class-4/sort/

// Declare variables regarding the svg element and its dimensions
var svg = d3.select("body").append("svg").attr("width", "960").attr("height", "500"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("index.tsv", function(d) {
  d.frequency = +d.frequency;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("y", function(d) { return y(d.frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.frequency); });

    d3.select("#sort").on("click", sort);
    d3.select("#reset").on("click", reset);

 // console.log(data);

 // Sort the bars on frequency
 function sort() {
   var x0 = x.domain(data.sort(sortFrequency).map(letter)).copy();

   // Move the bars
   svg.selectAll('.bar')
      .transition()
      .delay(500)
      .duration(1000)
      .ease(d3.easeExp)
      .attr('x', barX0);

  // Move the letters
    svg.select('.axis--x')
       .transition()
       .delay(500)
       .duration(1000)
       .ease(d3.easeExp)
       .call(d3.axisBottom(x));

  function barX0(d) {
      return x0(letter(d));
    }
  }

  // Reset the bars to the original position
  function reset() {
    var x0 = x.domain(data.sort(sortLetters).map(letter)).copy();

    // Move the bars
    svg.selectAll('.bar')
       .transition()
       .delay(500)
       .duration(1000)
       .ease(d3.easeExp)
       .attr('x', barX0);

    // Move the letters
     svg.select('.axis--x')
        .transition()
        .delay(500)
        .duration(1000)
        .ease(d3.easeExp)
        .call(d3.axisBottom(x));

   function barX0(d) {
       return x0(letter(d));
     }
   }
});

// Sort data on letters.
function sortLetters(a, b) {
  return d3.ascending(letter(a), letter(b));
}

// Sort data on frequence
function sortFrequency(a, b) {
return frequency(b) - frequency(a);
}

// Get letters from data
function letter(d) {
  return d.letter;
}

// Get frequencies from data
function frequency(d) {
return d.frequency;
}
