//Oi Niyornram
//inspiration from https://bl.ocks.org/mbostock/3885304
//size svg variable
var padding = 100;
var gap = 10;
var outerWidth = 1600;
var outerHeight = 1000;
var innerHeight = outerHeight - (padding*2);

//insert svg in body
var svg = d3.select("div").append("svg")
.attr("width", outerWidth)
.attr("height", outerHeight);

//Create scale variable
var yScale = d3.scaleLinear();
var xScale = d3.scaleBand();

//load data
d3.tsv("data.tsv",function(err, data){
  //log err if there is an error
  if(err){
    console.log(err);
  }

  //call funtion
  createScale(data);
  renderData(data);
});

//Create scale
function createScale(data){
  //get range min/max of data
  let dataMin = d3.min(data, (d)=>+d.speakers);//get max value of data
  let dataMax = d3.max(data, (d)=>+d.speakers);//get min value of data
  yScale.domain([dataMin, dataMax]) //Data space
  .range([padding,(outerHeight-(padding*2))]); //Pixel space. *2 because padding top and bottom

  xScale.domain(data.map((d)=>d.language))//set all the language in an array
  .range([padding,outerWidth-padding]);//include the padding for the range so its not out of bound
}

//Render data
function renderData(data){
  let g = svg.append("g").attr("transform", "translate(" + padding + ", 0)");//create svg group

  //horizontal axes
  g.append("g")
  .attr("class", "axis axis--x")
  .attr("transform", "translate(-" + padding+ "," //the x-as is moved but it need to move back
  + (innerHeight) + ")")//put label to bottom of graph
  .call(d3.axisBottom(xScale));// put text at bottom

  //vertical axes
  g.append("g")
   .attr("class", "axis axis--y")
   .call(d3.axisLeft(yScale))//set text on the left side of the line
   .append("text")//add text to it because its an array
   .attr("transform", "translate(100,0)");

  //Bind data
  let bar = svg.append("g").selectAll("rect").data(data);

  //Enter data
  bar.enter()
  .append("rect")
  .attr("class", "bar activate")
  .attr("x", (d)=>xScale(d.language))//the x coordinate is the place where the text are
  .attr("y", (d)=>innerHeight - yScale(d.speakers)) // the y coordinate to create the bar
  .attr("width", xScale.bandwidth()-gap)//bandwidth()try to fill the whole container, but we dont want that's why we create a gap
  .attr("height", (d)=>yScale(d.speakers))//get height
  .style("fill", getRandomColor())
  .on('mouseover', showTooltip)
  .on('mouseout', removeTooltip);
}

//color generator
//src: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//show showTooltip if you hover over the bar chart
function showTooltip(d){
  var speakers = d.speakers
  //get the x and y postion of the bar
  var offset = -40;// this is added so that the tooltip is slide above  the bar
  var xPosition = d3.select(this).attr("x");
  var yPosition = (Number(d3.select(this).attr("y")) + offset).toString();
  console.log(yPosition);
  var tooltip = d3.select('.container')
  .append('div')
  .attr('class', "tooltip")
  .style('left', xPosition+ "px")
  .style('top', yPosition+"px")
  .text (speakers);
}

//remove tooltip when you dont hover over it anymore
function removeTooltip(){
  d3.select('.tooltip').remove();
}
