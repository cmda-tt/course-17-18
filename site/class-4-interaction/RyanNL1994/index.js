// Bron Mike Bostock 20 aug 2017 https://bl.ocks.org/mbostock/3885304 & Titus Wormer https://cmda-fe3.github.io/course-17-18/class-4/sort/


// hier wordt een variable svg gemaakt. In deze variabele roept d3 de svg in de html op en wordt de margin voor deze svg bepaald

var svg = d3.select("svg"),
    margin = {
        top: 20,
        right: 20,
        bottom: 120,
        left: 130
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;


// Hier wordt de witruimte bepaald tussen de bars van de grafieken

var x = d3.scaleBand().rangeRound([0, width]).padding(0.3),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// Hier wordt de data wat in mijn TSV bestand zit aangeroepen door d3 en als er iets mis is wordt er een error aangegeven via de if statement

d3.tsv("data.tsv", function (d) {
    d.speakers = +d.speakers;
    return d;
}, function (error, data) {
    if (error) throw error;
    x.domain(data.map(function (d) {
        return d.language;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.speakers;
    })]);

    // Hier geef ik aan dat als er op de input (in de html) wordt gedrukt dat de function onchange geactiveerd en uitgevoerd moet worden.

    d3.select('input').on('change', onchange);

    function onchange() {
        var sort = this.checked ? sortOnSpeakers : sortOnLanguage;
        var x0 = x.domain(data.sort(sort).map(language)).copy();
        var transition = svg.transition();

        svg.selectAll('.bar').sort(sortBar);

        // Deze stuk code laat de grafieken bewegen als er op de input geklikt wordt. hier zit een duration van 1,5 sec. in, wordt blauwgekleur en heeft een easeback transition.

        transition.selectAll('.bar')
            .transition().style('fill', 'blue')
            .duration(1500)
            .ease(d3.easeBack)
            .attr('x', barX0);

        // Deze stuk code laat de clubnamen bewegen op de x as hier zit een duration van 1,5 sec op met een easeback transition.

        svg.select('.axis--x')
            .transition()
            .duration(1500)
            .ease(d3.easeBack)
            .call(d3.axisBottom(x));

        function sortBar(a, b) {
            return x0(language(a)) - x0(language(b));
        }

        function barX0(d) {
            return x0(language(d));
        }

        function delay(d, i) {
            return i * 50;
        }
    }

    // Hier krijgt de groep van de x as verschillende attributes en wordt bijv. de hoogte bepaald

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Hier geef ik de rotatie aan van de tekst van de x as en hoever zij van de x/y as moeten staan

    g.selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-2em")
        .attr("dy", "-0.4em")
        .attr("transform", "rotate(-90)");


    // Hier krijgt de groep van de y as verschillende attributes en wordt bijv. de hoogte bepaald, fill, plaatsing van tekst.

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, '%'))
        .append("text")
        .attr("y", 2)
        .attr("x", 6)
        .attr("dy", "2em")
        .attr("dx", "-2em")
        .attr("text-anchor", "end")
        .attr("fill", "black")
        .text("Winstpercentage");

    // hier wordt een groep gemaakt om de grafiek te stijlen. Zo wordt de stijl uit de css aangeroepen en wordt er aangegeven dat deze gestijlt moet worden aan de hand van de kolom language en speakers van de TSV.

    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.language);
        })
        .attr("y", function (d) {
            return y(d.speakers);
        })
        .attr("width", x.bandwidth())
        .attr("height", function (d) {
            return height - y(d.speakers);
        });
});


// hier wordt de data van de tsv bestand onder het kopje speakers geordend
function sortOnSpeakers(a, b) {
    return speakers(b) - speakers(a);
}

// hier wordt de data van de tsv bestand onder het kopje language geordend
function sortOnLanguage(a, b) {
    return d3.ascending(language(a), language(b));
}

// Hier wordt de data van de tsv bestand onder het kopje speakers opgehaald en gereturnd
function speakers(d) {
    return d.speakers;
}

// Hier wordt de data van de tsv bestand onder het kopje language opgehaald en gereturnd
function language(d) {
    return d.language;
}
