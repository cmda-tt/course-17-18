# **Clean**

## **Introduction**
Cleaning a datafile to be used in a data visualisation.

### **Source**
[Multi-Series Line Chart](https://github.com/cmda-fe3/course-17-18/tree/master/site/class-3/clean)

## **Description**
In this assignment I needed to download some "dirty" data from the KNMI website. This included tempratures, windspeeds, names of places, etc.. From this huge list of data we had to filter out a couple of important data subjects and clean it up. This meant removing unnecessary spaces

## **Data**
STN | YYYYMMDD | HH | DD | FH | FF | FX | T
--- | --- | --- | --- | --- | --- | --- | ---
260 | 20171001 | 1 | 150 | 20 | 20 | 30 | 99

## **Features**
*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.extent`
    — Array statistics
*   [`d3-axis`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Reference marks for scales
*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.text`
    — Loading files
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleTime`, `d3.scaleLinear`, `d3.scaleOrdinal`, and
    `d3.schemeCategory10`
    — Position encodings
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Select elements
*   [`d3-shape`](https://github.com/d3/d3-shape#api-reference)
    — `d3.line` and `d3.curveBasis`
    — Graphical primitives

## **License**
MIT © Leon van Zijl
