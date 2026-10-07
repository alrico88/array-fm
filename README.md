# array-fm

Perform filter + map or map + filter operations on an array in one go

## Installation

Using pnpm:

`pnpm add array-fm`

Using npm:

`npm install array-fm`

## Usage

Using CommonJS

```javascript
const { filterAndMap } = require("array-fm");
```

Using imports

```javascript
import { mapAndFilter } from "array-fm";
```

Then

```javascript
const testArray = [
  {
    propA: "This is a test",
    propB: 2,
    propC: 3,
  },
  {
    propA: "This is not",
    propB: 3,
    propC: 10,
  },
];

filterAndMap(
  testArray,
  (d) => d.propA.includes("test"),
  (d) => d.propB * d.propC,
); // Returns [6]

mapAndFilter(
  testArray,
  (d) => d.propB * d.propC,
  (d) => d > 6,
); // Returns [30]

filterAndFlatMap(
  testArray,
  (d) => d.propB > 2,
  (d) => [d.propB, d.propC],
); // Returns [3, 10]

flatMapAndFilter(
  testArray,
  (d) => [d.propB, d.propC],
  (value) => value > 2,
); // Returns [3, 3, 10]
```

## Documentation

See [DOCS](./docs/modules.md)

## Development

```sh
vp install
vp check
vp test
vp pack
```
