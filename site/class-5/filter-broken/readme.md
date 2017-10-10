# Broken Filter

A broken (but interesting) visualisation of random polka dots with filtering
using joins based on a [`bl.ock`][block] by [**@mbostock**][block-author]
(GPL-3.0).

[![][cover]][url]

## Background

Why is this “broken”?  One might think that the update would not need to update
`cx` or `cy` on the circles.  But, d3 does not know which datum matches which
circle.  Say you have 50 circles, and a second later you have only 25.
d3 doesn’t know which datums left.  Maybe some new ones actually appeared?
d3 will bind by index, by default.  Concretely, it won’t know which datum
pairs to which circle. To fix, either update `cx` and `cy` in the update part
too, or pass a `key` function to `selection.data`.

## Features

*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.extent` and `d3.range`
    — Array stats and transforms
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Select elements

## License

GPL-3.0 © Titus Wormer

[block]: https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-5/filter-broken/
