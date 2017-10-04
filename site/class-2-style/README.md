# myStyle
For this assignment we had to refactor and reformat code.
Since I've been writing code for a while I've been using a style that makes it easier for me and I hope for everyone who wants to read my code.

# Simple Donut Chart
A simple responsive donut chart visualising the populations of various age
groups with pretty colours based on a [`bl.ock`][block]
by [**@mbostock**][block-author] (GPL-3.0).

# Data
The data you see is visualised using a dataset provided by school. The data is about the age and population and is saved using comma seperated values.

## Style.JS

Explanation on how I write my javascript.

* Variables
Every variable with more attributes has enters to place those attributes underneath each other. Seperated by an enter for better readabillity.
   
    ``` 
    var chart = svg.selectAll('.arc')
	
	.data(pie(c))
	.enter()
	.append('g')
	.attr('class', 'arc');
    ```
* Every block of code is seperated by an enter.
* Function example:
    ```
    function population(chart) {
	return chart.population
    }
    ```
* Using simple and easy to remember variable names.

## Style.CSS

For my CSS I like to maintain the same structure as the HTML code. (DOM).
This makes it easier for me to read through the code cause it is on the same level.

* Css structure
    ```
    html {
      color: #000;
      background-color: currentcolor;
      max-width: 100%;
    }
    
    body {
      margin: 0;
    }
    ```
## Style.HTML
In HTML I like to keep it simple. Tags are tab seperated and with enter.
Every element with a different function has more space. Example below.

```
<!DOCTYPE html>
<html>
	
	<head>
		
		<meta charset="utf8">
		<title>@jajan20</title>
		<link href="index.css" rel="stylesheet">

	</head>
	
	<body>
		
		<script src="https://d3js.org/d3.v4.min.js"></script> 
		<script src="index.js"></script>
	
	</body>

</html>
```

## Features

*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
*   [`d3-shape`](https://github.com/d3/d3-shape#api-reference)
*   [`.append`](https://github.com/d3/d3-selection/blob/master/README.md#selection_append)

GPL-3.0 © Jamie Jansen




