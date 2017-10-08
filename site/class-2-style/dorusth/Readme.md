# Style

A simple responsive donut chart visualising the populations of various age
groups with pretty colours based on a [`bl.ock`][block]
by [**@mbostock**][block-author] (GPL-3.0).

[![][cover]][url]

## Background

For this assignment we had to change the minified code to comprehensible code with a better structure.
You could choose your own style in which you would like to structure it.

## Style changes

#### CSS

For the css I structured it like i always structure my css.
open a selector on the first line with each declaration on a new line with one tab indent.
I also added a ";" to lines where it was missing.

For some of the color values there where values like "currentcolor" which seemd like scss variables, but because i wasn't sure if it should be changed to hex colors i left it the way it was.

```CSS
html {
	color: #000;
	background-color: currentcolor;
	max-width: 100%;
}
```

#### HTML
For the HTML I put al the elements on seperate lines with each nested element indented with one tab more than the parent.
I also added a ```</body>``` tag which was missing.

#### JS
I put al the functions together and indented the elements that were nested inside the functions.

I also put the variables at the top of the document for readability.


## License

GPL-3.0 © Titus Wormer
