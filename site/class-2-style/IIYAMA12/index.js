// prepare all basic variables
var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2,
    colors = [
        'hsl(45, 99%, 59%)', 'hsl(96, 99%, 59%)',
        'hsl(148, 99%, 59%)', 'hsl(199, 99%, 59%)',
        'hsl(250, 99%, 59%)', 'hsl(302, 99%, 59%)',
        'hsl(353, 99%, 59%)'
    ];

// console.log("radius:", radius);

// Apply the basic variables on to d3 functions.
// put all colors from <colors> in to an object which can apply the right color to the right scale.


var color = d3.scaleOrdinal()
    .range(colors),

    arc = d3.arc()
    .outerRadius(radius - 16) // offset outer ring
    .innerRadius(radius - 128), // offset inner ring

    pie = d3.pie()
    .sort(null)
    .value(getItemPopulation), // do not give it a undefined value = code stops working and NO warning :(!!!

    svg = d3.select('main') // Make the svg element and apply it on to the (now) <main> element.
    .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height].join(' '))
        .append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')'); // Make sure it always stays a block (250 x 250)  within the svg element.


// console.log("svg d3 ref:", svg);

// -----------------------------------------
// functions

function render(error, data) {
    if (error) throw error;

    var items = svg.selectAll('.arc')
        .data(pie(data)).enter()
        .append('g')
            .attr('class', 'arc');
    // console.log(items);
    //  item = {data: {age:string, population:int}, index: 0, value: 2704659, startAngle: 0, endAngle: 0.46233446988176324, padAngle: 0 }
    items.append('path').attr('d', arc).style('fill', getItemFill), items.append('text').attr('transform', transform).attr('dy', '.35em').text(getItemAge);


}

function getItemtype(item) {
    return item.population = Number(getItemPopulation(item)), item;
}

function transform(item) {
    // https://github.com/d3/d3-shape/blob/master/README.md#arc_centroid
    // calculates the center for the text in the diagram.
    //console.log('translate(' + arc.centroid(a) + ')');
    // arc (x, y, radius, startAngle, endAngle, counterClockwise) http://www.html5canvastutorials.com/tutorials/html5-canvas-arcs/
    return 'translate(' + arc.centroid(item) + ')';
}

function getItemFill(item) { // get the fill color of an item
    // console.log("fill:", item);
    return color(getItemAge(item));
}

function getItemAge(item) { // get the age of an item
    // item.data = {age:string, population:int}
    return item.data.age;
}

function getItemPopulation(item) { // get the population of an item
    return item.population;
}

// console.log("d3.csv");
d3.csv('index.csv', getItemtype, render); // (url [[, row], callback]) https://github.com/d3/d3-request/blob/master/README.md#csv
// row is a function which can be used to filter or map objects.
