# Bar chart

In this assignment I learned how charts made with d3 work by inspecting and modifying an existing bar chart.

## Background
I picked a **basic bar chart** from d3’s example gallery, and copied and pasted the code over to my text editor. Then I separated the style and script. At first, the chart did not work. I simply forgot to navigate to localhost:8000. Instead I had opened the file directly from its directory. Whoops.

When I started swapping in new data, I wanted my vertical axes to represent a numeric value. I figured out how to do that by changing the percentage sign in `.ticks(10, "%"` to a number sign`.ticks(10, "#"`.

In order to make the colorful lines more readable, I used comments to communicate the intent of my code. A true lifesaver, since javascript is like Chinese to me. Hopefully this will change soon.

## Data
Each rectangular bar represents a number of steps I took per day over the past two weeks. The data table is stored in a TSV (Tab-separated values) file, in which columns of data are separated by tabs (as you might have guessed).

`date	steps
20/9	.2408
21/9	.5111
22/9	.1936
23/9	.3723
24/9	.8000
25/9	.3929
26/9	.4171
27/9	.4565
28/9	.5223
29/9	.1989
30/9	.2664
1/10	.7439
2/10	.4200`


## Features
selectAll - create a selection with multiple elements from the document.
select - select elements.
attr - is used to change an element's attributes.
rangeRound - all values will be rounded to the nearest whole number.
scaleLinear - create a linear scale.
append - add elements to a selection.
tsv - get a TSV file.

## License
MIT (c) Sophie Hoeboer
