<!--lint disable no-html-->

# [![Frontend 3 - Course 2017-2018][banner]][website]

## Table of Contents

*   [Synopsis](#synopsis)
*   [Description](#description)
*   [Communication](#communication)
*   [Goals](#goals)
*   [Grade](#grade)
*   [Calendar](#calendar)
*   [Effort](#effort)
*   [Materials](#materials)
*   [Bugs](#bugs)
*   [Semester](#semester)
*   [Programme](#programme)
*   [Conduct](#conduct)
*   [License](#license)

## Synopsis

The course **Frontend 3** is given at [**@CMDA**][cmda] in 2017 between
25 September and 20 October.

*   **Course**: Frontend 3
*   **Course coordinator**: [Titus Wormer][wooorm-mail]
*   **Course lecturers**: [Titus Wormer][wooorm-mail] ([**@wooorm**][wooorm-gh])
    and [Laurens Aarnoudse][razpudding-mail] ([**@razpudding**][razpudding-gh])
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

If you’d like to continue with web development after this course check out the
[Minor Web Development][minor].  Feel free to ask your [lecturer][synopsis]
for more info about the minor.

## Communication

*   [GitHub][home]
    — Main source of information, assignments, important dates, and more
*   [Website][]
    — Examples and assignments
*   [Slack][]
    — General chatter and Q&A
*   [Moodle][moodle-fe3]
    — Schedulers

## Goals

#### Main goals

The 3 main goals in this course are:

*   Learning how to use a library
*   Making a datavisualisation from external data
*   Learning d3

#### Subgoals

In practice you’ll learn to:

1.  <a name="subgoal-1"></a> Understand SVG and canvas
    ([**class 1**][c1])
2.  <a name="subgoal-2"></a> Parse data formats
    ([**class 1**][c1] and [**class 3**][c3])
3.  <a name="subgoal-3"></a> Write documentation
    ([**class 2**][c2] and [**class 4**][c4])
4.  <a name="subgoal-4"></a> Read documentation
    ([**class 2**][c2] and [**class 4**][c4])
5.  <a name="subgoal-5"></a> Debug code
    ([**class 2**][c2])
6.  <a name="subgoal-6"></a> Refactor code
    ([**class 2**][c2])
7.  <a name="subgoal-7"></a> Use scales (domain, range, and axis)
    ([**class 2**][c2] and [**class 4**][c4])
8.  <a name="subgoal-8"></a> Load external data
    ([**class 3**][c3] and [**class 4**][c4])
9.  <a name="subgoal-9"></a> Transform and clean data
    ([**class 3**][c3] and [**class 4**][c4])
10. <a name="subgoal-10"></a> Understand the d3 loop
    ([**class 3**][c3] and [**class 4**][c4])
11. <a name="subgoal-11"></a> Create interactive visualisations
    ([**class 3**][c3] and [**class 5**][c5])
12. <a name="subgoal-12"></a> Create multiple visualisations on the same page
    ([**class 6**][c6])

## Grade

| Task                        | Weight |
| --------------------------- | -----: |
| [Participation][]           |    10% |
| [Assessment 1][a1] (remote) |    20% |
| [Assessment 2][a2] (remote) |    30% |
| [Assessment 3][a3] (oral)   |    40% |
| **Total**                   |   100% |

## Calendar

Dates are indicative.  Check [`rooster.hva.nl`][rooster] for info on actual
date, time, and place.

| Class                  | Date ID 1 | Date ID 2 |    Date ID 3    |
| ---------------------- | :-------: | :-------: | :-------------: |
| [Class 1][c1]          |   25-09   |   26-09   |      25-09      |
| [Class 2][c2]          |   02-10   |   04-10   |      02-10      |
| [**Assessment 1**][a1] |   04-10※  |   05-10※  |      03-10※     |
| [Class 3][c3]          |   05-10   |   06-10   |      04-10      |
| [Class 4][c4]          |   09-10   |   11-10   |      09-10      |
| [**Assessment 2**][a2] |   11-10※  |   12-10※  |      10-10※     |
| [Class 5][c5]          |   12-10   |   13-10   |      11-10      |
| [Class 6][c6]          |   16-10   |   17-10   |      16-10      |
| [**Assessment 3**][a3] |   19-10   |   20-10   | 18-10 and 20-10 |
| **Resit**              |   01-02   |   31-01   |      02-02      |

> ※ Assessments 1 and 2 are to be handed in 24 hours before the start of the
> next class.

## Effort

The table below breaks down the general time needed to complete activities.

| Activity               | Effort (hrs) |
| ---------------------- | -----------: |
| Class (6 × 2½hrs)      |           15 |
| Assignments (5 × 5hrs) |           25 |
| [Assessment 1][a1]     |            4 |
| [Assessment 2][a2]     |            8 |
| [Assessment 3][a3]     |           12 |
| [Extra][participation] |           20 |
| **Total**              |       **84** |

## Materials

#### Resources used in this course

*   🆓 GitHub account (**required**)
    — [Sign Up](https://help.github.com/articles/signing-up-for-a-new-github-account/)
*   🆓 Text Editor (**required**)
    — [Atom](https://atom.io) or [Sublime](https://www.sublimetext.com)
*   🆓 Installation of [Node](https://nodejs.org/en/),
    [Python](https://www.python.org), or
    [Ruby](https://www.ruby-lang.org/en/) (**required**)
*   🆓 King, Ritchie S.  _Visual Storytelling with D3_.  Addison-Wesley, 2015
    (**optional**)
*   🆓 Meeks, Elijah.  _D3.js in Action_.  O’Reilly Media, 2017 (**optional**)
*   🆓 Navarro Castillo, Pablo.  _Mastering D3.js_.  Packt Publishing, 2014
    (**optional**)
*   🆓 [D3.js Essentials](https://www.lynda.com/D3-js-tutorials/Welcome/504428/549380-4.html)
    on Lynda (**optional**)

> 💁 The three books are free for HvA students through
> [Safari Bookshelves][bookshelves].
> Lynda is free for HvA students through our [portal][lynda-portal].

#### Resources to refresh your memory

*   🆓 [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
    (**course**) — Intro to JavaScript: Learn to code interactively
*   🆓 [Re-introduction to JavaScript](https://developer.mozilla.org/Web/JavaScript/A_re-introduction_to_JavaScript)
    (**article**) — Short re-introduction to JavaScript
*   🆓 [JavaScript Essentials](https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/574716-2.html)
    (**course**) — Learn JavaScript on Lynda
    (free for HvA students through our [portal][lynda-portal])
*   🆓 [JavaScript For Cats](http://jsforcats.com)
    (**book**) — Intro to JavaScript for new programmers
*   🆓 [JavaScript 30](https://javascript30.com)
    (**course**) — 30 day vanilla JavaScript coding challenge
*   🆓 [Eloquent JavaScript](https://eloquentjavascript.net)
    (**book**) — Modern intro to programming
*   🆓 [Basics of HTML & CSS](http://webdive.ktam.org/web/basics)
    (**tutorial**) — Learn how to use HTML & CSS
*   🆓 [Command-line bootcamp](http://rik.smith-unna.com/command_line_bootcamp/)
    (**tutorial**) — Learn how to work at the command-line
*   🆓 [node-handbook](https://github.com/bcomnes/node-handbook)
    (**article**) — Learn Node the Node way
*   🆓 [NodeSchool](https://nodeschool.io/amsterdam/)
    (**meetup**) — Open source workshops that teach web software skills
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

## Bugs

If you have questions:

*   [Read the manual][manual]
*   [Browse the gallery][gallery]
*   [Follow tutorials][tutorials]
*   [Search StackOverflow][stackoverflow]
*   Use a search engine (like [DuckDuckGo][])
*   [Ask questions on Slack][slack]
*   [Open an issue][issue]
*   [Contact a lecturer][synopsis]

## Semester

Frontend 3 is given in the [Information Design][moodle-id] semester (quarter
1 and 2).  Information Design is all about data visualisation and infographics.
In 6 courses and 3 projects you’ll learn how to visualise data and complex
information.  In Frontend 3 you’ll learn how to build that.

This semester (including this course) is quite technical.  However, we’ll also
test your creativity.  See the below infographic about Frontend 3’s place in
Information Design.

[![][infographic]][moodle-id]

## Programme

**Frontend 3** is given at [Communication and Multimedia Design][bachelor], a
design bachelor focused on interactive digital products and services.  CMD is
part of the [Faculty of Digital Media and Creative Industries][faculty] at the
[Amsterdam University of Applied Sciences][university].

[![][cmd-logo]][bachelor]

## Conduct

This project has a [Code of Conduct][coc].  Anyone interacting with this
repository, organisation, or community is bound by it.

Staff and students of the Amsterdam University of Applied Sciences (Hogeschool
van Amsterdam) are additionally bound by the [Regulation Undesirable
Conduct][ruc] ([Regeling Ongewenst Gedrag][rog]).

## License

Software: [MIT][] © [Titus Wormer][author].
Docs and images: [CC-BY-NC-SA-4.0][].

[banner]: https://cdn.rawgit.com/cmda-fe3/logo/a062020/banner.svg

[mit]: license.md#software

[cc-by-nc-sa-4.0]: license.md#documentation-and-images

[author]: http://wooorm.com

[home]: https://github.com/cmda-fe3

[wooorm-gh]: https://github.com/wooorm

[razpudding-gh]: https://github.com/Razpudding

[wooorm-mail]: mailto:t.e.wormer@hva.nl?subject=frontend-3:%20

[razpudding-mail]: mailto:l.n.aarnoudse@hva.nl?subject=frontend-3:%20

[frank-mail]: mailto:f.kloos@hva.nl?subject=frontend-3:%20

[maaike-mail]: mailto:m.van.cruchten@hva.nl?subject=frontend-3:%20

[website]: https://cmda-fe3.github.io/course-17-18/

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

[synopsis]: #synopsis

[minor]: https://cmda.github.io/minor-everything-web/

[rooster]: https://rooster.hva.nl

[html-css]: https://learn.shayhowe.com/html-css/

[bookshelves]: http://rps.hva.nl:2048/login?url=http://proquest.safaribooksonline.com/?uicode=hva

[lynda-portal]: https://lyndaportal.ict.hva.nl

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

[a1]: assessment-1

[a2]: assessment-2

[a3]: assessment-3

[participation]: participation.md

[bachelor]: https://www.cmd-amsterdam.nl/english/

[faculty]: https://www.amsterdamuas.com/faculty/fdmci/faculty-of-digital-media-and-creative-industries.html

[university]: https://www.amsterdamuas.com

[cmd-logo]: images/cmd.jpg

[coc]: code-of-conduct.md

[ruc]: https://www.amsterdamuas.com/practical-matters/algemeen/hva-breed/juridische-zaken/legal-affairs/regulation-undesirable-conduct/regulation-undesirable-conduct.html#anker-3-complaints-authority

[rog]: https://www.hva.nl/praktisch/algemeen/hva-breed/juridische-zaken/loket-beroep-bezwaar-en-klacht/regeling-ongewenst-gedrag/regeling-ongewenst-gedrag.html?origin=gbS4rg%2FDTZuxQ6lGVF%2BN1A
