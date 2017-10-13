//Gebaseerd op code van https://bl.ocks.org/mbostock/3885304 van Mike Bostocks, 
//https://github.com/cmda-fe3/course-17-18/tree/master/site/class-4/axis van Titus Wormer. (Werkcolleges + Lesmateriaal)

//Hier zijn de variabelen aangemaakt om svg te gaan selecteren met de breedte en hoogte aangegeven.
var svg = d3.select("svg"),
    margin = { top: 20, right: 20, bottom: 80, left: 40 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom

// Hieronder worden de grootte van de kaart in kaart gebracht.
var x = d3.scaleBand().rangeRound([0, width]).padding(0.2),
    y = d3.scaleLinear().rangeRound([height, 0])

//Attributen aan de svg groep meegeven
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

//De records worden uit het CSV bestand gehaald. Verder zoekt het naar de kolom frequency.
d3.csv("index.csv", function(d) {
    d.frequency = +d.frequency
    return d
}, function(error, data) {
    if (error) throw error
    x.domain(data.map(dag))
    y.domain([0, d3.max(data, frequency)])

    //In de svg worden er groepen aangemaakt in de x as
    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dy", "1em")
        .attr("dx", ".3em")

    //In de svg worden er groepen aangemaakt in de y as
    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "%"))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Aantal uur")

    //De bar van de barchart selecteren en een vorm geven
    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.dag) })
        .attr("y", function(d) { return y(d.frequency) })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.frequency) })

    // Hieronder een stukje code afkomstig van Titus Wormer. Example code. In de code gebeurt er een onchange wanneer de box geselecteerd is. Op deze gebeurtenis veranderen de waardes.
    d3.select("input").on("change", onchange)

    var timeout = d3.timeout(change, 2000)

    function onchange() {
        var sort = this.checked ? sortOnFrequency : sortOnDag
        var x0 = x.domain(data.sort(sort).map(dag)).copy()
        var transition = svg.transition().duration(1500).ease(d3.easePoly)

        timeout.stop()

        svg.selectAll(".bar").sort(sortBar)

        transition.selectAll(".bar")
            .delay(delay)
            .attr("x", barX0)

        transition.select(".axis--x")
            .call(d3.axisBottom(x))
            .selectAll("g")
            .delay(delay)

        function sortBar(a, b) {
            return x0(dag(a)) - x0(dag(b))
        }

        function barX0(d) {
            return x0(dag(d))
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

    function sortOnFrequency(a, b) {
        return frequency(b) - frequency(a)
    }

    function sortOnDag(a, b) {
        return d3.descending(dag(a), dag(b))
    }

    function dag(d) {
        return d.dag
    }

    function frequency(d) {
        return d.frequency
    }
})
