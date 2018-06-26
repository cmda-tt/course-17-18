# Interactivity
This assignment teaches how to make a chart interactive with non-trivial interaction.
I used the chart i made in assignment 1 because that one did not have interaction.

## Data
The data consists of two rows, Languages and speakers, where languages are the names of the languages and speakers is the amount speaking the language

### Background
This chart shows the amount of people speaking certain languages. Languages are mapped on x and the amount is mapped on y.
The chart is based on an example from Mike Bardock (link in licensing).
The chart has a checkbox in the topright, this box will change the way the data is represented. With the box checked the data will be ordered from high to low, unchecked will show the data in Alphabetical order.

## d3.ascending
The ordering is done by applying d3.ascending on the data. by selecting "input" and adding it to the function change() the checkbox will trigger the change.

### Features
d3-dsv - parse tab-separated values
d3-format - number formatting
d3-scale - position encodings
d3-array - data processing
d3-axis - axes

### Licensing
Original work: https://bl.ocks.org/mbostock/3885304
Released under the GNU General Public License, version 3.

MIT © Jimmy de Kroon
