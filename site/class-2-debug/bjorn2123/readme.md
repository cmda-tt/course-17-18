# Explanation Debug

For this assignment I copied the files again. First of all i check my console for errors. 

The first error i fixed was at the line:
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;

i changed to:
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

The second error i fixed was at line:
d3.tsv('index.tsv', row, onload);

I changed it to:
d3.csv('index.csv', row, onload); because we are working with a csv file and not with a tsv file.

After that i upgraded to d3v4. and because i did that i did not make any more use of, for example, d3.scale.linear but now i work with d3.scaleLinear. Because of the upgrade i was no longer allowed to use the . but i use the Capitel of the first letter of the word after "scale".

## Preview

![preview](debug.png)

## License

MIT @ Björn Völkers


