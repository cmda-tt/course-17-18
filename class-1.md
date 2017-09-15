<!--lint disable no-html-->

# Class 1

> 🤔 How did we get here and where are we going

## Table of Contents

*   [Inspiration](#inspiration)
*   [Synopsis](#synopsis)
*   [Schedule](#schedule)
*   [Assignments](#assignments)
    *   [Playing with SVG](#playing-with-svg)
    *   [Loading data](#loading-data)
    *   [Basic visualisations](#basic-visualisations)

## Inspiration

[![][inspiration-cover]][inspiration-link]

> All 9,866,539 buildings in the Netherlands shaded according to year of
> construction by [**@bertspaan**][inspiration-author].

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
*   [Basic visualisations][basic] (**homework**)

### Playing with SVG

[![][play-cover]][play-link]

> Example outcome of this assignment by [**@ju5tu5**](https://github.com/ju5tu5).

In this assignment you’ll learn the basics of SVG.

#### Tips

*   [MDN’s SVG documentation](https://developer.mozilla.org/en-US/docs/Web/SVG)
*   [Examples found in the slides](https://cmda-fe3.github.io/course-17-18/class-1/)
*   [Bugs?](readme.md#bugs)

#### Step A

If you haven’t already, [sign up for GitHub and install a text
editor][materials].

#### Step B

Create a file, `handle.svg` (where `handle` is your GitHub handle, so in my
case it would be `wooorm.svg`), and copy-paste the following document into it.

> 💁 Update the `<title>` element in the file with your handle too.

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

#### Step C

Let’s make art!  Open the file created in **step B** in your text editor **and**
browser.  Now, perform the following substeps.

> 💁 The code contains a script to check how you’re doing.  Open your console
> to see how you’re progressing.

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

#### Step D

Done with **step C**?  Awesome!  You’re a true SVG artist 👩‍🎨

For this step, we’re now going to add your [work to the website][g-play].

1.  First, from your SVG file, remove the `<script>` element.  We don’t need it
    anymore
2.  To make changes, you need to [Fork a repo][fork].  Navigate to our course
    repository on GitHub,
    [`cmda-fe3/course-17-18`][repo], and in the top-right corner of the page
    click **Fork**
3.  On your newly forked project, still on the GitHub website, browse to the
    `site/class-1-play` directory, and click **Upload Files** in the top-right
4.  Now, upload the SVG file you made in **step B**.
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

All done!  Our [Continuous Integration][ci] and one of our lecturers will review
your code.  We’ll request changes if your code is not yet complete, or [merge][]
your PR and include it in the [gallery][g-play].

### Loading data

In this assignment you’ll learn the basics of different commonly used
data formats.  We’ll cover JSON and CSV.

#### Tips

*   [`d3-request`](https://github.com/d3/d3/blob/master/API.md#requests-d3-request)
*   [RFC 4180](https://tools.ietf.org/html/rfc4180)
    — CSV spec
*   [ECMA 404](http://www.ecma-international.org/publications/standards/Ecma-404.htm)
    — JSON spec
*   [Examples found in the slides](https://cmda-fe3.github.io/course-17-18/class-1/)
*   [Bugs?](readme.md#bugs)

#### Step A

Before touching any code, let’s create a dataset.  It’ll be about food, great!
🥖🧀

Create a directory, named after your GitHub handle (for me that would be
`wooorm`).

Try and remember what you had for dinner the last three days.  For me, that’s:

| Day                  | Dinner            |
| -------------------- | ----------------- |
| Today                | Paneng Nua        |
| Yesterday            | Goat Cheese Salad |
| Day before yesterday | Nua Pad Ped       |

> 💁 Add more data if you feel like it and can remember that far back!

Write your dinners down in a file, `dinners.txt`, to your directory.

> 💁 Feel free to use Dutch, English, or any language of your choosing.
> Also: any labels are fine, this is just for you.

Words like today and yesterday make a lot of sense for humans.  For computers,
it makes more sense to use absolute dates in a standardised format like
YYYY-MM-DD.  Reformat your data to include absolute dates.  For me, that’s:

| Day        | Dinner            |
| ---------- | ----------------- |
| 2017-09-12 | Paneng Nua        |
| 2017-09-11 | Goat Cheese Salad |
| 2017-09-10 | Nua Pad Ped       |

#### Step B

From your dinners, create a [CSV][] file containing the same information:
an absolute date of the dinner and what you had for dinner.  Save the file as
`index.csv` in your directory.

#### Step C

Now do the same for [JSON][].  Save the file as `index.json` in your directory.

#### Step D

Create an `index.html` file in your directory with the following content:

> 💁 Update the `<title>` element in the file with your handle.

<details>
<summary><code>index.html</code></summary>

```html
<!doctype html>
<meta charset=utf8>
<!--Update the title with your handle:-->
<title>@handle</title>
<meta content=width=device-width,initial-scale=1 name=viewport>

<!--Link to d3 here:-->

<!--Keep this script here for now:-->
<script src=https://cmda-fe3.github.io/course-17-18/check-class-1-load.js></script>

<h1>Dinners</h1>

<!--Add your code in this script:-->
<script></script>
```

</details>

#### Step E

Open up your terminal and go to the directory created in **step A**.  On macOS,
you can type `cd·` (where `·` is a space) and drag the directory in question to
your terminal and finally press enter, to go there.

Then, create a [simple server][server] from your directory.  You can probably
do that with:

```sh
python -m SimpleHTTPServer 8000
```

This exposes your files to your browser on `localhost:8000`.  Open this URL
in your browser.

If that doesn’t work, see the aforementioned link on how to run a simple server
on your system.

When done open up your browser and navigate to `localhost:8000`.  This should
show a message suggesting you to open your console.

> 💁 Done with the server?  Enter <kbd>CTRL+C</kbd> in your terminal to shut it
> down.

#### Step F

Now, we’re going to add d3 to the HTML.  Add a `<script>` element pointing
to d3’s servers: `d3js.org`.  See [`d3js.org`][d3] on how to link directly
to the latest release.

> 💁 The code contains a script to check how you’re doing.  Open your console
> to see how you’re progressing.

#### Step G

In this step we’re going to load the JSON and CSV created in **step B** and
**step C**.  Use `d3.json` and `d3.csv` to load those files respectively.

See [tips][] for more info.

In callback functions passed to `d3.json` and `d3.csv`, print the loaded data
to the console with `console.log`.

Make sure both are printed before continuing to **step H**.

#### Step H

Instead of just logging stuff to the console let’s render your data to the DOM.

I rendered `<h2>` elements with the origin of the data (JSON or CSV), then
`<h3>` elements with each date, followed by `<p>` elements with the name of
each dinner.

Feel free to use any other **semantic** markup.  You could use
[`<table>`][table]s, [`<details>`][details], [`<dl>`][dl], or something else?

> 💁 You probably need [`document.createElement`][dce] and [`textContent`][tc].
> Feel free to dig into d3, use jQuery, or something else to render stuff to
> the DOM.

#### Complete

<!-- TODO -->

### Basic visualisations

<!-- TODO -->

[inspiration-cover]: https://raw.githubusercontent.com/bertspaan/buildings/gh-pages/high-res/smaller/amsterdam.png

[inspiration-link]: http://code.waag.org/buildings/

[inspiration-author]: http://bertspaan.nl

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

[g-play]: https://cmda-fe3.github.io/course-17-18/class-1-play/

[ci]: https://travis-ci.org

[repo]: https://github.com/cmda-fe3/course-17-18

[fork]: https://help.github.com/articles/fork-a-repo/

[pr]: https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request

[merge]: https://help.github.com/articles/merging-a-pull-request/

[csv]: https://en.wikipedia.org/wiki/Comma-separated_values

[json]: http://json.org

[server]: https://gist.github.com/willurd/5720255

[tips]: #tips-1

[d3]: https://d3js.org

[table]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

[details]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details

[dl]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl

[dce]: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

[tc]: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

[play-cover]: https://cmda-fe3.github.io/course-17-18/class-1-play/ju5tu5.svg

[play-link]: https://cmda-fe3.github.io/course-17-18/class-1-play/
