// Mike Bockstok: https://bl.ocks.org/mbostock/3885304

var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("index.csv", function(d) {
  d.Uren = +d.Uren;
  return d;

}, function(error, data) {

  if (error) throw error;

  x.domain(data.map(function(d) { return d.Datum; }));
  y.domain([0, d3.max(data, function(d) { return d.Uren; })]);

  /* Sorting code used from the example from Woorm: https://github.com/cmda-fe3/course-17-18/tree/master/site/class-4/sort */

  d3.select('input').on('change', onchange);

  function onchange() {
    /* Based on if the button is checked it will launch "sortOnUren" or "sortOnDatum"*/
    var sort = this.checked ? sortOnUren : sortOnDatum;
    var x0 = x.domain(data.sort(sort).map(Uren)).copy();
    var transition = svg.transition();

    /* This will sort the bar in the svg and using the function "sortBar" for it*/
    svg.selectAll('.bar').sort(sortBar);

   /* With this transition that's initaded ad line 31 it will move the bar smoothly at it's new position */
    transition.selectAll('.bar')
      .delay(delay)
      .attr('x', barX0);

    /* This should smoothly move the labels at the bottom but it actually don't move. 
    I should write a function to move those labels. But I don't know how. */
    transition.select('.axis-x')
      .call(d3.axisBottom(x))
      .selectAll('g')
      .delay(delay);

    /* This function will sort a and b based and the labels I used in my data */
    function sortBar(a, b) {
      return x0(Datum(a)) - x0(Datum(b));
    }

    function barX0(d) {
      return x0(Uren(d));
    }

    function delay(d, i) {
      return i * 50;
    }
  }

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10))
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -20)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Uren");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.Datum); })
      .attr("y", function(d) { return y(d.Uren); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.Uren); })
      .attr("fill", "#E27C29");
});

function sortOnUren(a, b) {
  return Uren(b) - Uren(a);
}

function sortOnDatum(a, b) {
  return d3.ascending(Datum(a), Datum(b));
}

function Uren(d) {
  return d.Uren;
}

function Datum(d) {
  return d.Datum;
}
