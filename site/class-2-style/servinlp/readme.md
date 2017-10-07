### Style assignment
From minify to beautiful

Unminifying the HTML, CSS and JS to make things pretty.
(And make sure the files are complete...)

### Style choices
I personally have a very strict coding style which I try to enforce thanks to eslint.

This means that all my functions must have an enter after or before every `{}`, spaces with every `()`, no semicolons, always use template strings and use let only if necessary otherwise use const.

Indenting is always a tab. This I took over from [mr.doob code style].

```javascript
function a( b ) {

	const c = b + 1,
		d = c + 1

	let e = 0

	console.log( `Its: ${d}` )

	e = 5

	console.log( `Its: ${e}` )

}
```

[mr.doob code style]: https://github.com/mrdoob/three.js/wiki/Mr.doob%27s-Code-Style%E2%84%A2
