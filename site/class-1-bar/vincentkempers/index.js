

/*
Bron: M. Bostock (https://gist.github.com/mbostock) (https://bl.ocks.org/mbostock) (https://bost.ocks.org/mike/)
Based On: https://bl.ocks.org/mbostock/raw/3885304/
License: https://opensource.org/licenses/GPL-3.0


Hier voegt hij de variabelen toe:
Svg voor het selecteren van de svg element.
margin is een object waar hij de top, right, bottom, left waardes meegeeft om die later te refereren.
width neemt hij de svg width en doet hij min de margin left en min de margin right om de afstand dynamisch en goed te houden in proportie. Dit gebeurt ook met de height.
*/
var svg = d3.select("svg"),
    margin = {
      top: 100,
      right: 20,
      bottom: 40,
      left: 60
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    docDate = document.getElementById('info-date'),
    docSteps = document.getElementById('info-specific');


// hier wordt de x en y as bepaald en aangevuld met de attributen en hun margins

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

// hier voegt d3 een <g></g> tag in de svg tag en voegt hier de object margin toe.
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Hier laadt ik de data in van mijn csv bestand
d3.csv('./data.csv', function (error, steps) {
  if (error) throw error;


  // hier bepaal je wat op de x en y map laat zien. je
  x.domain(steps.map(function(d) {
    return d.date;
  }));
  y.domain([0, d3.max(steps, function(d) {
    return d.steps;
  })]);


// maak een <g></g> tag in de voor genoemde g tag met een class voor de y as met daar de toegevoegde attributen
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
// maak een <g></g> tag in de voor genoemde g tag met een class voor de x as met daar de toegevoegde attributen
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("steps");
      // maakt hier een class aan met .bar
  g.selectAll(".bar")
    .data(steps)
    
    // maakt alle "bars" rectangles aan en geeft de x en y as aan vanuit de waardes die zijn gegeven aan de x en y as.
    .enter().append("rect")
      .attr("class", "bar")
      .attr("id", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("y", function(d) { return y(d.steps); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) {
        return height - y(d.steps);
      });
});
