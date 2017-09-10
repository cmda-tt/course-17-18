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
*   [Lecturers](#lecturers)
*   [See also](#see-also)
*   [License](#license)

## Synopsis

The course **Frontend 3** is given at [**@CMDA**][cmda] in 2017 between
25 September and 20 October.

*   **Course**: Frontend 3
*   **Course coordinator**: [Titus Wormer][wooorm-mail]
*   **Course lecturers**: [Titus Wormer][wooorm-mail] and
    [Laurens Aarnoudse][razpudding-mail]
*   **Semester**: [Information Design][moodle-id]
*   **Semester coordinators**: [Frank Kloos][frank-mail] and
    [Maaike van Cruchten][maaike-mail]
*   **SIS**: Frontend 3 Data
*   **Credit**: 3 ECTS
*   **Academic year**: 2017-2018
*   **Period**: Quarter 1
*   **Programme**: Communication and Multimedia Design (full time bachelor)
*   **Language**: Dutch instructions and English resources
*   **Entry requirements**: N/A

## Description

Frontend 3 builds further on the knowledge acquired in **Internetstandaarden**,
**Inleiding Programmeren**, **Frontend 1**, **Frontend 2**, and **Backend**
(the last two are optional but recommended), amongst others.

In this course you’ll learn to use d3 to actually make what you design, to
advance your web dev skills, and to adopt frameworks and libraries.  In
Project 1 (individual) and Project 2 (team) of Information Design you’ll apply
your newfound skills.

If you’d like to go even further with web development check out the
[Minor Web Development][minor].  Feel free to ask your [lecturer][lecturers]
for more info as they both lecture in the minor.

## Goals

#### Main goals

The 3 main goals in this course are:

*   Learning how to use a library
*   Making a datavisualisation from external data
*   Learning d3

#### Subgoals

In practice you’ll learn to:

<!--lint disable no-html-->

1.  <a name="subgoal-1"></a> Understand SVG and canvas
    ([**class 1**][c1])
2.  <a name="subgoal-2"></a> Parse data formats, like JSON, CSV, and TSV
    ([**class 1**][c1] and [**class 3**][c3])
3.  <a name="subgoal-3"></a> Debug code, such as adapting d3 v3 code to v4
    ([**class 1**][c1] and [**class 2**][c2])
4.  <a name="subgoal-4"></a> Rewrite code in your own style
    ([**class 1**][c1] and [**class 2**][c2])
5.  <a name="subgoal-5"></a> Read documentation
    ([**class 1**][c1], [**class 2**][c2], and [**class 4**][c4])
6.  <a name="subgoal-6"></a> Write documentation for code and projects
    ([**class 1**][c1], [**class 2**][c2], and [**class 4**][c4])
7.  <a name="subgoal-7"></a> Use axes, domains, labels, ranges, and scales
    ([**class 2**][c2] and [**class 4**][c4])
8.  <a name="subgoal-8"></a> Read in external data
    ([**class 3**][c3] and [**class 4**][c4])
9.  <a name="subgoal-9"></a> Transform and clean external data
    ([**class 3**][c3] and [**class 4**][c4])
10. <a name="subgoal-10"></a> Understand the d3 loop
    ([**class 3**][c3] and [**class 4**][c4])
11. <a name="subgoal-11"></a> Create interactive visualisations
    ([**class 3**][c3] and [**class 5**][c5])
12. <a name="subgoal-12"></a> Create multiple graphs on the same page
    ([**class 6**][c6])

<!--lint enable no-html-->

## Materials

Checked materials are required.  Unchecked materials are optional.

*   [x] GitHub account
    — [Sign Up](https://help.github.com/articles/signing-up-for-a-new-github-account/)
*   [x] Text Editor
    — [Sublime](http://www.sublimetext.com) or [Atom](https://atom.io)
*   [ ] King, Ritchie S.  _Visual Storytelling with D3_.  Addison-Wesley, 2015
*   [ ] Meeks, Elijah.  _D3.js in Action_.  O’Reilly Media, 2017
*   [ ] [Navarro Castillo, Pablo.
    _Mastering D3.js_.
    Packt Publishing, 2014](https://github.com/pnavarrc/mastering-d3)

Note that the three optional books are available for free to HvA
students through our [Safari Bookshelves][bookshelves].

## Communication

Communication between students and lecturers happens on:

*   [GitHub][home]
    — Main source of information, assignments, important dates, and more
*   [Slack][]
    — General chatter and Q&A
*   [Moodle][moodle-fe3]
    — Schedulers and links to other places

## Grade

| Task                        | Weight |
| --------------------------- | -----: |
| Participation               |    10% |
| [Assessment 1 (remote)][a1] |    20% |
| [Assessment 2 (remote)][a2] |    30% |
| [Assessment 3 (oral)][a3]   |    40% |
| **Total**                   |   100% |

## Calendar

Dates may be out of date.  Check [`rooster.hva.nl`][rooster] for info on actual
date, time, and place.

| Class                       |  Type | Date ID 1 | Date ID 2 |    Date ID 3    |
| --------------------------- | :---: | :-------: | :-------: | :-------------: |
| [Class 1][c1]               | Class |   25-09   |   26-09   |      25-09      |
| [Class 2][c2]               | Class |   02-10   |   04-10   |      02-10      |
| [Assessment 1 (remote)][a1] |  Test |   04-10※  |   05-10※  |      03-10※     |
| [Class 3][c3]               | Class |   05-10   |   06-10   |      04-10      |
| [Class 4][c4]               | Class |   09-10   |   11-10   |      09-10      |
| [Assessment 2 (remote)][a2] |  Test |   11-10※  |   12-10※  |      10-10※     |
| [Class 5][c5]               | Class |   12-10   |   13-10   |      11-10      |
| [Class 6][c6]               | Class |   16-10   |   17-10   |      16-10      |
| [Assessment 3 (oral)][a3]   |  Test |   19-10   |   20-10   | 18-10 and 20-10 |
| Resit                       |  Test |   01-02   |   31-01   |      02-02      |

> ※ — Assessments 1 and 2 are to be handed in 24 hours before the start of the
> next class.

## Prerequisites

Frontend 3 is the most technical course (except for the Minor Web Development)
given at [**@CMDA**][cmda].  You will need your knowledge acquired in previous
technical courses.  Use the following sources to refresh your memory.

#### Resources to refresh your memory

*   🆓 [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
    (**course**) — Introduction to JavaScript: Learn to code interactively
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

*   Duckett, Jon.
    _HTML & CSS_.
    John Wiley & Sons, 2015
    (**internetstandaarden**)
*   [Howe, Shay.
    _Learn to Code HTML & CSS_.
    New Riders, 2014][html-css]
    (**internetstandaarden**)
*   Duckett, Jon.
    _JavaScript & jQuery_.
    John Wiley & Sons, 2015
    (**inleiding programmeren**)
*   [Simpson, Kyle.
    _YDKJS: Up & Going_.
    O’Reilly Media, 2015][ydkjs-1]
    (**frontend 2**)
*   [Simpson, Kyle.
    _YDKJS: Scope & Closures_.
    O’Reilly Media, 2015][ydkjs-2]
    (**frontend 2**)
*   [Simpson, Kyle.
    _YDKJS: this & Object Prototypes_.
    O’Reilly Media, 2015][ydkjs-3]
    (**frontend 2**)
*   [Simpson, Kyle.
    _YDKJS: Types & Grammar_.
    O’Reilly Media, 2015][ydkjs-4]
    (**frontend 2**)
*   [Simpson, Kyle.
    _YDKJS: Async & Performance_.
    O’Reilly Media, 2015][ydkjs-5]
    (**frontend 2**)
*   [Simpson, Kyle.
    _YDKJS: ES6 & Beyond_.
    O’Reilly Media, 2016][ydkjs-6]
    (**frontend 2**)

## Environment

Frontend 3 is a course given in the optional [Information Design][moodle-id]
semester (given quarter 1 and 2).  Information Design is all about data
visualisation and infographics.

In 6 courses and 3 projects you’ll learn how to visualise data and complex
information.  In this course you’ll learn how to build that.

This semester (including this course) is quite technical.  However, we’ll also
test your creativity, research, and concepting capabilities.

See the below infographic on where Frontend 3 is placed in Information Design.

![][infographic]

## Bugs

If you have questions:

*   [Ask questions on Slack][slack]
*   [Contact a lecturer][lecturers]
*   [Read the manual][manual]
*   [Browse the gallery][gallery]
*   [Follow tutorials][tutorials]
*   [Search StackOverflow][stackoverflow]
*   Use a search engine (like [DuckDuckGo][])
*   [Open an issue][issue]

## Lecturers

*   [Titus Wormer][wooorm-mail] ([**@wooorm**][wooorm-gh])
*   [Laurens Aarnoudse][razpudding-mail] ([**@razpudding**][razpudding-gh])

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

[wooorm-mail]: mailto:t.e.wormer@hva.nl?subject=frontend-3:%20

[wooorm-gh]: https://github.com/wooorm

[razpudding-mail]: mailto:l.n.aarnoudse@hva.nl?subject=frontend-3:%20

[frank-mail]: mailto:f.kloos@hva.nl?subject=frontend-3:%20

[maaike-mail]: mailto:m.van.cruchten@hva.nl?subject=frontend-3:%20

[razpudding-gh]: https://github.com/Razpudding

[cmda]: https://github.com/cmda

[moodle-id]: https://moodle.cmd.hva.nl/course/view.php?id=408

[moodle-fe3]: https://moodle.cmd.hva.nl/course/view.php?id=419

[infographic]: images/information-design.png

[issue]: https://github.com/cmda-fe3/course-17-18/issues/new

[stackoverflow]: https://stackoverflow.com/questions/tagged/d3.js

[duckduckgo]: https://duckduckgo.com

[manual]: https://github.com/d3/d3/wiki

[gallery]: https://github.com/d3/d3/wiki/Gallery

[tutorials]: https://github.com/d3/d3/wiki/Tutorials

[slack]: https://cmdinformationdesign.slack.com

[lecturers]: #lecturers

[minor]: https://moodle.cmd.hva.nl/course/index.php?categoryid=41

[rooster]: https://rooster.hva.nl

[html-css]: http://learn.shayhowe.com/html-css/

[bookshelves]: http://rps.hva.nl:2048/login?url=http://proquest.safaribooksonline.com/?uicode=hva

[ydkjs-1]: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going

[ydkjs-2]: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures

[ydkjs-3]: https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes

[ydkjs-4]: https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/README.md#you-dont-know-js-types--grammar

[ydkjs-5]: https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance

[ydkjs-6]: https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond

[c1]: class-1.md

[c2]: class-2.md

[c3]: class-3.md

[c4]: class-4.md

[c5]: class-5.md

[c6]: class-6.md

[a1]: assessment-1.md

[a2]: assessment-2.md

[a3]: assessment-3.md
