
d3.json('data.json', function (error, data) {
	console.log(data)
		
var margin = {top: 20, right: 20, bottom: 40, left: 50},
    padding = 40,
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;

//lineChart//	

var lineCanvas = d3.select("#lineChart")
	.append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .append("g");

var x = d3.scale.ordinal()
    .domain(data.map(function(d) {return d.date;}))
    .rangeBands([50, width - 20], 1);

var y = d3.scale.linear()
   .domain([0, d3.max(data, function(d) {return d.value;})])
   .range([height - padding, padding]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

lineCanvas.append("g")
  .attr("class","axis")
  .attr("transform", "translate(0," + (height - margin.bottom) + ")")
  .call(xAxis);

lineCanvas.append("g")
  .attr("class","axis")
  .attr("transform", "translate(" + (margin.left) + ",0)")
  .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -40)
      .attr("x", -35)
      .style("text-anchor", "end")
      .text("Afstand in KM");

lineCanvas.selectAll("circle")
  .data(data)
    .enter()
      .append("circle")
      .attr({
        cx: function (d) { return x(d.date)},
        cy: function (d) { return y(d.value)},
        r: 3,
        class: "circle"
    });
	
var link = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); })
	.interpolate("cardinal");

lineCanvas.append("path")
	.attr("d", link(data))
	.attr("class", "link")
	
	
//barChart//

var barCanvas = d3.select("#barChart")
	.append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .append("g");

var x = d3.scale.ordinal()
    .domain(data.map(function(d) {return d.date;}))
    .rangeBands([50, width - 20], 1);

var y = d3.scale.linear()
   .domain([0, d3.max(data, function(d) {return d.value;})])
   .range([height - padding, padding]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

barCanvas.append("g")
  .attr("class","axis")
  .attr("transform", "translate(0," + (height - margin.bottom) + ")")
  .call(xAxis);

barCanvas.append("g")
  .attr("class","axis")
  .attr("transform", "translate(" + (margin.left) + ",0)")
  .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -40)
      .attr("x", -35)
      .style("text-anchor", "end")
      .text("Afstand in KM");	
	  
barCanvas.selectAll('bars')
	.data(data)
		.enter()
			.append('rect')
			.attr("class", "bars")
			.attr("x", function(d){return x(d.date) -20 ; })
			.attr("y", function(d){return y(d.value) ; })
			.attr("width", 45)
			.attr("height", function(d){return height - margin.bottom - y(d.value);});
			
			
//pieChart//

var radius = Math.min(width, height) / 2.5;
var pieWidth = 100;

var color = d3.scale.category20c();
	//.range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']);
	
var pieCanvas = d3.select("#pieChart")
	.append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
	.attr('transform', 'translate(' + width/2 +  ',' + height/2 +')');
	
var arc = d3.svg.arc()
	.innerRadius(radius)
	.outerRadius(pieWidth);

var outerArc = d3.svg.arc()
	.innerRadius(radius)
	.outerRadius(pieWidth * 4.5);
	
var pie = d3.layout.pie()
	.value(function(d){return d.value})
	.sort(null);
	
var g = pieCanvas.selectAll('pie')
	.data(pie(data))
	.enter()		
		g.append('path')
			.attr('class', 'arc')
			.attr('d', arc)
			.attr('fill', function(d){return color(d.value);});
			
var innerLabel = pieCanvas.selectAll('text') 
	.data(pie(data))
	.enter();
		g.append('text')
		.attr('class','label')
		.attr("transform", function(d){ 
			var midAngle = d.endAngle < Math.PI ? d.startAngle/4 + d.endAngle/4 : d.startAngle/4  + d.endAngle/4 + Math.PI ;
			return "translate(" + arc.centroid(d)[0] + "," + arc.centroid(d)[1] + ") rotate(-360) rotate(" + (midAngle * 360/Math.PI) + ")"; })
		.attr("dx", "0em")
		.attr("dy", "-4em")
		.attr('text-anchor','middle')
		.text(function(d) { return d.data.value; });

var outerLabel = pieCanvas.selectAll('text') 
	.data(pie(data))
	.enter();				
		g.append('text')
		.attr('class','label')
		.attr("transform", function(d){ 
			var midAngle = d.endAngle < Math.PI ? d.startAngle/4 + d.endAngle/4 : d.startAngle/4  + d.endAngle/4 + Math.PI ;
			return "translate(" + outerArc.centroid(d)[0] + "," + outerArc.centroid(d)[1] + ") rotate(-360) rotate(" + (midAngle * 360/Math.PI) + ")"; })
		.attr("dx", "0em")
		.attr("dy", "0.35em")
		.attr("text-anchor","middle")
		.text(function(d) { return d.data.date; });
			

	
});



/*

TweenLite.from("path", 5, {drawSVG:"0% 0%", ease:Linear.easeNone, delay:1} );

TweenMax.staggerFrom("circle", 1, {opacity: 0, ease:Power1.easeInOut});

*/