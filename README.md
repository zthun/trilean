# Trilean

One day, I wanted to play around with writing a colorful checkbox component. If
you look at the docs for an HTML input, you will find that it has an
[indeterminate](https://www.w3schools.com/jsref/prop_checkbox_indeterminate.asp)
property.

This is great and is what I needed, except that now my input can have this
bizarre mystery state of what happens when value is true and indeterminate is
true? What happens if checked then returns true and indeterminate returns true.
You can't set this property via html; you have to set it with JavaScript.

This is goofy as you have competing variables where you have to force a
priority. The solution to this is to change the actual value type, thus, I
created this library which implements a
[_trilean_](https://en.wikipedia.org/wiki/Three-valued_logic) type.

See [@zthun/trilean](./packages/trilean/README.md) for more information.
