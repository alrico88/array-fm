array-fm / [Exports](modules.md)

# array-fm

Perform filter + map or map + filter operations on an array in one go

## Installation

Using npm:

`npm i array-fm`

Using yarn:

`yarn add array-fm`

## Usage

Using CommonJS

```javascript
const { filterAndMap } = require('array-fm');
```

Using imports

```javascript
import { mapAndFilter } from 'array-fm';
```

Then

```javascript
const testArray = [
  {
    propA: 'This is a test',
    propB: 2,
    propC: 3,
  },
  {
    propA: 'This is not',
    propB: 3,
    propC: 10,
  },
];

filterAndMap(
  testArray,
  (d) => d.propA.includes('test'),
  (d) => d.propB * d.propC,
) // Returns [6]

mapAndFilter(
  testArray,
  (d) => d.propB * d.propC,
  (d) => d > 6,
) // Returns [30]
```

## Documentation

See [DOCS](./docs/modules.md)
