<!--
  TODO:
  * Set-up Moodle
  * Send email out containing invite to Slack
  * Link grade tasks to separate pages
  * Link calendar to separate pages
-->

# fe(3) - Course 2017-2018

## [![fe(3)][logo]][home]

## Table of Contents

*   [Synopsis](#synopsis)
*   [Description](#description)
*   [Goals](#goals)
*   [Materials](#materials)
*   [Communication](#communication)
*   [Grade](#grade)
*   [Calendar](#calendar)
*   [Prerequisites](#prerequisites)
*   [Environment](#environment)
*   [Bugs](#bugs)
*   [Tips](#tips)
*   [Instructors](#instructors)
*   [See also](#see-also)
*   [License](#license)

## Synopsis

The course **Frontend 3** is given at [**@CMDA**][cmda] in 2017 between
25 September and 20 October.

*   **Academic year**: 2017-2018
*   **SIS**: Frontend 3 Data
*   **Credit (ECTS)**: 3
*   **Period**: Quarter 1
*   **Programme**: Communication and Multimedia Design (bachelor, full time)
*   **Language of instruction**: Dutch, English resources
*   **Entry requirements**: N/A
*   **Course coordinator**: Titus Wormer
*   **Lecturers**: Titus Wormer, Laurens Aarnoudse

## Description

FE 3 builds further on the knowledge acquired in **Internetstandaarden** and
**Inleiding Programmeren** (year 1), **Frontend 1** (year 2), and **Frontend 2**
and **Backend** (year 2, optional but recommended), amongst others.

In this course you’ll learn:

1.  If you prefer design, to use d3 to actually make what you envision
2.  If you prefer development, to advance your web dev skills and to adopt
    frameworks and libraries
3.  …or both!

If you’d like to go even further with web development, do check out the
[Minor Web Development][minor].  Both [**@wooorm**][wooorm-gh] and
[**@razpudding**][razpudding-gh] lecture in the minor, so feel free to ask
them for more information.

## Goals

The 3 main goals in this course are:

*   Learning how to use a library
*   Making a datavisualisation from external data
*   Learning d3

In practice, you’ll learn to:

*   Read documentation
*   Write documentation (for code and projects)
*   Debug code (such as adapting d3 v3 code to v4)
*   Rewrite code in your own style
*   Read in external data
*   Use dataformats (like JSON, CSV, TSV, and more)
*   Transform and clean external data
*   Understand the d3 update loop (enter, update, exit)
*   Create multiple graphs on the same page
*   Create interactive visualisations (think filter, sort, and zoom)
*   Use axes, domains, labels, ranges, and scales
*   Understand SVG, canvas

## Materials

Checked materials are required.  Unchecked materials are optional.

*   [x] GitHub account
    — [Sign Up](https://help.github.com/articles/signing-up-for-a-new-github-account/)
*   [x] Text Editor
    — [Sublime](http://www.sublimetext.com) or [Atom](https://atom.io)
*   [ ] King, Ritchie S.  _Visual Storytelling with D3_.  Addison-Wesley, 2015
    — [Read on GitHub](https://github.com/ritchieking/d3-book)
*   [ ] Meeks, Elijah.  _D3.js in Action_.  O’Reilly Media, 2017
    — [Read on GitHub](https://github.com/emeeks/d3_in_action_2)
*   [ ] Castillo, Pablo Navarro.  _Mastering D3.js_.  Packt Publishing, 2014
    — [Read on GitHub](https://github.com/pnavarrc/mastering-d3)

## Communication

Communication between students and instructors happens on:

*   [GitHub][home]
*   [Slack][]
*   Moodle

## Grade

| Task                  | Percentage |
| --------------------- | ---------: |
| Participation         |        10% |
| Assessment 1 (remote) |        20% |
| Assessment 2 (remote) |        30% |
| Assessment 3 (oral)   |        40% |
| **Total**             |       100% |

## Calendar

Dates may be out of date.  Check [`rooster.hva.nl`][rooster] for info on actual
date, time, and place.

| Class                 |  Type | Date ID 1 | Date ID 2 |    Date ID 3    |
| --------------------- | :---: | :-------: | :-------: | :-------------: |
| Class 1               | Class |   25-09   |   26-09   |      25-09      |
| Class 2               | Class |   02-10   |   04-10   |      02-10      |
| Assessment 1 (remote) |  Test |           |           |                 |
| Class 3               | Class |   05-10   |   06-10   |      04-10      |
| Class 4               | Class |   09-10   |   11-10   |      09-10      |
| Assessment 2 (remote) |  Test |           |           |                 |
| Class 5               | Class |   12-10   |   13-10   |      11-10      |
| Class 6               | Class |   16-10   |   17-10   |      16-10      |
| Assessment 3 (oral)   |  Test |   16-10   |   20-10   | 18-10 and 20-10 |
| Resit                 |  Test |   01-02   |   31-01   |      02-02      |

## Prerequisites

FE 3 is the most technical course, except for the Minor Web Development, given
at [**@CMDA**][cmda].  You will need your knowledge acquired in previous
technical courses.  To refresh your memory, use the following sources.

#### Resources to refresh your memory

*   🆓 [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
    (**course**) — Introduction to JavaScript: Learn to code, interactively,
    for free
*   🆓 [Re-introduction to JavaScript](https://developer.mozilla.org/Web/JavaScript/A_re-introduction_to_JavaScript)
    (**article**) — Short re-introduction to JavaScript
*   🆓 [JavaScript For Cats](http://jsforcats.com)
    (**book**) — Introduction to JavaScript for new programmers
*   🆓 [JavaScript 30](https://javascript30.com)
    (**course**) — 30 day vanilla JavaScript coding challenge
*   🆓 [Eloquent JavaScript](http://eloquentjavascript.net)
    (**book**) — Modern introduction to programming
*   🆓 [Mastering Markdown](https://masteringmarkdown.com)
    (**course**) — Mini series that will change how you write documentation
*   🆓 [Markdown Tutorial](https://www.markdowntutorial.com)
    (**tutorial**) — Learn how to use Markdown
*   🆓 [Basics of HTML & CSS](http://webdive.ktam.org/web/basics)
    (**tutorial**) — Learn how to use HTML & CSS
*   🆓 [Command-line bootcamp](http://rik.smith-unna.com/command_line_bootcamp/)
    (**tutorial**) — Learn how to work at the command-line
*   🆓 [node-handbook](https://github.com/bcomnes/node-handbook)
    (**article**) — Learn Node the Node way
*   🆓 [NodeSchool](https://nodeschool.io/amsterdam/)
    (**meetup**) — Open source workshops that teach web software skills
*   🆓 [Lynda](https://www.lynda.com/)
    (**course**) — Lynda offers lots of handy courses available for free to HvA
    students through our [portal](https://lyndaportal.ict.hva.nl)
*   💸 [Learn Node](https://learnnode.com)
    (**course**) — Learn to build apps with Node, Express, and more (offers
    student discount)
*   💸 [Tutoring](http://piratepad.net/HeB4FUsI0t)
    — Match up with another CMD student

#### Resources used in previous courses

*   **Internetstandaarden**:
    Duckett, Jon.  _HTML & CSS_.  John Wiley & Sons, 2015
*   **Internetstandaarden**:
    Howe, Shay.  _Learn to Code HTML & CSS_.  New Riders, 2014
    — [Read online](http://learn.shayhowe.com/html-css/)
*   **Inleiding Programmeren**:
    Duckett, Jon.  _JavaScript & jQuery_.  John Wiley & Sons, 2015
*   **Frontend 2**:
    Simpson, Kyle.  _YDKJS: Up & Going_.  O’Reilly Media, 2015
    — [Read on GitHub][ydkjs-1]
*   **Frontend 2**:
    Simpson, Kyle.  _YDKJS: Scope & Closures_.  O’Reilly Media, 2015
    — [Read on GitHub][ydkjs-2]
*   **Frontend 2**:
    Simpson, Kyle.  _YDKJS: this & Object Prototypes_.  O’Reilly Media, 2015
    — [Read on GitHub][ydkjs-3]
*   **Frontend 2**:
    Simpson, Kyle.  _YDKJS: Types & Grammar_.  O’Reilly Media, 2015
    — [Read on GitHub][ydkjs-4]
*   **Frontend 2**:
    Simpson, Kyle.  _YDKJS: Async & Performance_.  O’Reilly Media, 2015
    — [Read on GitHub][ydkjs-5]
*   **Frontend 2**:
    Simpson, Kyle.  _YDKJS: ES6 & Beyond_.  O’Reilly Media, 2016
    — [Read on GitHub][ydkjs-6]

## Environment

FE 3 is a course given in the optional [Information Design][moodle-id] semester
(quarter 1 and 2), a semester all about data visualisation and infographics.

In 6 courses and 3 projects you’ll learn how to visualise data and complex
information.  In this course you’ll learn how to build that.

This semester, including this course, is quite technical.  However, we’ll also
test your creativity and research & concepting capabilities.

See the below infographic on where FE 3 is placed in Information Design.

![][infographic]

## Bugs

Feel free to [open an issue][issue] if you have questions, or see
[“Instructors”][instructors] to contact instructors directly.

## Tips

*   [Read the manual][manual]
*   [Browse the gallery][gallery]
*   [Follow tutorials][tutorials]
*   [Ask questions on Slack][slack]
*   [Search StackOverflow][stackoverflow]
*   Use a search engine (like [DuckDuckGo][])

## Instructors

*   [Titus Wormer][wooorm-uni] ([**@wooorm**][wooorm-gh])
*   [Laurens Aarnoudse][razpudding-uni] ([**@razpudding**][razpudding-gh])

## See also

*   [`d3js.org`](https://d3js.org)
*   [`bl.ocks.org`](https://bl.ocks.org)
*   [`github.com/d3/d3`](https://github.com/d3/d3)
*   [`lynda.com`](https://www.lynda.com/D3-js-tutorials/Welcome/504428/549380-4.html)
*   [`studiegids.hva.nl`](https://studiegids.hva.nl/studiegids?edu=cmd-vt&phase=Leerjaar%203&path=https%3A%2F%2Fstudiedelen.mijnhva.nl%2Fmetadata%2Fdmci%2FLists%2FDraftMetadata%2FDispForm.aspx%3FID%3D4049)

## License

[MIT][] © [Titus Wormer][author]

[logo]: https://cdn.rawgit.com/cmda-fe3/logo/56ebc971/logo.svg

[home]: https://github.com/cmda-fe3

[mit]: LICENSE

[author]: http://wooorm.com

[wooorm-uni]: mailto:t.e.wormer@hva.nl?subject=frontend-3:%20

[wooorm-gh]: https://github.com/wooorm

[razpudding-uni]: mailto:l.n.aarnoudse@hva.nl?subject=frontend-3:%20

[razpudding-gh]: https://github.com/Razpudding

[cmda]: https://github.com/cmda

[moodle-id]: https://moodle.cmd.hva.nl/course/view.php?id=408

[infographic]: images/information-design.png

[issue]: https://github.com/cmda-fe3/course-17-18/issues/new

[stackoverflow]: https://stackoverflow.com/questions/tagged/d3.js

[duckduckgo]: https://duckduckgo.com

[manual]: https://github.com/d3/d3/wiki

[gallery]: https://github.com/d3/d3/wiki/Gallery

[tutorials]: https://github.com/d3/d3/wiki/Tutorials

[slack]: https://cmdinformationdesign.slack.com

[instructors]: #instructors

[minor]: https://moodle.cmd.hva.nl/course/index.php?categoryid=41

[rooster]: https://rooster.hva.nl

[ydkjs-1]: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going

[ydkjs-2]: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures

[ydkjs-3]: https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes

[ydkjs-4]: https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/README.md#you-dont-know-js-types--grammar

[ydkjs-5]: https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance

[ydkjs-6]: https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond
