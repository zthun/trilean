# Trilean

Adds a three state logic type. The values can be true, false, and indeterminate.

## Installation

```sh
# NPM
npm install @zthun/trilean
# Yarn
yarn add @zthun/trilean
```

## Usage

```ts
import { trilean, ZTrilean } from '@zthun/trilean';

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
ZTrilean.parse('true');
// Returns false
ZTrilean.parse('false');
// Returns ZTrilean.Indeterminate
ZTrilean.parse('indeterminate');
// Returns false
ZTrilean.parse(null);
// Returns true fallback.
ZTrilean.parse('not-a-trilean', true);

// Returns true
ZTrilean.is(true);
ZTrilean.is(false);
ZTrilean.is(ZTrilean.Indeterminate);
// Returns false
ZTrilean.is('string is not a trilean');
// Returns true - This is mostly for typescript type guard support.
ZTrilean.isIndeterminate(ZTrilean.Indeterminate);

// Convert any value to a trilean.
const kindaTrue = ZTrilean.convert('A truthy value');
const kindaFalse = ZTrilean.convert(0);
const alsoIndeterminate = ZTrilean.convert(ZTrilean.Indeterminate);
```
