//De svg wordt geselecteerd en er wordt een margin, breedte en hoogte aan toegevoegd.
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;
//er wordt bepaald hoever de x van de y-as staat (0) en er wordt een padding meegegeven aan de waardes die op de x komen te staan. Bij de y wordt ervoor gezorgd dat de hoogte van de y-as bepaald
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

//de variabele g wordt aangemaakt naar aanleiding van de svg. hij krijgt meteen de class g en er wordt een standaard margin aan toegevoegd
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//selecteert het bestant languages.tsv. Daarna wordt de variabele d.speakers postitief gemaakt (hierdoor komt hij onder het einde van y-as te staan ipv dat hij er bovenuit steekt). daarna wordt de waarde ge-return-ed. Vanaf hier zitten we in de functie die alle data hanteert
d3.tsv("languages.tsv", function(d) {
  d.speakers = +d.speakers;
  return d;
},

  function(error, data) {
  if (error) throw error;

// de x-as en de y-as krijgen per 'balk' een waarde toegekend. Dit zijn language en speakers
  x.domain(data.map(function(d) { return d.language; }));
  y.domain([0, d3.max(data, function(d) { return d.speakers; })]);

//Toont de x-as
  g.append("g")
      //De x-as krijg een positie toegend (door transform, translate). Het gaat hier om de x-as door de .call
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

//De y-as wordt geselecteerd (door de .call). daarna wordt een aantal stappen (ticks) bepaald. Hiermee bedoel ik het aantal waardes die aan de linkerkant van de y-as getoond worden.
  g.append("g")
      .call(d3.axisLeft(y).ticks(25))

//Alle databevattende onderdelen worden gezet in een rechthoek (door .append("rect")), deze balken krijgen allemaal de class .bar (geeft alleen een mooi kleurtje en heeft een hover in css). de plek waar hij staat op de x-as wordt bepaald door .attr("x" ...) en y-as door .attr("y" ...). Hij herkent deze waardes doordat x in regel 30 wordt defined en y in regel 35. Daarna wordt er een click-event aan toegevoegd. Deze verandert een h1 en een h2 in het HTML bestand naar de daarvoor bestemde waarde.
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.language); })
      .attr("y", function(d) { return y(d.speakers); })
      .on("click", function(d) {
        document.getElementById("language").innerHTML = d.language;
        document.getElementById("speakers").innerHTML = d.speakers;
      })
      // de onderstande attr's zorgen ervoor dat de balken een width meekrijgen door te kijken naar de width van x en een hoogte meekrijgen die lager is dan het hoogste punt van de y
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.speakers); });
});
