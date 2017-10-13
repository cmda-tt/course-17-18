# Filtering and Sorting a Bubble Chart
A bubble chart that display [Flare](http://flare.prefuse.org/) class hierarchy.

![preview](https://github.com/levizimmerman/course-17-18/blob/interaction/site/class-4-interaction/levizimmerman/preview.png?raw=true)

## Background
In this exercise I am going to add sort and filter functions to a existing [Bubble Chart](https://bl.ocks.org/mbostock/4063269). The functions will map out as follows:
* Filtering bubbles by toggling filters within the legend.
* Filtering bubbles by clicking on the bubbles themself.
* Sorting bubbles by sorting on their nummeric value (ascending and descending).

## Data
```csv
id,value
flare,
flare.analytics,
flare.analytics.cluster,
flare.analytics.cluster.AgglomerativeCluster,3938
flare.analytics.cluster.CommunityStructure,3812
flare.analytics.cluster.HierarchicalCluster,6714
```
* `ID` - String to identify the value, hierarchy is defined by the dots in the string.
* `Value` - Nummeric value.

## Features

### D3
* `.csv()` - Loads a CSV into D3.
* `.hierarchy()` - Creates hierachial data based on data.
* `.selectAll()` - Select all element based on selector.
* `.pack()` - Creates pack layout for circles.
* `.leaves()` - All items of a pack layout.
* `.exit()` - Exit element when data point is not available.
* `.transition()` - Adds transition to element.
* `.delay()` - Adds delay to transition of an element.
* `.enter()` - Creates an element for datapoint if is new.
* `.attr()` - Select or changes an attribute of an element.
* `.on()` - Adds event listener to element.
* `.append()` - Adds element to element.
* `.text()` - Adds or gets text to or from an element.
* `.classed()` - Toggles class of an element.

### Javascript
* `.indexOf()` - Get indexOf selector within a string or array.
* `.lastIndexOf()` - Get the index of last occurrence of selector within a string or array.
* `.sort()` - Sorts an array.
* `.slice()` - Takes a slice of array based on start and end index values.
* `.push()` - Adds array element to an array.
* `.splice()` - Removes array element and overwrites array with new value.

## Interactivity
### Filtering
The Bubble Chart can be filtered by clicking on the legend items. In this way you can add and remove bubbles that are connected to a package. 

```javascript
function togglePackage(data) {
  var item = d3.select(this);
  // If legend item active then toggle to inactive state else toggle to active state
  if (item.classed('active')) {
    // Remove active classname from legend item
    item.classed('active', false);
    // Remove package filter from array of packages using spice method to overwrite the packages array variable
    packages.splice(packages.indexOf(item.attr('data-package')), 1);
  } else {
    // Add active classname to selected legend item
    item.classed('active', true);
    // Add filter package to array of packages
    packages.push(item.attr('data-package'));
  }
  // Create instance of the bubble chart
  new BubbleChart(file);
}
```

`packages` is an array in the global scope. So changing the array and then creating a new instance of the bubble chart will cause a filter. Because when the drawing of the bubble chart start, there is a check which packages are selected and only those packages are included in the Bubble Chart.

So clicking on a Bubble and showing only bubbles that are connected to the same package can be done in this way:
```javascript
function handleClickCircle(data, index) {
  // Overwrites packages array with the single package filter of selected circle
  packages = [data.package];
  // Create new instance of the bubble chart
  new BubbleChart(file);
  // Force mouse leave event to remove hover state
  handleCircleMouseLeave(data, index);
}
```

The global packages array is overwritten with the single package value. So within the Bubble Chart instance there is this filtering done before joining the data to the elements:

```javascript
// If packages array is filled check which packages are selected
      var isInPackages = packages.indexOf(getPackage(data.id)) === -1 ? false : true;
      // Add data when package is found in packages array
      if (isInPackages) {
        data.value = +data.value;
        if (data.value) return data;
      }
```

### Sorting
Sorting is possible by clicking on the sorting button on top of the legend. There are two ways to sort: ascending and descending. By clicking on the sorting button a global variable called `sort` is overwritten with the new value. After the overwrite a new instance of the Bubble Chart is created.

```javascript
function handleSort() {
  // Set global variable hasSorted to true
  hasSorted = true;
  // Switch between 'ASC' and 'DESC' sorting
  sort = sort === 'DESC' ? 'ASC' : 'DESC';
  // Set text of button according to the new sort variable value
  var text = sort === 'DESC' ? 'High to low' : 'Low to high';
  this.textContent = text;
  // Create new instance of the BubbleChart
  new BubbleChart(file);
}
```

Within the Bubble Chart instance there is a sort function before joining the data to the elements. It looks like this:
```javascript
// Apply sorting using the sort variable (can be 'ASC' or 'DESC')
    classes.sort(function(current, next) {
      return sort === 'ASC' ? current.value - next.value : next.value - current.value;
    });
```

## License
Released under the [GNU General Public License, version 3](https://opensource.org/licenses/GPL-3.0).
