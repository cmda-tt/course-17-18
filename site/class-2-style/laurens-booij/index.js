var a;
var width;
var height;
var radius;
var colors;
var color;
var arc;
var	pie;
var svg;

function render(b, c) {
    if (b) throw b;
    var a = svg.selectAll('.arc').data(pie(c)).enter().append('g').attr('class', 'arc');
    a.append('path').attr('d', arc).style('fill', fill), a.append('text').attr('transform', transform).attr('dy', '.35em').text(age);
}

function type(a) {
    return a.population = Number(population(a)), a
}

function transform(a) {
    return 'translate(' + arc.centroid(a) + ')'
}

function fill(a) { return color(age(a)) }

function age(a) { return a.data.age }

function population(a) { return a.population }
var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2,
    colors = ['#2274A5',
              '#F1C40F',
              '#ED8B00',
              '#D90368',
              '00CC66',
              '#EA2027',
              '#bebebe'],
    color = d3.scaleOrdinal().range(colors),
    arc = d3.arc().outerRadius(radius - 16).innerRadius(radius - 128),
    pie = d3.pie().sort(null).value(population),
    svg = d3.select('body').append('svg').attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height].join(' ')).append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
d3.csv('index.csv', type, render)
