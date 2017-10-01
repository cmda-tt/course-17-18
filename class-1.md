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
*   [Bar chart](#bar-chart)

## Inspiration

[![][inspiration-cover]][inspiration-link]

> All 9,866,539 buildings in the Netherlands shaded according to year of
> construction by [**@bertspaan**][inspiration-author].

## Synopsis

*   **Date**: 25-09 (ID 1 and ID 3) or 26-09 (ID 2)
*   [**Slides**][slides]
*   [**Examples**][examples]

## Schedule

*   Course outline
*   Bootcamp: HTML, CSS, and JS
*   SVG and Canvas ([**subgoal 1**][s1])
*   [Playing with SVG][play] (**practice**)
*   d3
*   GitHub
*   Data formats ([**subgoal 2**][s2])
*   [Loading data][load] (**practice**)

## Assignments

Submit your assignments by 7 a.m. the day of [class 2][c2].

*   [Playing with SVG][play] (**practice**)
*   [Loading Data][load] (**practice**)
*   [Bar chart][bar] (**homework**)
*   [Resources to refresh your memory][refresh] (**extra**※)

> ※ Although not required we expect students who lack in knowledge to catch
> up on their own.

## Playing with SVG

[![][play-cover]][play-link]

> Example outcome of this assignment by [**@ju5tu5**](https://github.com/ju5tu5).

In this assignment you’ll learn the basics of SVG.

### Synopsis

*   **Practice**
*   **Due**: 7 a.m. the day of [class 2][c2]
*   **Results**: [Gallery][play-gallery]

### Tips

*   [MDN’s SVG documentation](https://developer.mozilla.org/en-US/docs/Web/SVG)
*   [Examples found in the slides](https://cmda-fe3.github.io/course-17-18/class-1/)
*   [Celtic Knotwork](http://celtic-knotwork.online)
*   [Chernoff Fish](http://meagher.co/chernoff-fish/)
*   [Bugs?](readme.md#bugs)

### <a name="class-1-play-a"></a> Step A

If you haven’t already, [sign up for GitHub and install a text
editor][materials].

### <a name="class-1-play-b"></a> Step B

Create a file on your computer, `username.svg` (where `username` is your GitHub
username, so in my case it would be `wooorm.svg`), and copy-paste the following
document into it.

> 💁 Update the `<title>` element in the file with your username too.

<details>
<summary><code>username.svg</code></summary>

```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <!--Update the title with your username-->
  <title>@username</title>

  <!--Add stuff here-->

  <!-- NOTHING TO SEE HERE... MOVE ALONG!!! -->
  <script>// <![CDATA[
  var p = window.location.pathname
  var h = p.slice(p.lastIndexOf('/') + 1, p.lastIndexOf('.'))
  console.log('Hi @%s 👋', h)
  if (!document.querySelector('circle')) bug()
  if (h === 'username') throw new Error('Rename this file to `your-github-username.svg`!')
  if (h === 'your-github-username') throw new Error('No no, your *actual* GitHub username!')
  if (document.querySelector('title').textContent === '@username') throw new Error('Update your `<title>`!')
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

### <a name="class-1-play-c"></a> Step C

Let’s make art!  Open the file created in [**step B**][c1pb] in your text editor
**and** browser.  Now, perform the following substeps.

> 💁 The code contains a script to check how you’re doing.  Open your console
> to see how you’re progressing.

1.  Add a `<circle>` element with `cx`, `cy`, and `r` attributes
2.  Open your console’s **elements tab** and inspect your `<circle>`.  Use the
    **tree pane** to edit the values for the `cy`, `cx`, and `r` attributes
3.  Add a `<rect>` element with `x`, `y`, `width`, and `height` attributes
4.  Add a `<line>` element with `x1`, `y1`, `x2`, `y2`, `stroke-width`, and
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

### <a name="class-1-play-d"></a> Step D

Done with [**step C**][c1pc]?  Awesome!  You’re a true SVG artist 👩‍🎨

For this step, we’re going to hand your work in.  This will [add your work to
the website][play-gallery].

1.  First remove the `<script>` element from your SVG file (including the
    CDATA inside it).
    We don’t need it anymore
2.  You can’t just change our website.
    You have to propose changes.
    On GitHub, that’s called a Pull Request.
    First, we’re going to [Fork a repo][fork].
    Navigate to our course repository on GitHub,
    [`cmda-fe3/course-17-18`][repo], and in the top-right corner of the page
    click **Fork**
3.  <a name="class-1-play-d-3"></a>
    Navigate to the directory `site/class-1-play` on GitHub.
    Follow the guide [Adding a file to a repository][upload] to upload the SVG
    file you made in [**step B**][c1pb].
    For the commit message, use `Add @username` (in my case `Add @wooorm`).
    Leave the commit description empty.
    Select **Create a new branch** and use the name `play`.
    When ready, click **Commit changes**
4.  Your changes are now on your fork and not yet handed in.
    To suggest that your changes be applied to our website, create a
    [Pull Request][pr].
    You will probably see a notification with a big green button,
    **Compare & pull request**.
    Otherwise, click **New pull request** on the left just above your files
    pane and make sure that the **compare** select is on **play**.
    Leave the comment empty and click **Create pull request**.

### Complete

All done!  Our [Continuous Integration][ci] and one of our lecturers will review
your code.  We’ll request changes if your code is not yet complete or [merge][]
your PR and include it in the [gallery][play-gallery].

## Loading data

[![][load-cover]][load-cover-source]

> Apple pie from above by [**@anniespratt**][load-cover-author].

In this assignment you’ll learn about JSON and CSV, two commonly used data
formats.  Additionally, you’ll learn to use d3 to request files.

### Synopsis

*   **Practice**
*   **Due**: 7 a.m. the day of [class 2][c2]
*   **Results**: [Gallery][load-gallery]

### Tips

*   [`d3-request`](https://github.com/d3/d3/blob/master/API.md#requests-d3-request)
*   [RFC 4180](https://tools.ietf.org/html/rfc4180)
    — CSV spec
*   [ECMA 404](https://www.ecma-international.org/publications/standards/Ecma-404.htm)
    — JSON spec
*   [Examples found in the slides](https://cmda-fe3.github.io/course-17-18/class-1/)
*   [Bugs?](readme.md#bugs)

### <a name="class-1-load-a"></a> Step A

Create a directory on your computer named after your GitHub username (in my case
`wooorm`).

Create a text file `dinners.txt` in your directory and open it.

As you may have guessed, this assignment is about food!  Great!  🥖🧀

Let’s create a dataset.  Add what you had for dinner the last three days to
`dinner.txt`.  For me, that’s:

| Day                  | Dinner            |
| -------------------- | ----------------- |
| Today                | Paneng Nua        |
| Yesterday            | Goat Cheese Salad |
| Day before yesterday | Nua Pad Ped       |

> 💁 Add more data if you feel like it and can remember that far back!
>
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

### <a name="class-1-load-b"></a> Step B

Create a file, `index.csv`, in your directory and open it.
Fill it with the same data as `dinners.txt` but now structured in the [CSV][]
format: an absolute date of the dinner and what you had for dinner.

### <a name="class-1-load-c"></a> Step C

Do the same with `index.json` in the [JSON][] format.

### <a name="class-1-load-d"></a> Step D

Create a file, `index.html`, and copy-paste the following document into it.

> 💁 Update the `<title>` element in the file with your username.

<details>
<summary><code>index.html</code></summary>

```html
<!doctype html>
<meta charset=utf8>
<!--Update the title with your username:-->
<title>@username</title>
<meta content=width=device-width,initial-scale=1 name=viewport>

<!--Link to d3 here:-->

<!--Keep this script here for now:-->
<script src=https://cmda-fe3.github.io/course-17-18/check-class-1-load.js></script>

<h1>Dinners</h1>

<!--Add your code in this script:-->
<script></script>
```

</details>

### <a name="class-1-load-e"></a> Step E

Open up your terminal and go to the directory created in [**step A**][c1la].
On macOS, you can type `cd` and a space and drag the directory in
question to your terminal and finally press enter, to go there.

Then, start a [simple server][server] in your directory.  You can probably
do that with:

```sh
python -m SimpleHTTPServer 8000
```

This exposes your files to your browser on `localhost:8000`.  Open this URL
in your browser.

> 💁 Not working?  Have you pressed enter?

If you see an error saying that `python` isn’t found, see the aforementioned
link on how to run a simple server on your system.

When done open up your browser and navigate to `localhost:8000`.  This should
show a message suggesting you to open your console.

> 💁 Done with the server?  Enter <kbd>⌃-C</kbd> (<kbd>Control-C</kbd>) in your
> terminal to shut it down.

### <a name="class-1-load-f"></a> Step F

Now, we’re going to add d3 to the HTML.  Add a `<script>` element pointing
to d3’s servers: `d3js.org`.  See [`d3js.org`][d3] on how to link directly
to the latest release.

> 💁 The code contains a script to check how you’re doing.  Open your console
> to see how you’re progressing.

### <a name="class-1-load-g"></a> Step G

In this step we’re going to load the JSON and CSV created in [**step B**][c1lb]
and [**step C**][c1lc].  Use `d3.json` and `d3.csv` to load those files
respectively.

See [tips][] for more info.

In callback functions passed to `d3.json` and `d3.csv`, print the loaded data
to the console with `console.log`.

Make sure both are printed before continuing to [**step H**][c1lh].

### <a name="class-1-load-h"></a> Step H

Instead of just logging stuff to the console let’s render your data to the DOM.

I rendered `<h2>` elements with the origin of the data (JSON or CSV), then
`<h3>` elements with each date, followed by `<p>` elements with the name of
each dinner.

Feel free to use any other **semantic** markup.  You could use
[`<table>`][table]s, [`<details>`][details], [`<dl>`][dl], or something else?

You may create a file, `index.css`, to style your HTML.

> 💁 You probably need [`document.createElement`][dce] and [`textContent`][tc].
> Feel free to dig into d3, use jQuery, or something else to render stuff to
> the DOM.

### <a name="class-1-load-i"></a> Step I

In this step, we’re going to hand your work in.  This will [add your work to
the website][load-gallery].

1.  First remove the `<script>` element referencing `check-class-1-load.js`,
    all `console.log` calls, and your HTML comments from `index.html`.
    We don’t need them anymore
2.  Go to your fork of `course-17-18` and create a new branch.
    First, make sure to switch to your `master` branch in the **Branch**
    select (just above your files to the left) if it’s not already selected.
    Then, click the **Branch** select again, and type in `load`.
    Finally, click **Create branch: load**
3.  Navigate to the directory `site/class-1-load` on GitHub
4.  <a name="class-1-load-i-4"></a>
    Create a new file by clicking on **Create new file**.
    In the **Name your file…** input, type `username/readme.md` (in my case
    `wooorm/readme.md`).
    In the **Edit your file…** area, write `# Hello World`.  What you’re writing
    is called markdown and we’ll cover it in [**class 2**][c2].
    In the commit message at the bottom, use `Add readme.md for @username` (in
    my case `Add readme.md for @wooorm`).
    Keep **Commit directly to the load branch** selected
5.  Now, follow [**substep 3**][c1pd3] from [step D][c1pd] of the [Playing with
    SVG][play] assignment to upload the **files in your directory on your
    computer** to the newly created directory on GitHub on the `load` branch.
    In the commit message at the bottom, use `Add files for @username` (in my
    case `Add files for @wooorm`).
    Keep **Commit directly to the load branch** selected
6.  <a name="class-1-load-i-6"></a>
    Create a pull request and use `Add @username` (in my case `Add @wooorm`)
    for the title

### Complete

All done!  Our [Continuous Integration][ci] and one of our lecturers will review
your code.  We’ll request changes if your code is not yet complete or [merge][]
your PR and include it in the [gallery][load-gallery].

## Bar chart

[![][bar-cover]][bar-link]

> Example outcome of this assignment by [**@wooorm**](https://github.com/wooorm).

In this assignment you’ll learn how charts made with d3 work by inspecting and
modifying an existing bar chart.

### Synopsis

*   **Homework**
*   **Due**: 7 a.m. the day of [class 2][c2]
*   **Results**: [Gallery][bar-gallery]

### Description

The project you’ll hand in will be similar to the one from [Loading data][load]
but this time will render a bar chart in SVG.

1.  Pick a **bar chart** from [d3’s example gallery][d3-examples] (tip: see the
    [Basic charts][basic-charts] section)
2.  Copy-paste the files over to your own computer and get the chart working
    (tip: you may need to start a server, see [step E][c1le] of [Loading
    data][load] on how to do that)
3.  Add a `<title>` element, or replace the one already there, with your GitHub
    username: `@username` (in my case `@wooorm`)
4.  Move the CSS and JS from the HTML into their own files
5.  Add citations to the work your chart is based on in the HTML and JS
6.  Try and change all values to get to understand the code (refreshing often
    to see if things break, in which case <kbd>⌘-Z</kbd> (<kbd>Command-Z</kbd>)
    is your best friend)
7.  Make something pretty.  Add your own CSS, swap in new data, use different
    labels.  Make this graph your own
8.  Translate the JavaScript to Dutch or English in inline comments.  Link to
    the d3 docs where needed.  Document everything of importance in your own
    words
9.  Upload your files to `site/class-1-bar` (tip: see [**substep 4**][c1li4]
    through [**substep 6**][c1li6] from [step I][c1li] of the
    [Loading data][load] assignment, but this time use a branch `bar`)

### Complete

All done!  Our [Continuous Integration][ci] and one of our lecturers will review
your code.  We’ll request changes if your code is not yet complete or [merge][]
your PR and include it in the [gallery][bar-gallery].

[inspiration-cover]: images/buildings.jpg

[inspiration-link]: http://code.waag.org/buildings/

[inspiration-author]: http://bertspaan.nl

[play-cover]: https://cmda-fe3.github.io/course-17-18/class-1-play/ju5tu5.svg

[play-link]: https://cmda-fe3.github.io/course-17-18/class-1-play/ju5tu5.svg

[load-cover]: images/pie.jpg

[load-cover-source]: https://unsplash.com/photos/5XZ2SyTOyvQ

[load-cover-author]: https://unsplash.com/@anniespratt

[bar-cover]: https://cmda-fe3.github.io/course-17-18/class-1-bar/wooorm/preview.png

[bar-link]: https://cmda-fe3.github.io/course-17-18/class-1-bar/wooorm/

[play]: #playing-with-svg

[load]: #loading-data

[bar]: #bar-chart

[tips]: #tips-1

[c1pb]: #class-1-play-b

[c1pc]: #class-1-play-c

[c1pd]: #class-1-play-d

[c1pd3]: #class-1-play-d-3

[c1la]: #class-1-load-a

[c1lb]: #class-1-load-b

[c1lc]: #class-1-load-c

[c1le]: #class-1-load-e

[c1lh]: #class-1-load-h

[c1li]: #class-1-load-i

[c1li4]: #class-1-load-i-4

[c1li6]: #class-1-load-i-6

[s1]: readme.md#subgoal-1

[s2]: readme.md#subgoal-2

[materials]: readme.md#materials

[refresh]: readme.md#resources-to-refresh-your-memory

[c2]: class-2.md

[slides]: https://docs.google.com/presentation/d/1xuF1DS8ts7KcvhR-UCJfL0gGiUqXOlfscv9cFCL_3Fk

[repo]: https://github.com/cmda-fe3/course-17-18

[examples]: https://cmda-fe3.github.io/course-17-18/class-1/

[play-gallery]: https://cmda-fe3.github.io/course-17-18/class-1-play/

[bar-gallery]: https://cmda-fe3.github.io/course-17-18/class-1-bar/

[load-gallery]: https://cmda-fe3.github.io/course-17-18/class-1-load/

[ci]: https://travis-ci.org

[fork]: https://help.github.com/articles/fork-a-repo/

[upload]: https://help.github.com/articles/adding-a-file-to-a-repository/

[pr]: https://help.github.com/articles/creating-a-pull-request-from-a-fork/

[merge]: https://help.github.com/articles/merging-a-pull-request/

[csv]: https://en.wikipedia.org/wiki/Comma-separated_values

[json]: http://json.org

[server]: https://gist.github.com/willurd/5720255

[d3]: https://d3js.org

[table]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

[details]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details

[dl]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl

[dce]: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

[tc]: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

[d3-examples]: https://github.com/d3/d3/wiki/Gallery

[basic-charts]: https://github.com/d3/d3/wiki/Gallery#basic-charts
