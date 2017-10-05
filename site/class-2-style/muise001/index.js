function render(err, work) {
  if (err) throw err;
  var all = svg.selectAll('.arc').data(pie(work)).enter().append('g').attr('class', 'arc');
    all.append('path').attr('d', arc).style('fill', fill),
    all.append('text').attr('transform', transform).attr('dy', '.35em').text(age);
};

function type(all) {
  return all.population = Number(population(all)), all;
};

function transform(all) {
  return 'translate(' + arc.centroid(all) + ')';
};

function fill(all) {
  return color(age(all));
};

function age(all) {
  return all.data.age;
};

function population(all) {
  return all.population;
};

var width = 500;
var height = 500;
var radius = Math.min(width, height) / 2;
var colors = ['hsl(45, 99%, 59%)', 'hsl(96, 99%, 59%)', 'hsl(148, 99%, 59%)', 'hsl(199, 99%, 59%)', 'hsl(250, 99%, 59%)', 'hsl(302, 99%, 59%)', 'hsl(353, 99%, 59%)'];
var color = d3.scaleOrdinal().range(colors);
var arc = d3.arc().outerRadius(radius - 16).innerRadius(radius - 128);
var pie = d3.pie().sort(null).value(population);
var svg = d3.select('body').append('svg').attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height].join(' ')).append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
d3.csv('index.csv', type, render);
