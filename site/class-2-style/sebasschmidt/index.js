var
  width   = 500,
  height  = 500,
  radius  = Math.min(width, height) / 2,
  colors  = ['hsl(45, 100%, 85%)', 'hsl(45, 100%, 77%)', 'hsl(45, 100%, 67%)',                'hsl(39, 100%, 50%)', 'hsl(30, 100%, 50%)', 'hsl(21, 100%, 50%)',               'hsl(9, 100%, 50%)'],
  color   = d3.scaleOrdinal()
                .range(colors),
  arc     = d3.arc()
                .outerRadius(radius - 25)
                .innerRadius(radius - 95),
  pie     = d3.pie()
                .sort(null)
                .value(population),
  svg     = d3.select('body')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .attr('viewBox', [0, 0, width, height]
                .join(' '))
                .append('g')
                .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');


function render(b, c) {
  if (b) throw b;
  var a = svg.selectAll('.arc')
        .data(pie(c))
        .enter()
        .append('g')
        .attr('class', 'arc')
    a.append('path')
        .attr('d', arc)
        .style('fill', fill),
    a.append('text')
        .attr('transform', transform)
        .attr('dy', '.35em')
        .text(age)
};

function type(a) {
  return a.population = Number(population(a)), a
};

function transform(a) {
  return 'translate(' + arc.centroid(a) + ')'
};

function fill(a) {
  return color(age(a))
};

function age(a) {
  return a.data.age
};

function population(a) {
  return a.population
};


  d3.csv('index.csv', type, render);



