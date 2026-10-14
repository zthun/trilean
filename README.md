# Trilean

One day, I wanted to play around with writing a colorful checkbox component. An
HTML checkbox has an
[indeterminate](https://www.w3schools.com/jsref/prop_checkbox_indeterminate.asp)
property.

This was what I needed, but it raised a question: what happens when both
`checked` and `indeterminate` are `true`? The two properties represent separate
states, and the `indeterminate` property must be set with JavaScript rather than
an HTML attribute.

I wanted a single value to represent all three states, so I created this
library. It provides a
[_trilean_](https://en.wikipedia.org/wiki/Three-valued_logic) type whose values
are `true`, `false`, and `ZTrilean.Indeterminate`.

See [@zthun/trilean](./packages/trilean/README.md) for more information.
