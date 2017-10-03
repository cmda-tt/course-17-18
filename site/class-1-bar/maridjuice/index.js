var svg = d3.select("svg"),
    margin = {
        top: 50,
        right: 20,
        bottom: 30,
        left: 80
    },

    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

//Scaleband is om aan te geven hoe breed het gehele x as mag zijn, waar binnen in de bars geplaatst worden. De padding is de ruimte die tussen de bars wordt gegeven. 

//Met rangeround geef je aan waar op de as het scalen begint, binnen in de aangegeven grootte van de svg. Als je bijvoorbeeld 50 voor width plaatst begint het pas na 50px met berekenen hoe breed het geheel is, en wordt het als het ware gescaled binnen de nieuwe proporties vanaf 50px.

var x = d3.scaleBand().rangeRound([0, width]).padding(0.02),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g") //
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.tsv("data.tsv", function (d) {
    d.Moeheid = +d.Moeheid;
    return d;

}, function (error, data) {
    if (error) throw error;

    x.domain(data.map(function (d) {
        return d.SlaapUren;
    })); //dit maakt een array met de aantal objecten op de x as, dit haalt hij uit de data.tsv. 
    y.domain([0, d3.max(data, function (d) {
        return d.Moeheid;
    })]); //laad de max waarde in van de frequency tabel

    g.append("g") //plaats de groep g in een groep

    .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y") //
        .call(d3.axisLeft(y).ticks(10, "%")) //Aantal stappen op de y as waar in de waarde wordt aangegeven
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Moeheid");

    g.selectAll(".bar") //selecteerd alle elementen met de class .bar in de variabel g
        .data(data) //laadt data in
        .enter().append("rect") //maakt een rechthoek aan
        .attr("class", "bar") //geeft de class bar
        .attr("x", function (d) {
            return x(d.SlaapUren); //plaatst alle data met header letter op de x as
        })
        .attr("y", function (d) {
            return y(d.Moeheid); ////plaatst alle data met header letter op de y as
        })
        .attr("width", x.bandwidth()) //alle elementen met de class .bar krijgen de width van de x as
        .attr("height", function (d) {
            return height - y(d.Moeheid); //alle elementen met de class .bar krijgen de height van de y as
        });
});