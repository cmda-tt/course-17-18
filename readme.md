<!--
  TODO:
  * Set-up Moodle
  * Send email out containing invite to Slack
  * Link grade tasks to separate pages
-->

# fe(3) - Course 2017-2018

## [![fe(3)][logo]][home]

## Table of Contents

*   [Synopsis](#synopsis)
*   [Description](#description)
*   [Goals](#goals)
*   [Materials](#materials)
*   [Grade](#grade)
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
**Inleiding Programmeren** (year 1), **FE 1** (year 2), and **FE 2** and
**Backend** (year 2, optional but recommended), amongst others.

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
    — [Sign Up][gh-signup]
*   [x] Text Editor
    — [Sublime][] or [Atom][]
*   [ ] King, Ritchie S.  _Visual Storytelling with D3_.  Addison-Wesley, 2015
    — [Read on GitHub][vs]
*   [ ] Meeks, Elijah.  _D3.js in Action_.  O’Reilly Media, 2017
    — [Read on GitHub][d3ia]
*   [ ] Castillo, Pablo Navarro.  _Mastering D3.js_.  Packt Publishing, 2014
    — [Read on GitHub][mastering-d3]

## Grade

| Task              | Percentage |
| ----------------- | ---------- |
| Participation     | 10%        |
| Oral assessment 1 | 20%        |
| Oral assessment 2 | 30%        |
| Oral assessment 3 | 40%        |
| **Total**         | 100%       |

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

[gh-signup]: https://help.github.com/articles/signing-up-for-a-new-github-account/

[sublime]: http://www.sublimetext.com

[atom]: https://atom.io

[vs]: https://github.com/ritchieking/d3-book

[d3ia]: https://github.com/emeeks/d3_in_action_2

[mastering-d3]: https://github.com/pnavarrc/mastering-d3
