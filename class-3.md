# Class 3

> Any sufficiently advanced technology is indistinguishable from magic.
> — Arthur C. Clarke

## Table of Contents

*   [Inspiration](#inspiration)
*   [Synopsis](#synopsis)
*   [Schedule](#schedule)
*   [Assignments](#assignments)
*   [Clean](#clean)
*   [Transition](#transition)

## Inspiration

[![][inspiration-cover]][inspiration-link]

> Measurable happiness by [**@nickrttn**][inspiration-author].

## Synopsis

*   **Date**: 05-10 (ID 1), 06-10 (ID 2), or 04-10 (ID 3)
*   **Slides**
*   [**Examples**][examples]

## Schedule

*   Arrays
    ([**subgoal 8**][s8])
*   `d3-array`
    ([**subgoal 8**][s8])
*   Cleaning data
    ([**subgoal 2**][s2] and [**subgoal 8**][s8])
*   `d3-selection`
    ([**subgoal 9**][s9] and [**subgoal 10**][s10])
*   `d3-transition` and `d3-ease`
    ([**subgoal 9**][s9])

## Assignments

Submit your assignments by 7 a.m. the day of [class 4][c4].

*   [Clean][clean] (**practice**)
*   [Transition][transition] (**practice**)

See [class 2][c2] for assignments due before this class.

## Clean

[![][clean-cover]][clean-cover-source]

> Running and water by [**@phammi**][clean-cover-author].

In this assignment you’ll learn to clean and transform data.

### Synopsis

*   **Practice**
*   **Due**: 7 a.m. the day of [class 4][c4]
*   **Results**: [Gallery][clean-gallery]

### Tips

*   [Learn JS Data](http://learnjsdata.com)
    — Learn data cleaning, manipulation, and wrangling

### Description

For this assignment you’re going to load, clean, and transform data so it can
be used in a line chart.

*   First, copy the files `index.html` and `index.txt` from
    [`site/class-3/clean`][clean-starter] to your computer and start a simple
    server.
    If everything went OK, you should see two axes and a temperature label
    when you open the URL of your server in your web browser
*   Go to [knmi][uurgegevens] and select `260 De Bilt`, `285 Huibertgat`, and
    two other weather stations.  Select one day of your choosing by setting the
    start and end date to the same date.  Finally, click **Download dataset**,
    and replace `index.txt` in your directory with the file you just downloaded
*   Open `index.html` in your text editor and add code to clean and transform
    data (you may start at line 105).  Do not change `index.txt` manually.
    Store the clean data in the variable `places`.
    Once your code creates the correct data, you’ll see a
    [line chart][clean-preview]
*   When done, add a `readme.md` file similar to the one from
    [Class 2: Do you readme?!][c2readme] that additionally describes how you
    cleaned the data

Hand in your code in a directory `username` (in my case `wooorm`) to
`site/class-3-clean/` by creating a pull request.  Include `index.html`,
`index.txt`, `readme.md`, and optionally a `preview.png` file.

## Transition

[![][transition-cover]][transition-cover-source]

> Bald man on subway platform by [**@jmduarte**][transition-cover-author].

In this assignment you’ll learn to clean external data.

### Synopsis

*   **Practice**
*   **Due**: 7 a.m. the day of [class 4][c4]
*   **Results**: [Gallery][transition-gallery]

### Tips

*   [A fun, difficult introduction to d3](https://tmcw.github.io/presentations/dcjq/)
    — Presentation by [**@tmcw**](https://github.com/tmcw)
*   [Enter, update, exit](https://medium.com/@c_behrens/enter-update-exit-6cafc6014c36)
    — An Introduction to D3, The Web’s Most Popular Visualisation Toolkit

### Description

TODO.

[inspiration-cover]: images/meetbaar-geluk.jpg

[inspiration-link]: https://nickrttn.github.io/Frontend-3/

[inspiration-author]: https://github.com/nickrttn

[clean-cover]: images/rain.jpg

[clean-cover-source]: https://unsplash.com/photos/FtZL0r4DZYk

[clean-cover-author]: https://unsplash.com/@phammi

[transition-cover]: images/transition.jpg

[transition-cover-source]: https://unsplash.com/photos/Fh1kwPHsCNg

[transition-cover-author]: https://unsplash.com/@jmduarte

[c2]: class-2.md#assignments

[c2readme]: class-2.md#do-you-read-me

[c4]: class-4.md

[examples]: https://cmda-fe3.github.io/course-17-18/class-3/

[s2]: readme.md#subgoal-2

[s8]: readme.md#subgoal-8

[s9]: readme.md#subgoal-9

[s10]: readme.md#subgoal-10

[clean]: #clean

[transition]: #transition

[clean-gallery]: https://cmda-fe3.github.io/course-17-18/class-3-clean/

[transition-gallery]: https://cmda-fe3.github.io/course-17-18/class-3-transition/

[clean-starter]: https://github.com/cmda-fe3/course-17-18/tree/master/site/class-3/clean

[uurgegevens]: http://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi

[clean-preview]: site/class-3/clean/preview.png
