# ![Assessment 1][banner]

## Table of Contents

*   [Synopsis](#synopsis)
*   [Description](#description)
*   [Goals](#goals)
*   [Data](#data)
*   [Rubric](#rubric)

## Synopsis

*   **Weight**: 20%
*   **Type**: Remote
*   **Grade**: [Rubric][]
*   **Due**: 04-10 12:00 (ID 1), 05-10 15:20 (ID 2), 03-10 15:20 (ID 3)

## Description

In **assessment 1** you’ll make a [basic][] visualisation from given [data][].

You _may_ use [other data][other-data] but that probably means you’ll have to
clean it yourself.  Cleaning data is hard and we’ll cover that in [class 3][c3].
If you want to clean data, you must do so with code and hand in this code too.

We’ll check how you apply d3, whether you understand what’s happening, how well
data is represented, and quality of your code and documentation.

For this assessment you’ll build a project in your own repo on GitHub and host
the project through [GitHub Pages][pages].  First, fork
[`cmda-fe3/fe3-assessment-1`][starter-code].  Then, work on your project and
upload the final results to your fork either using Git or the GitHub interface
as covered in [class 1][c1].

## Goals

**Assessment 1** tests that you’ve attained the following knowledge:

*   [SVG and canvas][s1]
*   [Load external data][s2]
*   [Read][s3] and [write][s4] docs
*   [Debug][s5] and [refactor][s6] code
*   Use [scales][s7]

## Data

### Monthly temperature time series

Homogenised monthly temperature time series of De Bilt (1901-present).  Cleaned
from [`knmi.nl`][temperature-source].

Download [`assessment-1/temperature.csv`][temperature-clean].

###### Format

Comma-separated values (CSV) with 1400 rows and two columns:

*   `date` — Date in `YYYYMMDD`
*   `temp` — Homogenised monthly temperature in degrees celsius

###### Example

```csv
date,temp
19010131,-0.424
19010228,-0.761
19010331,3.369
19010430,8.782
19010531,12.181
...
20170430,8.44
20170531,14.854
20170630,17.926
20170731,17.828
20170831,17.131
```

### Top languages by number of speaker

Languages listed as having 50 million or more speakers.  Crawled from
[`wikipedia.org`][languages-source].

Download [`assessment-1/languages.tsv`][languages-clean].

###### Format

Tab-separated values (TSV) with 26 rows and two columns:

*   `language` — Name of language
*   `speakers` — Estimated number of total speakers

###### Example

<!--lint disable no-tabs-->

```tsv
language	speakers
Mandarin Chinese	1090000000
English	983000000
Hindustani	544000000
Spanish	527000000
Arabic	422000000
...
Marathi	74000000
Yue Chinese	72000000
Turkish	71000000
Vietnamese	68000000
Italian	66000000
```

<!--lint enable no-tabs-->

### Population without indoor toilet

Percentage of the population living in a dwelling without indoor flushing toilet
for the sole use of the household.  Cleaned from
[`data.europa.eu`][toilets-source].

Download [`assessment-1/toilets.json`][toilets-clean].

###### Format

JavaScript Object Notation (JSON) with 34 rows and 2+ columns:

*   `code` — ISO 3166-1 country code
*   `country` — Human readable country name
*   `2005`  …  `2016` — Percentage of population without a toilet if known
    and `null` otherwise

###### Example

```js
[
  {
    "2005": 1.5,
    "2006": 0.9,
    "2007": 1.5,
    "2008": 1.5,
    "2009": 1.3,
    "2010": 1.2,
    "2011": 1.2,
    "2012": 1,
    "2013": 1,
    "2014": 1,
    "2015": 1,
    "2016": 0.9,
    "code": "AT",
    "country": "Austria"
  },
  // ...
  {
    "2005": 1,
    "2006": 0.8,
    "2007": 0.8,
    "2008": 0.6,
    "2009": 0.5,
    "2010": 0.5,
    "2011": 0.1,
    "2012": 0.3,
    "2013": 0.2,
    "2014": 0.4,
    "2015": 0.4,
    "2016": 0.4,
    "code": "GB",
    "country": "United Kingdom"
  }
]
```

### Other data

Feel free to use other data sets.  For example, from:

*   [`data.amsterdam.nl`](https://data.amsterdam.nl)
    — Amsterdam city data
*   [`data.overheid.nl`](https://data.overheid.nl)
    — Dutch national data
*   [`cbs.nl`](https://www.cbs.nl/en-gb/figures)
    — Data of Statistics Netherlands
*   [`projects.knmi.nl`](https://projects.knmi.nl/klimatologie)
    — Weather data in the Netherlands
*   [`data.europa.eu`](https://data.europa.eu/euodp/en/home)
    — European Union open data
*   [`data.un.org`](http://data.un.org)
    — United Nations data
*   [`data.oecd.org`](https://data.oecd.org)
    — Organisation for Economic Co-operation and Development data
*   [`fivethirtyeight/data`](https://github.com/fivethirtyeight/data)
    — Data and code behind stories and interactives at
    [FiveThirtyEight](http://fivethirtyeight.com)

## Rubric

<!--lint disable no-html maximum-line-length-->

<table>
  <thead>
    <tr>
      <th></th>
      <th><strong>1-2</strong></th>
      <th><strong>3-4</strong></th>
      <th><strong>5-6</strong></th>
      <th><strong>7-8</strong></th>
      <th><strong>9-10</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th align="center" scope="row">Representation</th>
      <td align="center">There is no data, no visualisation, or data is barely used in the visualisation (if at all)</td>
      <td align="center">Data and a visualisation exist but interpreting the visualisation is harder than interpreting the data itself</td>
      <td align="center">Data is displayed in a visualisation based on an example</td>
      <td align="center">The visualisation goes beyond an example; There are demonstrable additions and the student can name them</td>
      <td align="center">🎓<br>Several of the data’s dimensions are beautifully visualised</td>
    </tr>
    <tr>
      <th align="center" scope="row">Application of subject matter</th>
      <td align="center">d3 is either not referenced or not used</td>
      <td align="center">d3 is either used to load data or to make a dynamic visualisation</td>
      <td align="center">d3 is used to load data <strong>and</strong> to make a dynamic visualisation</td>
      <td align="center">The visualisation contains a well-chosen scale, axes, or other useful additions</td>
      <td align="center">😱<br>The way the student applies d3 is more advanced than what they were taught in class; let’s switch places</td>
    </tr>
    <tr>
      <th align="center" scope="row">Understanding</th>
      <td align="center">There is either no substantial code or the student cannot explain the code that exists</td>
      <td align="center">The student cannot explain parts of the code</td>
      <td align="center">The student can explain every part of the code</td>
      <td align="center">The student can explain every part of the code and describe why it’s used instead of alternatives</td>
      <td align="center">🤓<br>The student understands JavaScript and d3’s programming principles and a geeky / nerdy conversation can be held about these principles</td>
    </tr>
    <tr>
      <th align="center" scope="row">Quality</th>
      <td align="center">The project is handed in late, broken, undocumented, or otherwise not proper</td>
      <td align="center">Code style is inconsistent or code is partially documented</td>
      <td align="center">Code adheres to standards and docs cover what the project is and does</td>
      <td align="center">Code quality is consistently good and docs are professional</td>
      <td align="center">📚<br>Code and docs both read like great books</td>
    </tr>
  </tbody>
</table>

<!--lint enable no-html maximum-line-length-->

[banner]: https://cdn.rawgit.com/cmda-fe3/logo/3b150735/banner-assessment-1.svg

[basic]: https://github.com/d3/d3/wiki/Gallery#basic-charts

[starter-code]: https://github.com/cmda-fe3/fe3-assessment-1

[data]: #data

[rubric]: #rubric

[other-data]: #other-data

[c1]: ../class-1.md

[c3]: ../class-3.md

[s1]: ../readme.md#subgoal-1

[s2]: ../readme.md#subgoal-2

[s3]: ../readme.md#subgoal-3

[s4]: ../readme.md#subgoal-4

[s5]: ../readme.md#subgoal-5

[s6]: ../readme.md#subgoal-6

[s7]: ../readme.md#subgoal-7

[temperature-source]: https://www.knmi.nl/kennis-en-datacentrum/achtergrond/gehomogeniseerde-reeks-maandtemperaturen-de-bilt

[temperature-clean]: temperature.csv

[languages-source]: https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers

[languages-clean]: languages.tsv

[toilets-source]: https://data.europa.eu/euodp/en/data/dataset/uuXBX1CHvFKRWmCuLAKA

[toilets-clean]: toilets.json

[pages]: https://pages.github.com
