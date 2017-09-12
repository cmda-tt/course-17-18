# Class 1

> 🤔 How did we get here and where are we going

## Table of Contents

*   [Synopsis](#synopsis)
*   [Schedule](#schedule)
*   [Assignments](#assignments)
    *   [Playing with SVG](#playing-with-svg)
    *   [Loading data](#loading-data)
    *   [Basic visualisations](#basic-visualisations)

## Synopsis

*   **Date ID 1**: 25-09
*   **Date ID 2**: 26-09
*   **Date ID 3**: 25-09
*   [**Slides**][slides]
*   [**Examples**][examples]

## Schedule

*   Bootcamp HTML, CSS, and JS
*   Intro to SVG and Canvas ([**subgoal 1**][s1])
*   [Playing with SVG][playing] (**practice**)
*   Data formats ([**subgoal 2**][s2])
*   Hello d3
*   Intro to GitHub
*   [Loading data][loading] (**practice**)

## Assignments

Assignments due before [class 2][c2]:

*   [Playing with SVG][playing] (**practice**)
*   [Loading Data][loading] (**practice**)
*   [Resources to refresh your memory][refresh]
    — Browse the list and pick anything of interest, choose your own adventure
    style
*   [Basic visualisations][basic]

### Playing with SVG

In this assignment you’ll learn to understand SVG.

#### Tips

*   [MDN’s SVG documentation](https://developer.mozilla.org/en-US/docs/Web/SVG)
*   [Examples found in the slides](https://cmda-fe3.github.io/course-17-18/class-1/)
*   [Bugs?](readme.md#bugs)

#### Step 1

If you haven’t already, [sign up for GitHub and install a text
editor][materials].

#### Step 2

Create a `handle.svg` (where `handle` is your GitHub handle, so in my case it
would be `wooorm.svg`) file with the following contents:

<!--lint disable no-html-->

<details>
<summary><code>handle.svg</code></summary>

```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <!--Add stuff here-->

  <!-- NOTHING TO SEE HERE... MOVE ALONG!!! -->
  <script>// <![CDATA[
  var p = window.location.pathname
  var h = p.slice(p.lastIndexOf('/') + 1, p.lastIndexOf('.'))
  if (h === 'handle') throw new Error('Rename this file to `your-github-handle.svg`!')
  console.log('Hi @%s 👋', h)
  if (!document.querySelector('circle')) bug()
  var ok = ![
    ['circle', '1.0. `<circle>` element'],
    ['circle[cx]', '1.1. `cx` attribute on `<circle>`'],
    ['circle[cy]', '1.2. `cy` attribute on `<circle>`'],
    ['circle[r]', '1.3. `r` attribute on `<circle>`'],
    [8001, 'See the assignment description for an extra question!'],
    ['rect', '3.0. `<rect>` element'],
    ['rect[x]', '3.1. `x` attribute on `<rect>`'],
    ['rect[y]', '3.2. `y` attribute on `<rect>`'],
    ['rect[width]', '3.3. `width` attribute on `<rect>`'],
    ['rect[height]', '3.4. `height` attribute on `<rect>`'],
    ['line', '4.0. `<line>` element'],
    ['line[x1]', '4.1. `x1` attribute on `<line>`'],
    ['line[y1]', '4.2. `y1` attribute on `<line>`'],
    ['line[x2]', '4.3. `x2` attribute on `<line>`'],
    ['line[y2]', '4.4. `y2` attribute on `<line>`'],
    ['polygon', '5.0. `<polygon>` element'],
    ['polygon[points]', '5.1. `points` attribute on `<polygon>`'],
    ['path', '6.0. `<path>` element'],
    ['path[d]', '6.1. `d` attribute on `<path>`'],
    ['text', '7.0. `<text>` element'],
    ['text[x]', '7.1. `x` attribute on `<text>`'],
    ['text[y]', '7.2. `y` attribute on `<text>`'],
    ['g', '8.0. `<g>` element'],
    ['g[stroke]', '8.1. `stroke` attribute on `<g>`'],
    ['g[stroke-width]', '8.2. `stroke-width` attribute on `<g>`'],
    ['g > :nth-child(n+2)', '8.3. `<g>` element with at least two children'],
    [':root[width]', '9.0. `width` attribute on `<svg>`'],
    [':root[height]', '9.1. `height` attribute on `<svg>`'],
    [':root[viewBox]', '9.2. `viewBox` attribute on `<svg>`'],
    ['[color]', '10.0. `color` attribute on any element'],
    ['[fill]', '10.1. `fill` attribute on any element'],
    ['[font-family]', '10.2. `font-family` attribute on any element'],
    ['[font-size]', '10.3. `font-size` attribute on any element'],
    ['[opacity]', '10.4. `opacity` attribute on any element']
  ].some(assert)
  if (ok) {
    console.log([
      'Well done @%s! 🎉 Assignment complete!',
      'Go back to the class page on GitHub to see what happens next'
    ].join('\n'), h)
  }
  function assert(check) {
    var key = check[0]
    if (typeof key === 'number') {
      if (!(key in localStorage)) {
        console.info(check[1])
        localStorage[key] = true
      }
      return true;
    }
    var exists = Boolean(document.querySelector(check[0]))
    console.assert(exists, check[1])
    if (!exists) {
      console.warn([
        'Hmm, not there yet! 🤔',
        'Go back and fix the above problem in your file',
        'and when done hit refresh here to check again!'
      ].join('\n'))
      return true
    }
  }
  function bug() {
    var t = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    t.textContent = 'Open your Console'
    t.setAttribute('fill', 'red')
    t.setAttribute('x', '20')
    t.setAttribute('y', '55')
    t.setAttribute('font-family', 'Comic Sans MS')
    t.setAttribute('font-size', '35')
    document.documentElement.appendChild(t)
  }
  // ]]></script>
</svg>
```

</details>

<!--lint enable no-html-->

#### Step 3

Let’s make art!  Open the file created in the previous step in your text
editor and browser.  Now, perform the following steps.

> 💁 The code checks itself if it’s complete.  Open your console to see how
> you’re progressing.

1.  Add a `<circle>` element with `cx`, `cy`, and `r` attributes
2.  Open your console’s **elements tab** and inspect your `<circle>`.
    Use the **tree pane and style pane** to edit the values for the `cy`,
    `cx`, and `r` attributes
3.  Add a `<rect>` element with `x`, `y`, `width`, and `height` attributes
4.  Add a `<line>` element with `x1`, `y1`, `x2`, and `x2` attributes
5.  Add a `<polygon>` element with a `points` attribute
6.  Add a `<path>` element with a `d` attribute
7.  Add a `<text>` element with `x` and `y` attributes
8.  Add a `<g>` element with a `stroke` and `stroke-width` attribute around at
    least two of your previously added elements
9.  Add `width`, `height`, and `viewBox` attributes to your `<svg>` element
10. Add `color`, `fill`, `font-family`, `font-size`, and `opacity` attributes
    to any of the elements inside `<svg>`

> 💁 feel free to add more elements and attributes.  The above are the minimum.

#### Step 4

<!-- TODO -->

### Loading data

<!-- TODO -->

### Basic visualisations

<!-- TODO -->

[c2]: class-2.md

[s1]: https://github.com/cmda-fe3/course-17-18#subgoal-1

[s2]: https://github.com/cmda-fe3/course-17-18#subgoal-2

[refresh]: readme.md#resources-to-refresh-your-memory

[slides]: https://docs.google.com/presentation/d/1xuF1DS8ts7KcvhR-UCJfL0gGiUqXOlfscv9cFCL_3Fk

[examples]: https://cmda-fe3.github.io/course-17-18/class-1/

[playing]: #playing-with-svg

[loading]: #loading-data

[basic]: #basic-visualisations

[materials]: readme.md#materials
