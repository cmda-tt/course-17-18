<!--lint disable no-html no-heading-punctuation-->

# Class 2

> ```txt
> TypeError: undefined is not a function. (In 'undefined()', 'undefined' is undefined)
> ```

## Table of Contents

*   [Inspiration](#inspiration)
*   [Synopsis](#synopsis)
*   [Schedule](#schedule)
*   [Assignments](#assignments)
*   [Assessment](#assessment)
*   [Do you read me?!](#do-you-read-me)
*   [Style](#style)
*   [debugger;](#debugger)

## Inspiration

[![][inspiration-cover]][inspiration-link]

> Looking at all gold medal winners of the Olympics by
> [**@nbremer**][inspiration-author].

## Synopsis

*   **Date**: 02-10 (ID 1 and ID 3) or 04-10 (ID 2)
*   [**Slides**][slides]
*   [**Examples**][examples]

## Schedule

*   Markdown
    ([**subgoal 3**][s3])
*   Readme
    ([**subgoal 3**][s3] and [**subgoal 4**][s4])
*   GitHub
    ([**subgoal 3**][s3] and [**subgoal 4**][s4])
*   [Do you read me?!][readme]  (**practice**)
*   Debug and refactor
    ([**subgoal 5**][s5] and [**subgoal 6**][s6])
*   `d3@3` and `d3@4`
    ([**subgoal 5**][s5])
*   [`d3-scale`][d3-scale]
    ([**subgoal 7**][s7])
*   [Style][style] (**practice**)
*   [`debugger;`][debugger] (**practice**)

## Assignments

Submit your assignments by 7 a.m. the day of [class 3][c3].

*   [Do you read me?!][readme]  (**practice**)
*   [Style][style] (**practice**)
*   [`debugger;`][debugger] (**practice**)

See [class 1][c1a] for assignments due before this class.

## Assessment

Submit [assessment 1][a1] before the start of [class 3][c3].

## Do you read me?!

[![][readme-cover]][readme-cover-source]

> Trinity College Dublin by [**@zeak**][readme-cover-author].

### Synopsis

*   **Practice**
*   **Due**: 7 a.m. the day of [class 3][c3]
*   **Results**: [GitHub][readme-gallery]

### Tips

*   [Markdown Tutorial](https://www.markdowntutorial.com)
    (**Markdown**)
    — Learn how to use Markdown
*   [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
    (**Markdown**)
    — Quick reference and showcase
*   [Mastering Markdown](https://masteringmarkdown.com)
    (**Markdown**)
    — Mini series that will change how you write documentation
*   [Basic writing & formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
    (**Markdown** and **GitHub**)
    — Markdown specifically for GitHub
*   [Learn Git in 15 minutes](https://try.github.io)
    (**Git** and **GitHub**)
    — Interactive Git tutorial
*   [Learn Git Branching](http://learngitbranching.js.org)
    (**Git**)
    — Interactive Git branching tutorial
*   [Intro to GitHub](https://services.github.com/on-demand/intro-to-github/)
    (**Git** and **GitHub**)
    — Get started using GitHub in less than an hour
*   [GitHub Glossary](https://help.github.com/articles/github-glossary/)
    (**Git** and **GitHub**)
    — List of Git and GitHub specific terms
*   [Git Cheat Sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet/)
    (**Git**)
    — Reference sheet covering Git commands, features, and bash

### Description

> 💁 Before you start, add your [real name and a picture to your profile on
> GitHub][profile].  Open source is about real people after all.

For this assignment you’re going to add a readme to the project you handed in
for the [Bar chart][bar] assignment of [class 1][c1].

Create a `readme.md` file describing your project and include the following:

*   Short title
*   Short description
*   **Background** section with a longer description of why you did what you did
*   **Data** section describing the visualised data, its format, columns, and
    fields
*   **Features** section listing all d3 features used and linking to API docs
*   **License** section (tip: [`choosealicense.com`][cal]) in the form
    “[SPDX][] © First Second” (I often use “MIT © Titus Wormer”)

> 💁 The work you based your project on probably contains a license too.
> You cannot pick any license you’d want and disregard their license.
> Your license must be compatible with theirs.
> As a general rule of thumb: if you may create a derivative work (which is
> often true for free software licenses if your work is non-commercial) you
> can license your work under the same license as the original work.

Feel free to provide more useful information.

You may create a file, `preview.png`, to show a thumbnail of how your chart
looks.  You can link to it in the readme like so: `![Alt text](preview.png)`.

You can write this file directly on GitHub (tip: see [**substep 4**][c1li4]
from [step I][c1li] of the [Loading data][load] assignment) or write it in your
text editor and upload it when done (tip: see [**substep 3**][c1pd3] from
[step D][c1pd] of the [Playing with SVG][play] assignment).

> 💁 You probably need to sync your fork.  Unfortunately this cannot be done
> through the GitHub website.  You can either sync a fork [on the
> terminal][sync-fork] or [delete your fork][delete-repo] and fork again.

## Style

[![][style-cover]][style-cover-source]

> Elegant man with a laptop by [**@flenjoore**][style-cover-author].

In this assignment you’ll learn to refactor and reformat code.

### Synopsis

*   **Practice**
*   **Due**: 7 a.m. the day of [class 3][c3]
*   **Results**: [Gallery][style-gallery]

### Tips

*   [`prettier`](https://github.com/prettier/prettier)
    (**JavaScript**)
    — Opinionated code formatter
*   [`standard`](https://github.com/standard/standard)
    (**JavaScript**)
    — Standard style
*   [`xo`](https://github.com/sindresorhus/xo)
    (**JavaScript**)
    — Happiness style
*   [`eslint`](https://github.com/eslint/eslint)
    (**JavaScript**)
    — Fully pluggable style
*   [`stylelint`](https://github.com/stylelint/stylelint)
    (**CSS**)
    — Mighty, modern linter
*   [Code Guide](http://codeguide.co)
    (**HTML** and **CSS**)
    — Flexible, durable, and sustainable code standards

### Description

For this assignment you’re going to reformat code to make a donut chart in your
own style.  Feel free to use any of the [tips][tips-1] above to check or format
code.  Choose any coding style that makes sense to you.

1.  First, copy the files `index.csv`, `index.css`, `index.html`, and
    `index.js` from [`site/class-2/style`][style-starter] to your
    computer and get them working without changing any code yet
2.  Note that the CSS, HTML, and JS are minified: they’re great for computers,
    but not so much for humans
3.  Now, reformat `index.css`, `index.html`, and `index.js` to match your
    preferred style: something readable and usable by humans.  Use the quotes
    and white-space you like, pick good variable names, and reorder stuff where
    needed
4.  Update the `<title>` element with your GitHub username: `@username` (in my
    case `@wooorm`)
5.  When done, add a `readme.md` file similar to the one from
    [Do you readme?!][readme] that additionally lists what style choices you
    made

Hand in your reformatted code in a directory `username` (in my case `wooorm`) to
`site/class-2-style/` by creating a pull request from a branch `style`.
Include `index.csv`, `index.css`, `index.js`, `index.html`, `readme.md`, and
optionally a `preview.png` file.

## `debugger;`

[![][debug-cover]][debug-cover-source]

> Yellow Ducks by [**@andreuuuw**][debug-cover-author].

In this assignment you’ll learn to debug and upgrade code.

### Synopsis

*   **Practice**
*   **Due**: 7 a.m. the day of [class 3][c3]
*   **Results**: [Gallery][debug-gallery]

### Tips

*   [Rubber Duck Debugging](https://rubberduckdebugging.com)
    (**method**)
*   [How to debug small programs](https://ericlippert.com/2014/03/05/how-to-debug-small-programs/)
    (**article**)
*   [The Debugging Mindset](https://queue.acm.org/detail.cfm?id=3068754)
    (**article**)
*   [`d3/d3/CHANGES.md`](https://github.com/d3/d3/blob/master/CHANGES.md)
    (**documentation**)
*   [D3 V4 - What’s new?](https://iros.github.io/d3-v4-whats-new/)
    (**presentation**)
*   [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/)
    (**software**)
*   [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
    (**software**)
*   [Safari Developer Tools](https://developer.apple.com/safari/tools/)
    (**software**)

### Description

For this assignment you’re going to fix a broken scatter plot.  The HTML, CSS,
and JavaScript each contain several bugs.  The chart also uses `d3@3` instead
of `d3@4`.

1.  First, copy the files `index.csv`, `index.css`, `index.html`, and
    `index.js` from [`site/class-2/debug`][debug-starter] to your
    computer and start a simple server.  If everything went OK, you should see
    two errors in your web browser’s console about resources that failed to load
2.  Fix the errors you just found.  Then, fix the errors in the JavaScript and
    CSS.  Depending on your knowledge of JavaScript, errors, and d3, this
    may be _very hard_.  Feel free to ask others for help and try to fix the
    code together
3.  After all bugs are squashed, upgrade the chart from
    `d3@3` to `d3@4` (tip: see the [changelog][d3-changes] and [release
    notes][d3-release-notes])
4.  Update the `<title>` element with your GitHub username: `@username` (in my
    case `@wooorm`)
5.  When done, add a `readme.md` file similar to the one from
    [Do you readme?!][readme] that additionally lists what bugs you
    fixed

Hand in your bug-free and upgraded code in a directory `username` (in my case
`wooorm`) to `site/class-2-debug/` by creating a pull request from a branch
`debug`.  Include `index.csv`, `index.html`, `index.js`, `index.css`,
`readme.md`, and optionally a `preview.png` file.

[inspiration-cover]: images/olympic-feathers.jpg

[inspiration-link]: https://nbremer.github.io/olympicfeathers/

[inspiration-author]: https://github.com/nbremer

[readme-cover]: images/books.jpg

[readme-cover-source]: https://unsplash.com/photos/YjVa-F9P9kk

[readme-cover-author]: https://unsplash.com/@zeak

[style-cover]: images/style.jpg

[style-cover-source]: https://unsplash.com/photos/DXYyKCCvWiM

[style-cover-author]: https://unsplash.com/@flenjoore

[debug-cover]: images/ducks.jpg

[debug-cover-source]: https://unsplash.com/photos/59yg_LpcvzQ

[debug-cover-author]: https://unsplash.com/@andreuuuw

[readme]: #do-you-read-me

[debugger]: #debugger

[style]: #style

[c1]: class-1.md

[c3]: class-3.md

[a1]: assessment-1

[s3]: readme.md#subgoal-3

[s4]: readme.md#subgoal-4

[s5]: readme.md#subgoal-5

[s6]: readme.md#subgoal-6

[s7]: readme.md#subgoal-7

[c1a]: class-1.md#assignments

[c1li4]: class-1.md#class-1-load-i-4

[c1li]: class-1.md#class-1-load-i

[load]: class-1.md#loading-data

[bar]: class-1.md#bar-chart

[c1pd]: class-1.md#class-1-play-d

[c1pd3]: class-1.md#class-1-play-d-3

[play]: class-1.md#playing-with-svg

[tips-1]: #tips-1

[debug-starter]: site/class-2/debug

[style-starter]: site/class-2/style

[readme-gallery]: site/class-1-bar#readme

[debug-gallery]: https://cmda-fe3.github.io/course-17-18/class-2-debug/

[style-gallery]: https://cmda-fe3.github.io/course-17-18/class-2-style/

[examples]: https://cmda-fe3.github.io/course-17-18/class-2/

[slides]: https://docs.google.com/presentation/d/1uAhSUdxEki0eDWK36OCbhRQk1ScgygzVZzuKluvQVxc

[profile]: https://github.com/settings/profile

[cal]: https://choosealicense.com

[spdx]: https://spdx.org/licenses/

[sync-fork]: https://help.github.com/articles/syncing-a-fork/

[delete-repo]: https://help.github.com/articles/deleting-a-repository/

[d3-release-notes]: https://github.com/d3/d3/releases/v4.0.0

[d3-changes]: https://github.com/d3/d3/blob/master/CHANGES.md

[d3-scale]: https://github.com/d3/d3-scale
