# Trilean

Provides a three-state logic type whose values are `true`, `false`, and
`ZTrilean.Indeterminate`. The indeterminate value is the string
`"indeterminate"`, rather than `null` or `undefined`.

## Installation

```sh
# npm
npm install @zthun/trilean
# Yarn
yarn add @zthun/trilean
```

## Usage

```ts
import { ZTrilean, type trilean } from "@zthun/trilean";

const checked: trilean = true;
const unchecked: trilean = false;
const indeterminate: trilean = ZTrilean.Indeterminate;

// Returns 'true'
ZTrilean.stringify(checked);
// Returns 'false'
ZTrilean.stringify(unchecked);
// Returns 'indeterminate'
ZTrilean.stringify(indeterminate);

// Returns true
ZTrilean.parse("true");
// Returns false
ZTrilean.parse("false");
// Returns ZTrilean.Indeterminate
ZTrilean.parse("indeterminate");
// Returns false
ZTrilean.parse(null);
// Returns the fallback value, true
ZTrilean.parse("not-a-trilean", true);

// Returns true
ZTrilean.is(true);
ZTrilean.is(false);
ZTrilean.is(ZTrilean.Indeterminate);
// Returns false
ZTrilean.is("string is not a trilean");
// Returns true and narrows the type to indeterminate
ZTrilean.isIndeterminate(ZTrilean.Indeterminate);

// Convert values to trileans.
ZTrilean.convert(1); // true
ZTrilean.convert(0); // false
ZTrilean.convert("TRUE"); // true
ZTrilean.convert("A truthy value"); // false (the default fallback)
ZTrilean.convert("A truthy value", true); // true (the supplied fallback)
ZTrilean.convert(null, ZTrilean.Indeterminate); // ZTrilean.Indeterminate
ZTrilean.convert(ZTrilean.Indeterminate); // ZTrilean.Indeterminate
```

`ZTrilean.parse` accepts `"true"`, `"false"`, and `"indeterminate"` without
regard to case. It does not trim whitespace. Unrecognized strings, `null`, and
`undefined` return the supplied fallback, which defaults to `false`.

`ZTrilean.convert` preserves trilean values, parses strings with
`ZTrilean.parse`, and returns the fallback for `null` or `undefined`. All other
values are converted to booleans according to their truthiness.

`ZTrilean.is` and `ZTrilean.isIndeterminate` are TypeScript type guards. Use
`ZTrilean.is` to check whether an unknown value is a trilean, and
`ZTrilean.isIndeterminate` to check whether a trilean is indeterminate.
