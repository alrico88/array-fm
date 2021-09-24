import { filterAndMap, mapAndFilter } from '../src';

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

describe('Test filter and map', () => {
  it('Should filter unwanted items and map the expected result', () => {
    expect(filterAndMap(
      testArray,
      (d) => d.propA.includes('test'),
      (d) => d.propB * d.propC,
    )).toStrictEqual([6]);
  });
});

describe('Test map and filter', () => {
  it('Should map to the desired structure and then filter it', () => {
    expect(mapAndFilter(
      testArray,
      (d) => d.propB * d.propC,
      (d) => d > 6,
    )).toStrictEqual([30]);
  });
});
