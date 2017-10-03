# Debug

## Description
These files had a bunch of intentional errors, which I've fished out. I did not manage to find them all by myself, and had a little peek in the already uploaded assignments just to know which ones I ended up missing (thanks guys!) because I really wanted it to work.


## Resolving errors
To resolve the console errors, I've changed the following: 
* Set all the margins correctly in `var margin` (left, right, top, bottom)
* Set all the margins correctly in `var svg`
* Changed `d3.tsv` to `d3.csv`
* Changed `"index.tsv"` to `"index.csv"`

## D3.v3 to D3.v4
I have never worked with v3, as this is the first time I'm taking this class. Finding these errors was ridiculously hard, and I had to peek with the other students to see it. What I did by myself was:
* Changed the script url in the html file, so it linked to v4 library
* Changed `d3.scale.linear()` to `d3.scaleLinear()`

I hadn't worked with ordinal scales yet, and so I completely read over it. so the following I __did__ fix, but with a little help of fellow students' work: 
* Changed `d3.scale.ordinal()` to `d3.scaleOrdinal()`
* Changed `d3.svg.axis().scale(x).orient('bottom')` to `d3.axisBottom(x)`
* Changed `d3.svg.axis().scale(y).orient('left')` to `d3.axisLeft(y)`
