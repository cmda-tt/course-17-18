// Bron: Mike Bostock (https://gist.github.com/mbostock) (https://bl.ocks.org/mbostock) (https://bost.ocks.org/mike/)
// Gebaseerd op: https://bl.ocks.org/mbostock/raw/3885304/
// Licentie: https://opensource.org/licenses/GPL-3.0



// Het toevoegen van variabelen:
// SVG element.
// In het margin variabel definieert hij waardes die vervolgens de width en height attributen bepalen van het SVG element.

var svg = d3.select("svg"),
    margin = {
      top: 80,
      right: 20,
      bottom: 20,
      left: 60
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    docDate = document.getElementById('info-date'),
    docSteps = document.getElementById('info-specific');


// De X + Y as worden hier gedefinieerd en gevuld met de attributen die hierboven zijn gedefinieerd.

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

// G tag word hier gedefinieerd en toegevoegd (append) in de svg met de linker en rechter margin van het object 'Margin'.

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Hier wordt mijn CSV bestand ingeladen.

d3.csv('./data.csv', function (error, steps) {
  if (error) throw error;

// Hier wordt de X en Y as gevuld met het aantal stappen vanuit mijn data.
// De X as wordt gevuld met data en de Y as wordt gevuld met cijfers.

  x.domain(steps.map(function(d) {
    return d.date;
  }));

//De Y as krijgt een minimale en maximale waarde. De minimale waarde wordt meegegeven via '0' en de maximale waarde wordt via de '+d.steps' opgehaald.

    y.domain([0, d3.max(steps, function(d) {
    return +d.steps;
  })]);


// Er wordt hier een groep aangemaakt voor de X as en maakt twee attributen om in te vullen. Bij de transform translate wordt ervoor gezorgd dat de hoogte bepaald wordt door de data.

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

// Hier wordt het aantal stappen gedefinieerd en de ruimte daar tussen in.


  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(15))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 10)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("steps");

// Hier wordt de class gedefinieerd van het de bar charts.

  g.selectAll(".bar")
    .data(steps)

// Hier ga je het g element in en maak je een rectagnle. Vervolgens worden de rectangles aangemaakt en gevuld aan de hand van mijn data. 
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
