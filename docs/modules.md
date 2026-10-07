[array-fm](README.md) / Exports

# array-fm

## Table of contents

### Type aliases

- [FilterFn](modules.md#filterfn)
- [MapFn](modules.md#mapfn)

### Functions

- [filterAndMap](modules.md#filterandmap)
- [filterAndFlatMap](modules.md#filterandflatmap)
- [flatMapAndFilter](modules.md#flatmapandfilter)
- [mapAndFilter](modules.md#mapandfilter)

## Type aliases

### FilterFn

Ƭ **FilterFn**<`F`\>: (`item`: `F`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `F` |

#### Type declaration

▸ (`item`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `F` |

##### Returns

`boolean`

#### Defined in

index.ts:1

___

### MapFn

Ƭ **MapFn**<`T`, `Y`\>: (`item`: `T`) => `Y`

#### Type parameters

| Name |
| :------ |
| `T` |
| `Y` |

#### Type declaration

▸ (`item`): `Y`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

##### Returns

`Y`

#### Defined in

index.ts:2

## Functions

### filterAndMap

▸ **filterAndMap**<`T`, `Y`\>(`array`, `filterFn`, `mapFn`): `Y`[]

Perform a filter on a collection and map the result

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |
| `Y` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | Array to filter and map |
| `filterFn` | [`FilterFn`](modules.md#filterfn)<`T`\> | Function to filter the array |
| `mapFn` | [`MapFn`](modules.md#mapfn)<`T`, `Y`\> | Function to map the filtered array |

#### Returns

`Y`[]

#### Defined in

index.ts:15

___

### mapAndFilter

▸ **mapAndFilter**<`T`, `Y`\>(`array`, `mapFn`, `filterFn`): `Y`[]

Perform a map on an array and filter the result

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |
| `Y` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | Array to map and filter |
| `mapFn` | [`MapFn`](modules.md#mapfn)<`T`, `Y`\> | Function to map the array |
| `filterFn` | [`FilterFn`](modules.md#filterfn)<`Y`\> | Function to filter the resulting mapped array |

#### Returns

`Y`[]

#### Defined in

index.ts:36

___

### filterAndFlatMap

▸ **filterAndFlatMap**<`T`, `Y`>(`array`, `filterFn`, `mapFn`): `Y`[]

Filter a collection, then map each matching item to multiple values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | Array to filter and flatten |
| `filterFn` | [`FilterFn`](modules.md#filterfn)<`T`\> | Function to filter the array |
| `mapFn` | [`MapFn`](modules.md#mapfn)<`T`, `Y`[]\> | Function to map each matching item to an array |

#### Returns

`Y`[]

#### Defined in

index.ts:53

___

### flatMapAndFilter

▸ **flatMapAndFilter**<`T`, `Y`>(`array`, `mapFn`, `filterFn`): `Y`[]

Map each item to multiple values, then filter the flattened result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | Array to map and filter |
| `mapFn` | [`MapFn`](modules.md#mapfn)<`T`, `Y`[]\> | Function to map each item to an array |
| `filterFn` | [`FilterFn`](modules.md#filterfn)<`Y`\> | Function to filter the flattened values |

#### Returns

`Y`[]

#### Defined in

index.ts:77
