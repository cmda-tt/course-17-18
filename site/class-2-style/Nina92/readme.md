# Reformat Code

## Description
I reformatted the code from [site/class-2/style](https://github.com/cmda-fe3/course-17-18/tree/master/site/class-2/style) to make it more readable for humans.

## Background
This are the adjustments I made:

### HTML
* Added `<html>` element
* Added `<head>` element
* Added `</body>` closing tag
* Nested `<meta>`, `<title>` and `<link>` elements inside `<head>` section
* Nested `<script>` elements inside `<body>` section
* Enclosed every attribute value in double-quotes
* Used tab indentation for childs

### CSS
* Used the following format for CSS:

```
Selector {
	Property: Value;
}
```

### JS
* Declared all variables at the beginning of the script
* Declared one variable per statement
* Added a line break after each value in the array `colors`
* Added a line break in method chains after each method
* Used consistent tab indentation
* Reordered the functions so that if a function refers to another function, the refered function is defined first
* Gave more logical names to the parameters
* Added a space after each comma
* Added a space between operators and variables/strings/numbers
* Added a semicolon at the end of each statement
* Put the d3-request at the and of the script


## Data
The data is formatted as a CSV file and contains two columns labeled _age_ and _population_. The age describes the age group and the pupulation describes the amount of people living within the given age group.

```
age,population
<5,2704659
5-13,4499890
14-17,2159981
18-24,3853788
25-44,14106543
45-64,8819342
≥65,612463
```

## Features
* `[d3-request]`(https://github.com/d3/d3-request#api-reference) — `d3.csv` — Loading files
* `[d3-scale]`(https://github.com/d3/d3-scale#api-reference) — `d3.scaleOrdinal` — Position encodings
* `[d3-selection]`(https://github.com/d3/d3-selection#api-reference) — `d3.select` — Select elements
* `[d3-shape]`(https://github.com/d3/d3-shape#api-reference) — `d3.pie` and `d3.arc` — Graphical primitives

## License
GPL-3.0 © Titus Wormer
