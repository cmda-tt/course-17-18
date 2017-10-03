# Debugging
Debugged version of the code found [here](https://github.com/cmda-fe3/course-17-18/blob/master/class-2.md#style).
## Background
[This](https://github.com/cmda-fe3/course-17-18/blob/master/class-2.md#style) code has mostly been rewritten to my own prefered way of writing code.
## Code in Depth
When declaring variables I always write the new variables on the next line with an indent. Also if more variables are define within the same scope the are defined in the same "var" block separating each new var with an enter. All the assigment operators are to be aligned with eachother.
```Javascript
var 
  foo     = 'string',
  bar     = 0,
  lrgVar  = []
```

There are no ; used within the code.
When appending new functionalities or elements indent for each layer. Blocks are separated by enters also, all variables and functions are to be camelcased
```Javascript
function doStuff(){
  var
    foo = this
    bar = document.createElement('ul')
    baz = document.createElement('li')
    
   this.appendChild(bar)
    bar.appendChild(baz)
}

function doOtherStuff(){
  //Another one
}
```
## License 
GNU V3 2017 Maikel Sleebos
