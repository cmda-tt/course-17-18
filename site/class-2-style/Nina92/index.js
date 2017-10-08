var width = 500;
var height = 500;
var radius = Math.min(width, height) / 2;

var colors = [
	'hsl(45, 99%, 59%)',
	'hsl(96, 99%, 59%)',
	'hsl(148, 99%, 59%)',
	'hsl(199, 99%, 59%)',
	'hsl(250, 99%, 59%)',
	'hsl(302, 99%, 59%)',
	'hsl(353, 99%, 59%)'
];

var color = d3.scaleOrdinal()
	.range(colors);

var arc = d3.arc()
	.outerRadius(radius - 16)
	.innerRadius(radius - 128);

var pie = d3.pie()
	.sort(null)
	.value(population);

var svg = d3.select('body')
	.append('svg')
		.attr('width', width)
		.attr('height', height)
		.attr('viewBox', [0, 0, width, height].join(' '))
	.append('g')
		.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

function transform(transformValue) {
	return 'translate(' + arc.centroid(transformValue) + ')';
}

function population(pupulationValue) {
	return pupulationValue.population;
}

function age(ageValue) {
	return ageValue.data.age;
}

function fill(partColor) {
	return color(age(partColor));
}

function type(typeValue) {
	return typeValue.population = Number(population(typeValue)),typeValue;
}

function renderDonutChart(error, data) {
	if (error) throw error;

	var a = svg.selectAll('.arc')
		.data(pie(data))
		.enter().append('g')
			.attr('class', 'arc');

		a.append('path')
			.attr('d', arc)
			.style('fill', fill);

		a.append('text')
			.attr('transform', transform)
			.attr('dy', '.35em')
			.text(age);
}

d3.csv('index.csv', type, renderDonutChart);
