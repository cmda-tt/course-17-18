# Donut chart

A simple responsive donut chart visualising the populations of various age
groups with pretty colours based on a [`bl.ock`][block]
by [**@mbostock**][block-author] (GPL-3.0).

![preview](preview.png)

## Background

I used beautify to line things out and make it easier to read the code.
I also place some ; in the code and changed vars. In the HTML I placed some
of the basic components that I think are important.

## Data

The Data I used:
<table>
  <tr>
    <th>age</th>
    <th>population</th>
  </tr>
  <tr>
    <td><5</td>
    <td>2704659</td>
  </tr>
  <tr>
    <td>5-13</td>
    <td>4499890</td>
  </tr>
  <tr>
    <td>14-17</td>
    <td>2159981</td>
  </tr>
  <tr>
    <td>18-24</td>
    <td>3853788</td>
  </tr>
  <tr>
    <td>25-44</td>
    <td>14106543</td>
  </tr>
  <tr>
    <td>45-64</td>
    <td>8819342</td>
  </tr>
  <tr>
    <td>≥65</td>
    <td>612463</td>
  </tr>
</table>

## Features

*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.csv`
    — Loading files
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleOrdinal`
    — Position encodings
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Select elements
*   [`d3-shape`](https://github.com/d3/d3-shape#api-reference)
    — `d3.pie` and `d3.arc`
    — Graphical primitives

## License

GPL-3.0 © Kevin Goldstein

[block]: https://bl.ocks.org/mbostock/3887193

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-2-style/kevingoldstein
