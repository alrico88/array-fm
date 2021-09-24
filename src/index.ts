export type FilterFn<F> = (item: F) => boolean;
export type MapFn<T, Y> = (item: T) => Y;

/**
 * Perform a filter on a collection and map the result
 *
 * @export
 * @template T
 * @template Y
 * @param {T[]} array Array to filter and map
 * @param {FilterFn<T>} filterFn Function to filter the array
 * @param {MapFn<T, Y>} mapFn Function to map the filtered array
 * @return {Y[]}
 */
export function filterAndMap<T, Y>(array: T[], filterFn: FilterFn<T>, mapFn: MapFn<T, Y>): Y[] {
  return array.reduce((agg, item) => {
    if (filterFn(item)) {
      agg.push(mapFn(item));
    }

    return agg;
  }, [] as Y[]);
}

/**
 * Perform a map on an array and filter the result
 *
 * @export
 * @template T
 * @template Y
 * @param {T[]} array Array to map and filter
 * @param {MapFn<T, Y>} mapFn Function to map the array
 * @param {FilterFn<Y>} filterFn Function to filter the resulting mapped array
 * @return {Y[]}
 */
export function mapAndFilter<T, Y>(array: T[], mapFn: MapFn<T, Y>, filterFn: FilterFn<Y>): Y[] {
  return array.reduce((agg, item) => {
    const val = mapFn(item);

    if (filterFn(val)) {
      agg.push(val);
    }

    return agg;
  }, [] as Y[]);
}
