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

Create a file, `handle.svg` (where `handle` is your GitHub handle, so in my
case it would be `wooorm.svg`), and copy-paste the following document into it.

> 💁 Update the `<title>` element in the file with your handle too.

<!--lint disable no-html-->

<details>
<summary><code>handle.svg</code></summary>

```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <!--Update the title with your handle-->
  <title>@handle</title>

  <!--Add stuff here-->

  <!-- NOTHING TO SEE HERE... MOVE ALONG!!! -->
  <script>// <![CDATA[
  var p = window.location.pathname
  var h = p.slice(p.lastIndexOf('/') + 1, p.lastIndexOf('.'))
  console.log('Hi @%s 👋', h)
  if (!document.querySelector('circle')) bug()
  if (h === 'handle') throw new Error('Rename this file to `your-github-handle.svg`!')
  if (document.querySelector('title').textContent === '@handle') throw new Error('Update your `<title>`!')
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
    ['line[stroke-width]', '4.5. `stroke-width` attribute on `<line>`'],
    ['line[stroke]', '4.6. `stroke` attribute on `<line>`'],
    ['polygon', '5.0. `<polygon>` element'],
    ['polygon[points]', '5.1. `points` attribute on `<polygon>`'],
    ['path', '6.0. `<path>` element'],
    ['path[d]', '6.1. `d` attribute on `<path>`'],
    ['text', '7.0. `<text>` element'],
    ['text[x]', '7.1. `x` attribute on `<text>`'],
    ['text[y]', '7.2. `y` attribute on `<text>`'],
    ['text:not(:empty)', '7.3. Content in `<text>` element'],
    ['g', '8.0. `<g>` element'],
    ['g[stroke]', '8.1. `stroke` attribute on `<g>`'],
    ['g[stroke-width]', '8.2. `stroke-width` attribute on `<g>`'],
    ['g > :nth-child(n+2)', '8.3. `<g>` element with at least two children'],
    [':root[viewBox]', '9.0. `viewBox` attribute on `<svg>`'],
    [':root[width]', '9.1. `width` attribute on `<svg>`'],
    [':root[height]', '9.2. `height` attribute on `<svg>`'],
    ['[fill]', '10.0. `fill` attribute on any element'],
    ['[font-family]', '10.1. `font-family` attribute on any element'],
    ['[font-size]', '10.2. `font-size` attribute on any element'],
    ['[opacity]', '10.3. `opacity` attribute on any element']
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
        return true
      }
      return false
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
editor **and** browser.  Now, perform the following steps.

> 💁 The code checks itself if it’s complete.  Open your console to see how
> you’re progressing.

1.  Add a `<circle>` element with `cx`, `cy`, and `r` attributes
2.  Open your console’s **elements tab** and inspect your `<circle>`.  Use the
    **tree pane** to edit the values for the `cy`, `cx`, and `r` attributes
3.  Add a `<rect>` element with `x`, `y`, `width`, and `height` attributes
4.  Add a `<line>` element with `x1`, `y1`, `x2`, `x2`, `stroke-width`, and
    `stroke` attributes
5.  Add a `<polygon>` element with a `points` attribute
6.  Add a `<path>` element with a `d` attribute
7.  Add a `<text>` element with `x` and `y` attributes, and add actual text
    to the element
8.  Add a `<g>` element with a `stroke` and `stroke-width` attribute around at
    least two of your previously added elements
9.  Add `viewBox`, `width`, and `height` attributes to your `<svg>` element
10. Add `fill`, `font-family`, `font-size`, and `opacity` attributes
    to any of the elements inside `<svg>`

> 💁 Feel free to add more elements and attributes.  The above are the minimum.

#### Step 4

Done with step 3?  Awesome!  You’re a true SVG artist 👩‍🎨

For this step, we’re now going to add your [work to the website][play-examples].

1.  First, from your SVG file, remove the `<script>` element.  We don’t need it
    anymore
2.  To make changes, you need to [Fork a repo][fork].  Navigate to our course
    repository on GitHub,
    [`cmda-fe3/course-17-18`][repo], and in the top-right corner of the page
    click **Fork**
3.  On your newly forked project, still on the GitHub website, browse to the
    `docs/class-1-play` directory, and click **Upload Files** in the top-right
4.  Now, upload the SVG file you made in **step 2**.
    For the commit message, use `Add @handle` (where `handle` is your GitHub
    handle, so in my case it would be `Add @wooorm`).
    Leave the commit description empty and keep `Commit directly to the master
    branch` turned on.
    When ready, click **Commit changes**
5.  Your changes are now on your fork and not yet on our website.  To suggest
    that your changes be applied to our website, create a [Pull Request][pr].
    On your forked repository, click **New pull request** on the left just
    above your files pane.
    Then, click the big green **Create pull request** button.
    Leave the comment empty and click **Create pull request** again

#### Complete

All done!  Congratulations.  One of our lecturers will review your pull request
and include it on the website later.

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

[play-examples]: https://cmda-fe3.github.io/course-17-18/class-1-play/

[repo]: https://github.com/cmda-fe3/course-17-18

[fork]: https://help.github.com/articles/fork-a-repo/

[pr]: https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request
