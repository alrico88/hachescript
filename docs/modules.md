[hachescript](README.md) / Exports

# hachescript

## Table of contents

### Interfaces

- [HTMLAttrs](interfaces/htmlattrs.md)
- [Selector](interfaces/selector.md)

### Functions

- [h](modules.md#h)
- [joinArrayOfH](modules.md#joinarrayofh)
- [parseSelector](modules.md#parseselector)

## Functions

### h

▸ **h**(`selector`: *string*, `content`: *string* \| *string*[], `attributes?`: [*HTMLAttrs*](interfaces/htmlattrs.md)): *string*

Creates an HTML string from a selector, content, and attributes

**`example`** h('div#welcome', 'hello world', {class: 'text-muted'}) // returns "<div id="welcome" class="text-muted">hello world</div>"

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`selector` | *string* | The tag with optional ID (#) and classNames (.). If no tag is provided, a <div> will be used   |
`content` | *string* \| *string*[] | The content of the HTML. Can be a simple string or an array of hachescript-created HTML strings   |
`attributes` | [*HTMLAttrs*](interfaces/htmlattrs.md) | - |

**Returns:** *string*

The resulting HTML string

Defined in: [index.ts:18](https://github.com/alrico88/hachescript/blob/1b10fdc/src/index.ts#L18)

___

### joinArrayOfH

▸ **joinArrayOfH**(`array`: *string*[], `separator?`: *string*): *string*

Joins an array of hachescript strings together
An Array.join shorthand

**`export`** 

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`array` | *string*[] | - | The array of hachescript strings, or any string, to join together   |
`separator` | *string* | '' | - |

**Returns:** *string*

The joined string

Defined in: [index.ts:47](https://github.com/alrico88/hachescript/blob/1b10fdc/src/index.ts#L47)

___

### parseSelector

▸ **parseSelector**(`selector`: *string*, `attributes?`: [*HTMLAttrs*](interfaces/htmlattrs.md)): [*Selector*](interfaces/selector.md)

Parses a selector into tag, id, and classNames

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`selector` | *string* | The HTML selector. Supports tag, #id, and .class.names   |
`attributes` | [*HTMLAttrs*](interfaces/htmlattrs.md) | - |

**Returns:** [*Selector*](interfaces/selector.md)

Defined in: [modules/parser.ts:97](https://github.com/alrico88/hachescript/blob/1b10fdc/src/modules/parser.ts#L97)
