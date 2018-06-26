/* Gebaseerd op Mike Bostock's Bar Chart August 20, 2017 https://bl.ocks.org/mbostock/3885304. Aantal aanpassingen zijn gedaan door mij, deze zullen aangegeven worden met een comment, daarnaast zal het ook aangegeven worden in de readme.md */

// Hier wordt een een variable svg gemaakt, vervolgens worden er margins toegevoegd aan de canvas van de svg.
var svg = d3.select("svg"),
    margin = {top: 30, right: 20, bottom: 20, left: 30},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

// Hier wordt de bar gecalculeerd, zodat het in een passende manier wordt geplaatst. https://medium.com/@mbostock/introducing-d3-scale-61980c51545f
var x = d3.scaleBand().padding(0.2);
    y = d3.scaleLinear();

var group = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Hier wordt de data uit de TSV file geladen.
d3.tsv("data.tsv", row, onload);

// Hier wordt een error gegeven, wanneer er geen data is gevonden
function onload(error, data) {
  if (error) throw error;

// Hier wordt alle data gepakt, waarna er een passende schaal wordt gemaakt 'domain/range'
x.domain(data.map(letter));
y.domain([0, d3.max(data, frequency)]);



/* +++ Gebaseerd op de example in de slides. @wooorm https://github.com/cmda-tt/course-17-18/tree/master/site/class-4/sort +++ */



// Hier wordt de x as in een groep en variabele gedaan.
var xAxis = group
      .append("g")
      .attr("class", "axis axis-x")

// Hier wordt de y as in een groep en variabele gedaan.
var yAxis = group
      .append("g")
      .attr("class", "axis axis--y")


// Hier worden alle barren geselecteerd, waarna er een class wordt gegeven.
var bars = group
    .selectAll(".bar")
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')


onresize();

// Hier wordt gekeken of de input van de checkbox wordt veranderd
d3.select('input').on('click', onchange);

// Hier worden de barren, x-as en y-as gemaakt.
function onresize() {
    var width = parseInt(svg.style('width'), 10) - margin.left - margin.right;
    var height = parseInt(svg.style('height'), 10) - margin.top - margin.bottom;

    x.rangeRound([0, width]);
    y.rangeRound([height, 0]);

    bars
        .attr('x', barX)
        .attr('y', barY)
        .attr('width', x.bandwidth())
        .attr('height', barHeight)
        .on('mouseover', mouseOver) //
        .on('mouseout', mouseOut);

    xAxis.call(d3.axisBottom(x)).attr('transform', 'translate(0,' + height + ')');
    yAxis.call(d3.axisLeft(y).ticks(10, '%'));

    function barHeight(d) {
        return height - barY(d);
    }
}



// +++ Tooltip interactie, Oi heeft mij geholpen met het maken van deze code.

// Hier wordt de x en y waarde van een gepakt van de geselecteerde bar.
function mouseOver(d){
    var x = this.getAttribute('x');
    // console.log(this);
    var y = this.getAttribute('y');

    // Hier wordt een vlak gemaakt, genaamd container, waarop de positie van de tekst komt.
    d3.select('.container')
      .append('div')
      .attr('class', 'tooltip')
      .style('left', x+'px')
      .style('top', y+'px')
      .text((d.frequency*100+'%'));
    }

// Wanneer de muis niet meer de bar selecteert, zal de css verwijderd worden
function mouseOut(d){
    d3.selectAll('.tooltip')
    .remove();
}

// +++



function onchange() {
    var sort = this.checked ? sortOnFrequency : sortOnLetter;
    var x0 = x.domain(data.sort(sort).map(letter)).copy();
    var transition = svg.transition();

    svg.selectAll('.bar').sort(sortBar);

    // Hier zullen de barren aangeroepen worden om te schuiven
    transition.selectAll('.bar')
        .delay(delay)
        .attr('x', barX0);

    // Hier zullen de letters aangeroepen worden om te schuiven
    transition.select('.axis-x')
        .call(d3.axisBottom(x))
        .selectAll('g')
        .delay(delay);

    function sortBar(a, b) {
        return x0(letter(a)) - x0(letter(b));
    }

    function barX0(d) {
        return x0(letter(d));
    }

    function delay(d, i) {
        return i * 50;

    }
}

// Hier wordt de waarde van x en y berekend voor de bar
function barX(d) {
    return x(letter(d));
}

function barY(d) {
    return y(frequency(d));
  }
}

function row(d) {
    d.frequency = Number(frequency(d));
    return d;
}

// Hier worden de frequency geordend
function sortOnFrequency(a, b) {
    return frequency(b) - frequency(a);
}

// Hier worden de letter geordend
function sortOnLetter(a, b) {
    return d3.ascending(letter(a), letter(b));
}

// Hier wordt frequency opgehaald
function frequency(d) {
    return d.frequency;
}

// Hier wordt letter opgehaald
function letter(d) {
    return d.letter;
}
