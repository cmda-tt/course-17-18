// Speelveld aanmaken 
var margin = {top: 20, right: 40, bottom: 30, left: 20},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    barWidth = Math.floor(width / 19) - 1;

// Scale linear 
var x = d3.scale.linear()
    .range([barWidth / 2, width - barWidth / 2]);

// Y as plaatsen
var y = d3.scale.linear()
    .range([height, 0]);

// X as maken plaatsen
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right")
    .tickSize(-width)
    .tickFormat(function(d) { return Math.round(d / 1e6) + "M"; });

// SVG begint rechtsonder.
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Birthdays ass op x die je kunt sliden
var birthyears = svg.append("g")
    .attr("class", "birthyears");

// Linksboven plaatsen van een label met het huidige jaar.
var title = svg.append("text")
    .attr("class", "title")
    .attr("dy", ".71em")
    .text(2000 + " 🇺🇸");

// Laden van CSV bestand population.csv
d3.csv("population.csv", function(error, data) {

  // Converteren van de strings uit het csv bestand naar nummers
  data.forEach(function(d) {
    d.people = +d.people;
    d.year = +d.year;
    d.age = +d.age;
  });

  // Bereken het einde van de data sets in leeftijd en jaren
  var age1 = d3.max(data, function(d) { return d.age; }),
      year0 = d3.min(data, function(d) { return d.year; }),
      year1 = d3.max(data, function(d) { return d.year; }),
      year = year1;

  // update de schaal met de eerder gemaakte einde's
  x.domain([year1 - age1, year1]);
  y.domain([0, d3.max(data, function(d) { return d.people; })]);

  // Maak een map van de leeftijd en geboortejaar
  data = d3.nest()
      .key(function(d) { return d.year; })
      .key(function(d) { return d.year - d.age; })
      .rollup(function(v) { return v.map(function(d) { return d.people; }); })
      .map(data);

  // Toevoegen van X as om waarde van aantal mensen te laten zien
  svg.append("g")
      .attr("class", "y axis")
      .style('opacity', 0)
// Transition toegevoegd die als eerst begint
      .transition()
      .duration(1000)
      .ease("easeSin")
      .style('opacity', 1)
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis)
    .selectAll("g")
    .filter(function(value) { return !value; })

  // Toevoegen van labels in de bar's bij elk geboortejaar zodat dit al gedaan als wanneer er iets verschoven word
  var birthyear = birthyears.selectAll(".birthyear")
      .data(d3.range(year0 - age1, year1 + 1, 5))
    .enter().append("g")
      .attr("class", "birthyear")
      .attr("transform", function(birthyear) { return "translate(" + x(birthyear) + ",0)"; });

// plaats het geboortejaar in een rectangle.
  birthyear.selectAll("rect")
      .data(function(birthyear) { return data[year][birthyear] || [0, 0]; })
    .enter().append("rect")
      .attr("x", -barWidth / 2)
      .attr("width", 0)
      .attr("y", height)
      .attr("height", 0)
// Transition toegevoegd die iets later begint
      .transition()
      .attr("width", barWidth)
      .delay(2000)
      .duration(750)
      .ease("easeSin")
      .attr("y", y)
      .attr("height", function(value) { return height - y(value); });


// Toevoegen van labels van het geboortejaar
  birthyear.append("text")
      .attr("y", height - 4)
      .style('opacity', 0)
// Transition toegevoegd die als laatste begint
      .transition()
      .delay(3000)
      .duration(1000)
      .ease("easeSin")
      .style('opacity', 1)
      .text(function(birthyear) { return birthyear; });

  // Toevoegen van labels om de leeftijd te laten zien
  svg.selectAll(".age")
      .data(d3.range(0, age1 + 1, 5))
    .enter().append("text")
      .attr("class", "age")
      .attr("x", function(age) { return x(year - age); })
      .attr("y", 0)
      .attr("dy", ".71em")
      .style('opacity', 0)
// Transition toegevoegd die als eerst begint
      .transition()
      .duration(1000)
      .attr("y", height + 4)
      .ease("easeSin")
      .style('opacity', 1)
      .text(function(age) { return age; });

  // Keydown (rechts en links) veranderen het jaar wat geshowed wordt
  window.focus();
  d3.select(window).on("keydown", function() {
    switch (d3.event.keyCode) {
      case 37: year = Math.max(year0, year - 10); break;
      case 39: year = Math.min(year1, year + 10); break;
    }
    update();
  });

// Aanmaken van de functie die uitgevoerd word wanneer er een keydown geregistreerd word. 
  function update() {
    if (!(year in data)) return;
    title.text(year + " 🇺🇸")
// Transition toevoegen de key down verandering. 
    birthyears.transition()
        .duration(750)
        .attr("transform", "translate(" + (x(year1) - x(year)) + ",0)");
// Value van birthday veranderen.
    birthyear.selectAll("rect")
        .data(function(birthyear) { return data[year][birthyear] || [0, 0]; })
      .transition()
        .duration(750)
        .attr("y", y)
        .attr("height", function(value) { return height - y(value); });
  }
});
