var svg = d3.select("svg"),
    margin = { top: 50, right: 50, bottom: 50, left: 50 }, // dit zorgt voor witruimte om de svg
    width = +svg.attr("width") - margin.left - margin.right, // Berekent breedte van de svg zonder de witruimte eromheen
    height = +svg.attr("height") - margin.top - margin.bottom; // Berekent hoogte van de svg zonder de witruimte eromheen

var x = d3.scaleBand().rangeRound([0, width]).padding(0.3), //padding bepaalt witruimte op de horizontale as
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("./data.tsv", function (d) { // Laad het TSV document in
    d.frequency = +d.frequency;
    return d;
}, function (error, data) {
    if (error) throw error;

    x.domain(data.map(function (d) { return d.letter; })); // Plaats gegevens op horizontale as
    y.domain([0, d3.max(data, function (d) { return d.frequency; })]); // Plaats gegevens op vericale as, stel hoogste waarde in voor schaal

    // Dit laadt de namen onder de staafdiagrammen in
    g.append("g")
        .attr("class", "axis axis--x") // Hierdoor staat er geen horizontale lijn onder de staafdiagrammen
        .attr("transform", "translate(0," + height + ")") // Dit zorgt ervoor dat de namen onder de staafdiagrammen staa ipv bovenaan de svg
        .call(d3.axisBottom(x));

    // Dit laadt de verticale as met percentages links in
    g.append("g") // Voegt een nieuw element aan de svg toe
        .attr("class", "axis axis--y") // Voegt twee class namen toe.
        .call(d3.axisLeft(y).ticks(20, "%")) // Bepaalt maximaal aantal streepjes met percentages
        .append("text") // Dit laad wel maar wordt niet getoond? Kan met browser te maken hebben.
        .attr("transform", "rotate(90)") // Draait de tekst 90 graden
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency"); // Stelt tekst in

    // Dit laadt de staafdiagrammen in
    g.selectAll(".bar")
        .data(data)
        .enter().append("rect") // Voeg rectangle vorm toe aan svg
        .attr("class", "bar")
        .attr("x", function (d) { return x(d.letter); }) // Bepaalt x coordinaten
        .attr("y", function (d) { return y(d.frequency); }) // Bepaalt y coordinaten
        .attr("width", x.bandwidth()) // Bepaalt breedte gebaseerd op beschikbare ruimte
        .attr("height", function (d) { return height - y(d.frequency); }); // Bepaalt hoogte gebaseerd op beschikbare ruimte
});


// https://bl.ocks.org/mbostock/3885304 