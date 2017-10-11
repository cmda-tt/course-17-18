# **Interactivity**

### **Source**
1. [Bar Chart with Sorting by Titus](https://cmda-fe3.github.io/course-17-18/class-4/sort/)
2. [Simple Bar Graph in v4 by d3noob](https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4)

## **Description**
In this assignment I used the Bar Chart from Github by Titus as an example to give a static Bar Chart a similar effect. I downloaded a basic bar chart from the d3 gallery (see sources). From there on out I started puzzling with the code to get the desired effect:

**Steps**
1. Checked how I could change the data in the console without any triggers etc..
	```
	data.sort(function(x, y){
		return d3.ascending(x.letter, y.letter);
	});
	```
2. From there on out I replaced that sorting state to the one Titus used:
	```
	function sortOnName(doesnt, matter) {
		return d3.ascending(name(doesnt), name(matter));
	}
	```
3. This required other functions like `name()` which then required more functions
4. After implementing all the functions I had the basics up and running, I used just the functions I needed and removed all the extra's
5. Instead of a checkbox I used a span as a button (ye, could've just used a button instead 🙃) so I didn't need the if else statement at the top
6. I also changed the delay to animated the bars all at once. Like that better. So I deleted the `delay()` function
7. I used multiple event triggers on the span to let it toggle between sorting by name and age
8. Styled all the elements so it's easier on the eyes

## **Data**
*   `name` — Name of the persons
*   `age` — Age of the persons

## **Features**
*   [`d3-tip`](https://github.com/Caged/d3-tip)
    — Tooltips!
*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.max` and `d3.ascending`
    — Array statistics and searching
*   [`d3-axis`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Reference marks for scales
*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.csv`
    — Loading files
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleBand` and `d3.scaleLinear`
    — Position encodings
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Select elements
*   [`d3-timer`](https://github.com/d3/d3-timer#api-reference)
    — `d3.timeout`
    — Efficient animation queueing

## **License**
MIT © Leon van Zijl
