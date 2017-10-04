// Mike Bostock’s Block 3883245 ← 3883195
// De svt margin's zodat hij wat ruimte krijgt.
var svg = d3.select("svg"),
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  };

// Zet de attibuten voor de svg width met margin left en right
var width = +svg.attr("width") - margin.left - margin.right;
// Zet de attibuten voor de svg met de margin top en bottom.
var height = +svg.attr("height") - margin.top - margin.bottom;
// zet de waardens met translate en transform + de margins op zijn plek.
var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Hiermee parse hi jde data naar het juiste format.
var parseTime = d3.timeParse("%Y%m%d");

// Communiceert met de d3 op de x as.
var x = d3.scaleTime()
  // dit gaat over de inner-padding https://stackoverflow.com/questions/38539508/how-does-the-d3-scaleband-work/38539558
  .rangeRound([0, width]);

var y = d3.scaleLinear() // de range scale van de domain wordt hiermee bepaald De leanear zorgt voor de interval tussen de stappen.
  .rangeRound([height, 0]); // zorgt ervoor dat het binnen de svg blijft. In dit geval 500px. Het past zich aan de schaal aan.

var line = d3.line() // zorgt ervoor dat de svg weet waar hij zijn lijnen moet zetten.
  .x(function(d) {
    return x(d.date);
  }) // De functie neemt de data van de csv aan en plaatst het op een plek met in dit geval de date variabelen in het CSV bestand.
  .y(function(d) {
    return y(d.temp);
  }); // Deze functie handeld de temperatuur waardens af.

// D3 Functie die zorgt voor de CSV bestand en de data afhandeling.
d3.csv("csv/temp-data.csv", function(d) {
  d.date = parseTime(d.date); // parse de tijd van date.
  d.temp = +d.temp; // parse de tijd van date.
  console.log(d); // een kleine console log om te kijken wat hij met de data doet.
  return d;
}, function(error, data) { // handeld errors af.
  if (error) throw error;


  x.domain(d3.extent(data, function(d) {
    return d.date;
  })); // kijkt naar de x as zijn data. Wat is de kleinste , grootste en gemiddelde data in de array? - http://www.d3noob.org/2012/12/setting-scales-domains-and-ranges-in.html
  y.domain(d3.extent(data, function(d) {
    return d.temp;
  })); // gebeurd hetzelfde maar dan voor de Y as.

  // Zorgt ervoor dat de g element groepeerd binnen de SVG. - https://stackoverflow.com/questions/17057809/d3-js-what-is-g-in-appendg-d3-js-code
  g.append("g")
    // Zet de attributen + het variabel height.
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x)) // zorgt ervoor dat de data op de x as wordt geplaatst https://github.com/d3/d3-axis/blob/master/README.md#axisBottom
    .select(".domain") //selecteerd de domain
    .remove(); //verwijderd het weer.

  // herhaling van hierboven maar dan voor de Y as.
  g.append("g")
    .call(d3.axisLeft(y)) // schaalt alle data op de y as.
    .append("text") // zorgt dat er text bij komt.
    .attr("fill", "#000") // en allemaal css propperties.
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("Price ($)");

  //zorgt er voor dat er een path wordt aangemaakt bij de Svg.
  g.append("path")
    .datum(data) // weergeeft de full chart met data -https://stackoverflow.com/questions/13181194/d3js-when-to-use-datum-and-data
    .attr("fill", "none") // geeft weer svg rules mee om het te stijlen.
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);

});
