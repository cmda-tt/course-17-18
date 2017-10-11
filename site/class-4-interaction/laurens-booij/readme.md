# Interactivity
## Preview
![Alt text][preview]

## Description
This is a bar chart with a interactive sort function. It is based on the original [bar chart][chart] by [Mike Bostock][author]. I have used this [project][inspiratie] as an inspiration and source for adding the sort functionality.

## Background
First I moved everything into separate files. The changes I made are listed below:

### index.html
* Separated all the inline code into:
  * index.js
  * index.css

* Added `<html>`, `<body>` and `<head>` tags.
* Added `<title>` tag with my Github username @laurens-booij
* Added `<link>` tag linking to `index.css`.
* Added `<script>` tag linking to `index.js`.
* Removed the `<svg>` tag.

### index.js
* Made it so that the `<svg>` is declared in the `js` file instead of selected:
```javascript
var svg = d3.select("body").append("svg").attr("width", "960").attr("height", "500")
```

* Added a lot of things to make it work. All credits to [this project][inspiratie] for helping me trough this ordeal.

### index.css
I wrote the css from scratch. The only line I have copied from the original is:

`.axis--x path {
  display: none;
}`

## Data
The data is about the usage of letters in the alphabet and is loaded from `index.tsv`.

## Process
![alt text][hazes]
`Source: https://www.nu.nl/muziek/3840039/volledig-oeuvre-andre-hazes-gebundeld.html`

[Bloed, zweet en tranen][boedzweettranen]

## License
Released under the GNU General Public License, version 3. © Laurens Booij

[preview]: preview.png
[author]: https://bl.ocks.org/mbostock
[chart]: https://bl.ocks.org/mbostock/3885304
[inspiratie]: https://cmda-fe3.github.io/course-17-18/class-4/sort/
[hazes]: hazes.jpg
[boedzweettranen]: https://www.youtube.com/watch?v=mgnlEOATwzI
