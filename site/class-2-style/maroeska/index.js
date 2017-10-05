var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2,

    colors =
        ['hsl(45, 99%, 59%)',
         'hsl(96, 99%, 59%)',
         'hsl(148, 99%, 59%)',
         'hsl(199, 99%, 59%)',
         'hsl(250, 99%, 59%)',
         'hsl(302, 99%, 59%)',
         'hsl(353, 99%, 59%)'];

    color = d3
        .scaleOrdinal()
        .range(colors);
    arc = d3
        .arc().outerRadius(radius - 16)
        .innerRadius(radius - 128);
    pie = d3
        .pie()
        .sort(null)
        .value(population);
    svg = d3
        .select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height]
        .join(' '))
        .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    d3.csv('index.csv', type, render);

function render(b, c) {
    if (b) throw b;

    var graph = svg
        .selectAll('.arc')
        .data(pie(c))
        .enter()
        .append('g')
        .attr('class', 'arc');

    graph
        .append('path')
        .attr('d', arc)
        .style('fill', fill);

    graph
        .append('text')
        .attr('transform', transform)
        .attr('dy', '.35em')
        .text(age);
}

function type(graph) {
    return graph.population = Number(population(graph)), graph;
}

function transform(graph) {
    return 'translate(' + arc.centroid(graph) + ')';
}

function fill(graph) {
    return color(age(graph));
}

function age(graph) {
    return graph.data.age;
}

function population(graph) {
    return graph.population;
}
