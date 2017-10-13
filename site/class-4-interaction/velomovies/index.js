//Code van https://bl.ocks.org/mbostock/3885304 door Mike Bostocks

//SVG uit het document halen en hoogte en breedte pakken
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 80, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom

//De grootte van de barchart in variabele zetten
var x = d3.scaleBand().rangeRound([0, width]).padding(0.2),
    y = d3.scaleLinear().rangeRound([height, 0])

//Attributen aan de g in de svg meegeven
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

//Het csv bestand inladen. ()+van de string die d geeft een nummer maken)
d3.csv("index.csv", function(d) {
    d.frequency = +d.frequency
    return d
}, function(error, data) {
  if (error) throw error

//Het domein/bereik van de barchart aangeven. (Schalen van de barchart)
  x.domain(data.map(letter))
  y.domain([0, d3.max(data, frequency)])

//Een groep in de svg (voor de x-as) attributen mee geven
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dy", "1em")
      .attr("dx", ".3em")

//Een groep in de svg (voor de y-as) attributen mee geven
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("percentage")

//De bar van de barchart selecteren en een vorm geven
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter) })
      .attr("y", function(d) { return y(d.frequency) })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.frequency) })

//Deze code in geïnspireerd op de code van Titus Wormer. Werd laten zien in de les. 
      d3.select("input").on("change", onchange)

      var timeout = d3.timeout(change, 2000)

      function onchange() {
        var sort = this.checked ? sortOnFrequency : sortOnLetter
        var x0 = x.domain(data.sort(sort).map(letter)).copy()
        var transition = svg.transition().duration(1000).ease(d3.easeElastic)

        timeout.stop()

        /* Initial sort */
        svg.selectAll(".bar").sort(sortBar)

        /* Move the bars. */
        transition.selectAll(".bar")
          .delay(delay)
          .attr("x", barX0)

        /* Move the labels. */
        transition.select(".axis--x")
          .call(d3.axisBottom(x))
          .selectAll("g")
          .delay(delay)

        function sortBar(a, b) {
          return x0(letter(a)) - x0(letter(b))
        }

        function barX0(d) {
          return x0(letter(d))
        }

        function delay(d, i) {
          return i * 10
        }
      }

  function change() {
    d3.select("input")
      .property("checked", true)
      .dispatch("change")
  }

    /* Sort on frequence. */
  function sortOnFrequency(a, b) {
    return frequency(b) - frequency(a)
  }

  /* Sort on letters. */
  function sortOnLetter(a, b) {
    return d3.ascending(letter(a), letter(b))
  }

  /* Get the letter field for a row. */
  function letter(d) {
    return d.letter
  }

  /* Get the frequency field for a row. */
  function frequency(d) {
    return d.frequency
  }
})
