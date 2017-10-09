//******************************************************//
// 	 used an example of Mike Bostock's d3 Bar Chart 	//
//	 		https://bl.ocks.org/mbostock/3885304 		//
//******************************************************//


// load in the Json file
d3.json('data.json', function(error, data) {
    console.log(data)

// set the margins, width and height as variable	
    var margin = {
            top: 40,
            right: 60,
            bottom: 40,
            left: 40
        },
        padding = 40,
        width = window.innerWidth - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

	
    var barCanvas = d3.select("#barChart") // select the div barChart and name it as the barCanvas as variable, 
        .append("svg")	// add a svg element to the canvas
        .attr("width", width) // set the width of the canvas
        .attr("height", height) // set the height of the canvas
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")") // set the position of the canvas
        .append("g"); // append it to group g

    var x = d3.scaleBand() // set the range of the x axis
        .range([40, width]) // in a range from 40px to the end of the canvas
        .padding(1); // add 1px padding

    var y = d3.scaleLinear() // sey the range of the y axis
        .range([height - padding, padding]); 

    x.domain(data.map(function(d) {return d.date;})); // put date from the json file in the domain of x
    y.domain([0, d3.max(data, function(d) {return d.value;})]); // put value from the json file in the domain of y

    barCanvas.append("g")	//  add the X axis
        .attr("class", "axis") // add an attribute class as axis
        .attr("transform", "translate(0," + (height - margin.bottom) + ")") // set the position of the x axis
        .call(d3.axisBottom(x)) // reveal the axis by calling it
		.append("text") // append a text element to it
		.attr("y", 40) // set position of y point
        .attr("x", 60) // set position of x point
		.text("Datum"); // insert text to text element

    barCanvas.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + (margin.left) + ",0)")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("transform", "rotate(-90)") // rotate the axis -90 degrees
        .attr("y", -30)
        .attr("x", -35)
        .text("Afstand in KM");

    barCanvas.selectAll('bars') //select all bars add bars to the canvas
        .data(data) // use data as data
        .enter() // use enter to insert the data
        .append('rect') // append a rectangle
        .attr("class", "bars") // add bars as class
        .attr("x", function(d) {return x(d.date) - 25;}) //return the date as value on the x axis 
        .attr("y", function(d) {return y(d.value);}) //return the value as value on the y axis 
        .attr("width", 50) //set width of bar
        .attr("height", function(d) {return height - margin.bottom - y(d.value); }); //set the height of the bar based on the value
});