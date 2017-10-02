/* All this little piece does is dedicate margins around the bar chart within the SVG canvas 
whilst making it a variable aswel for later use */
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    /* This little special code changes the SVG canvas range by making sure the range does not 
    grow bigger than width="960" height="500" by subtracting the margin from the height and width
    and then adding this sum to the HTML code. */
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

/* Here variables are being made for the width and height of the bars */
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);
    
/* Using the append code makes sure to give this attribute at the end of the selected object */
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/* Calling all data, calling all data. */
d3.tsv("data.tsv", function(d) {
	/* Adding data */
  d.TimesCaught = +d.TimesCaught;
  /* Return the data from frequency */
  return d;
}, function(error, data) {
  if (error) throw error;

/* Define the width and height of the chart by looking at the data to see how much is needed.
X is for how many bars is needed and Y is till what number the frequencies go to. */
  x.domain(data.map(function(d) { return d.Pokemon; }));
  y.domain([0, d3.max(data, function(d) { return d.TimesCaught; })]);

/* Making of the X and Y-axis. Giving them an appropriate class and adding the needed text. */
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(20, "-"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Times Caught");

/* This piece gives form to the bars and sets them in the chart. 
First: gathering the data needed then transforming that data into a rectangle with the class 'bar'
to give it a red colour. Afterwards giving it its position, height and width by checking the 
data in the TSV */
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.Pokemon); })
      .attr("y", function(d) { return y(d.TimesCaught); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.TimesCaught); });
});