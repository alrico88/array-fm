import { describe, expect, it } from "vite-plus/test";
import { filterAndFlatMap, filterAndMap, flatMapAndFilter, mapAndFilter } from "../src/index.ts";

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

describe("Test filter and map", () => {
  it("Should filter unwanted items and map the expected result", () => {
    expect(
      filterAndMap(
        testArray,
        (d) => d.propA.includes("test"),
        (d) => d.propB * d.propC,
      ),
    ).toStrictEqual([6]);
  });
});

describe("Test map and filter", () => {
  it("Should map to the desired structure and then filter it", () => {
    expect(
      mapAndFilter(
        testArray,
        (d) => d.propB * d.propC,
        (d) => d > 6,
      ),
    ).toStrictEqual([30]);
  });
});

describe("Test filter and flat map", () => {
  it("Should filter items and flatten their mapped results", () => {
    expect(
      filterAndFlatMap(
        testArray,
        (d) => d.propB > 2,
        (d) => [d.propB, d.propC],
      ),
    ).toStrictEqual([3, 10]);
  });
});

describe("Test flat map and filter", () => {
  it("Should flatten mapped results and filter each value", () => {
    expect(
      flatMapAndFilter(
        testArray,
        (d) => [d.propB, d.propC],
        (value) => value > 2,
      ),
    ).toStrictEqual([3, 3, 10]);
  });
});
