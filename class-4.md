# Class 4

> I fear the day that technology will surpass our human interaction.
> The world will have a generation of idiots.
> — Albert Einstein※
>
> ※ He never actually said this though…
> People love attributing quotes to Einstein.

## Table of Contents

*   [Inspiration](#inspiration)
*   [Synopsis](#synopsis)
*   [Schedule](#schedule)
*   [Assignments](#assignments)
*   [Assessment](#assessment)
*   [Interactivity](#interactivity)
*   [Source](#source)

## Inspiration

[![][inspiration-cover]][inspiration-link]

> Keystrokes by [**@tmcw**][inspiration-author].

## Synopsis

*   **Date**: 09-10 (ID 1), 11-10 (ID 2), or 09-10 (ID 3)
*   [**Slides**][slides]
*   [**Examples**][examples]

## Schedule

*   Events
    ([**subgoal 11**][s11])
*   Interaction
    ([**subgoal 9**][s9], [**subgoal 10**][s10], and [**subgoal 11**][s11])
*   Questions

## Assignments

Submit your assignments by 7 a.m. the day of [class 5][c5].

*   [Interactivity](#interactivity) (**practice**)
*   [Source](#source) (**homework**)

See [class 3][c3] for assignments due before this class.

## Assessment

Submit [assessment 2][a2] before the start of [class 5][c5].

## Interactivity

[![][interactive-cover]][interactive-cover-source]

> Dancing in the shadow by [**@ardianlumi**][interactive-cover-author].

In this assignment you’ll learn to add interactivity to a chart.

### Tips

*   [Examples found in the slides][examples]

### Synopsis

*   **Practice**
*   **Due**: 7 a.m. the day of [class 5][c5]
*   **Results**: [Gallery][interaction-gallery]

### Description

The project you’ll hand in will be similar to the one from
[Class 3: Transition][c3transition] but this time will render a non-basic chart
with non-trivial interaction.

1.  Pick a static chart from [d3’s example gallery][d3-examples]
    or use one of your previously made charts from assignments or assessment 1
2.  Copy-paste the files over to your own computer and get the chart working
    on d3@4
3.  Add a `<title>` element, or replace the one already there, with your GitHub
    username: `@username` (in my case `@wooorm`)
4.  Move CSS and JS from the HTML into their own files: `index.css` and
    `index.js`
5.  Add citations to the original work in `index.html` and `index.js`
6.  Add non-trivial interactivity to your chart.  Non-trivial means
    that the visualised data changes and uses enter, update, and exit.
    For example, this includes sorting and filtering and excludes zooming and
    tooltips
7.  Add a `readme.md` file similar to the one from
    [Class 2: Do you readme?!][c2readme] that additionally describes what you
    changed and how you applied interactivity

Hand in your code in a directory `username` (in my case `wooorm`) to
`site/class-4-interaction/` by creating a pull request from a branch
`interaction`.  Include `index.html`, `index.js`, `index.css`, `readme.md`,
optionally a `preview.png` file, and a data file (such as `index.json`,
`index.csv`, `index.tsv`).

## Source

[![][source-cover]][source-cover-source]

> File, \[…], arranged, and Germany [**@samuelzeller**][source-cover-author].

In this assignment you’ll find data for [assessment 3][a3].

### Tips

*   [Recommended data][recommended]

### Synopsis

*   **Homework**
*   **Due**: 7 a.m. the day of [class 5][c5]
*   **Results**: [Issues][source-gallery]

### Description

Find an interesting [data source][a3data] that can be used to make
[multiple][a3multiple] [interactive][a3interactive] visualisations.

See [assessment 3][a3] for the requirements and make sure your data matches
them.

Write a short description why you’re using this data (3 paragraphs), and how it
could be used to reach [assessment 3’s goals][a3goals].  Include links to the
data and how to download it.

Hand in your description in a new [issue][] to our repo.  Use the title
`Assessment 3 data: @username` (in my case `Assessment 3 data: @wooorm`).

[inspiration-cover]: images/keys.jpg

[inspiration-link]: https://tmcw.github.io/minute/

[inspiration-author]: https://github.com/tmcw

[interactive-cover]: images/dance.jpg

[interactive-cover-source]: https://unsplash.com/photos/6Woj_wozqmA

[interactive-cover-author]: https://unsplash.com/@ardianlumi

[source-cover]: images/binders.jpg

[source-cover-source]: https://unsplash.com/photos/vpR0oc4X8Mk

[source-cover-author]: https://unsplash.com/@samuelzeller

[slides]: https://docs.google.com/presentation/d/1eKq-PmOYPOVWey4G-1tuU6vDcBUrhd7Og14nXv30ARQ

[examples]: https://cmda-fe3x3.github.io/course-17-18/class-4/

[interaction-gallery]: https://cmda-fe3x3.github.io/course-17-18/class-4-interaction/

[c2readme]: class-2.md#do-you-read-me

[c3]: class-3.md#assignments

[c3transition]: class-3.md#transition

[c5]: class-5.md

[s9]: readme.md#subgoal-9

[s10]: readme.md#subgoal-10

[s11]: readme.md#subgoal-11

[a2]: assessment-2

[a3]: assessment-3

[d3-examples]: https://github.com/d3/d3/wiki/Gallery

[recommended]: assessment-1/#other-data

[a3data]: assessment-3/#data

[a3interactive]: assessment-3/#interactive

[a3multiple]: assessment-3/#multiple

[a3goals]: assessment-3/#goals

[issue]: https://github.com/cmda-fe3x3/course-17-18/issues

[source-gallery]: https://github.com/cmda-fe3x3/course-17-18/issues?q=is%3Aissue%20label%3Aclass-4%3Asource%20
