// This code is originally from https://bl.ocks.org/mbostock/4063269

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    format = d3.format(",d"),
    color = d3.scaleOrdinal(d3.schemeCategory20b),
    pack = d3.pack().size([width, height]).padding(20);

d3.csv("punten.csv", function(d) {
  d.value = +d.value;
  if (d.value) return d;
}, function(error, classes) {
  if (error) throw error;

  // als er punten in de naam van de ic zitten wordt alle tekst voor de laatste punt verwijderd en alleen de laatste tekst getoond
  var root = d3.hierarchy({children: classes})
      .sum(function(d) { return d.value; })
      .each(function(d) {
        if (id = d.data.id) {
          var id, i = id.lastIndexOf(".");
          d.id = id;
          d.package = id.slice(0, i);
          d.class = id.slice(i + 1);
        }
      });
  
  // maak een group element aan in de svg met de class node
  var node = svg.selectAll(".node")
    .data(pack(root).leaves())
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  // voegt een circle toe aan de node
  node.append("circle")
      .attr("id", function(d) { return d.id; })
      // bepaalt de grootte van de radius gebaseerd op de waarde van de value
      .attr("r", function(d) { return d.r; })
      // ik zet de fill eerst op wit zodat de transition naar de kleuren hierna er beter uitziet
      .style("fill", "white")
      // voeg de transition toe
      .transition()
      // bepaal hoelang de transition duurt
      .duration(1000)
      //functie die ervoor zorgt dat er vertraging zit tussen de fade-in van de verschillende elementen,begint bij de id met de grootste value
      .delay(function(d, i) { return i * 100; })
      
      // zet de ease op lineair
      .ease(d3.easeLinear)
      // kleur gebaseerd op ordinal d3 color scale in variabele color
      .style("fill", function(d) { return color(d.package); })
  
    // voeg de tekst van de id toe aan de nodes
  node.append("text")
      .attr("clip-path", function(d) { return d.id; })
    .selectAll("tspan")
    // deze zorgt ervoor dat de class een naam vanaf de eerste letter van de id, geen leesteken of iets dergelijks
      .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
    // voegt een tspan in de clip-path toe om de id weer te geven
    .enter().append("tspan")
      .attr("x", 0)
      .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
      .text(function(d) { return d; })
        
    // laat op hover de id en de value van de desbetreffende node zien in tooltip
  node.append("title")
      .text(function(d) { return d.id + "\n" + format(d.value); })
  
  d3.selectAll("text")
  // maak de tekst onzichtbaar als de cirkels nog niet zichtbaar zijn
  .style("opacity", "0")
  .transition()
  // 10 milliseconden later dan de fade in van de cirkels
  .delay(function(d, i) { return i * 110; })
  .style("opacity", "1")
});


           