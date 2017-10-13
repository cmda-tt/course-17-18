//Based on https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4 by Mike Bostock

// set the dimensions and margins of the graph
var margin = { top: 20, right: 20, bottom: 30, left: 60};
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

// Set ranges of the graph
var x = d3.scaleBand()
  .range([0, width])
  .padding(0.2);
var y = d3.scaleLinear()
  .range([height, 0]);

// create svg inside the body
var svg = d3.select("body").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
  "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.tsv("data.tsv", function(error, data) {
  if (error) throw error;

// load the data
data.forEach(function(d) {
  d.frequency = +d.frequency;
});

// domains gives the range of the graph 
x.domain(data.map(function(d) {
  return d.letter;
}));
y.domain([0, d3.max(data, function(d) {
  return d.frequency;
})]);

// Assign color to data
var colors = d3.scaleLinear()
.domain([0, d3.max(data, function(d) { return d.frequency; })])
.range(["#BCF4EC", "#0A4239"]);

// Creates the bars
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
  })
  .attr('fill', function(d){return colors(d.frequency)});

// Add the x Axis
svg.append("g")
  .attr('class', 'xAxis')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add the y Axis 
svg.append("g")
  .attr('class', 'yAxis')
  .call(d3.axisLeft(y))
  .append("text") 
  .attr("class", "label")
  .attr("transform", "rotate(-90)") 
  .attr("y", -50) 
  .text("%");
  

// Add a button with on click function
d3.select('.buttons')
  .append('button')
  .on('click', highToLow)
  .attr('class', 'button')
  .text('High to Low');

// Add a button with on click function
d3.select('.buttons')
  .append('button')
  .on('click', Alphabetic)
  .attr('class', 'button')
  .text('Alphabetic');

// highToLow function
function highToLow() {
  var x0 = x.domain(data.sort(sortOnFrequency).map(letter)).copy();
  var transition = svg.transition();

  // Move the bars
  transition.selectAll('.bar')
    .delay(function(d, i){
    return i * 20;
  })
    .attr('x', barX0);

  // Move the labels
  transition.select('.axisX')
    .call(d3.axisBottom(x))
    .selectAll('g')
    .delay(function(d, i){
      return i * 20;
    })

  function barX0(d) {
    return x0(letter(d));
  }
  // Returns sorted data on frequency (high to low)
  function sortOnFrequency(a, b) {
    return d3.ascending(frequency(b), frequency(a));
  }
}

// Alphabetic funcion
function Alphabetic() {
  var x0 = x.domain(data.sort(sortOnLetter).map(letter)).copy();
  var transition = svg.transition();

  // Move the bars
  transition.selectAll('.bar')
    .delay(function(d, i){
      return i * 20;
    })
    .attr('x', barX0);

  // Move the labels
  transition.select('.axisX')
    .call(d3.axisBottom(x))
    .selectAll('g')
    .delay(function(d, i){
      return i * 20;
    })

  function barX0(d) {
    return x0(letter(d));
  }
  // Returns data on alphabetic order
  function sortOnLetter(a, b) {
    return d3.descending(letter(b), letter(a));
  }

}

// Data frequency
function frequency(d) {
  return d.frequency;
}

// Data letter
function letter(d) {
  return d.letter;
}

});