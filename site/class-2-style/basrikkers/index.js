var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2,
    colors = ['hsl(45, 99%, 59%)', 'hsl(96, 99%, 59%)', 'hsl(148, 99%, 59%)', 'hsl(199, 99%, 59%)', 'hsl(250, 99%, 59%)', 'hsl(302, 99%, 59%)', 'hsl(353, 99%, 59%)'],
    color = d3.scaleOrdinal().range(colors),
    arc = d3.arc().outerRadius(radius - 16).innerRadius(radius - 128),
    pie = d3.pie().sort(null).value(population),
    svg = d3.select('body').append('svg').attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height].join(' ')).append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

function render(b, c) {
    if (b) throw b;
    var donut = svg.selectAll('.arc').data(pie(c)).enter().append('g').attr('class', 'arc');
    donut.append('path').attr('d', arc).style('fill', fill), donut.append('text').attr('transform', transform).attr('dy', '.35em').text(age)
}

function type(donut) {
    return donut.population = Number(population(donut)), donut;
}

function transform(donut) {
    return 'translate(' + arc.centroid(donut) + ')';
}

function fill(donut) {
    return color(age(donut));
}

function age(donut) {
    return donut.data.age;
}

function population(donut) {
    return donut.population;
}

d3.csv('index.csv', type, render)
