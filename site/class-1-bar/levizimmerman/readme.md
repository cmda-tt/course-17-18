# Personal Profiling with a D3 Bubble Chart
A datavisualistion (Bubble Chart) based on personal trivia about myself, like hobbys, socialmedia, and pets.

![preview bubble chart](https://github.com/levizimmerman/course-17-18/blob/do-you-read-me/site/class-1-bar/levizimmerman/preview.png?raw=true)

## Background
The contents of this projects exists out of the following files:
* __index.html__: HTML model in which the data will display;
* __index.css__: Styles global shapes of the bubble chart;
* __index.js__: Load and handles the given data;
* __levizimmerman.csv__: Holds trivial data about myself;
* __readme.md__: Describes this project;

The purpose of this exercise is to get familiar with the D3 v4 library and its methods.

---

## Data
The data consists of two __columns__:
1. ID: Identifier for the trivial content;
2. Value: Percentage defining how much of my dialy life consists of this value;

Each __row__ of data consists out of a key and a value. The key defines also a group besides the ID itself. The value is of of type number which represents a percentage.

Setup of the data file looks like the following example:
```csv
id,value
levi.skills.code,50
levi.skills.design,40
levi.skills.communication,40
```

---

## Features
A list of all features/methos used of the [D3 library (version 4)](https://github.com/d3/d3).

### Data formatting
* [scaleOrdinal()](https://github.com/d3/d3-scale/blob/master/README.md#scaleOrdinal)
* [pack()](https://github.com/d3/d3-hierarchy/blob/master/README.md#pack)
* [csv()](https://github.com/d3/d3-request/blob/master/README.md#csv)
* [hierarchy()](https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy)

### Appending data
* [append()](https://github.com/d3/d3-selection/blob/master/README.md#selection_append)
* [attr()](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr)
* [selectAll()](https://github.com/d3/d3-selection/blob/master/README.md#selectAll)
* [enter()](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter)
* [data()](https://github.com/d3/d3-selection/blob/master/README.md#selection_data)
* [text()](https://github.com/d3/d3-selection/blob/master/README.md#selection_text)

---

## License
Released under the [GNU General Public License, version 3](https://opensource.org/licenses/GPL-3.0) &copy; Levi Zimmerman

---
