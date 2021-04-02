[hachescript](README.md) / Exports

# hachescript

## Table of contents

### Interfaces

- [HTMLAttrs](interfaces/htmlattrs.md)

### Functions

- [h](modules.md#h)
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

Defined in: [index.ts:18](https://github.com/alrico88/hachescript/blob/54209dc/src/index.ts#L18)

___

### parseSelector

▸ **parseSelector**(`selector`: *string*, `attributes?`: [*HTMLAttrs*](interfaces/htmlattrs.md)): Selector

Parses a selector into tag, id, and classNames

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`selector` | *string* | The HTML selector. Supports tag, #id, and .class.names   |
`attributes` | [*HTMLAttrs*](interfaces/htmlattrs.md) | - |

**Returns:** Selector

Defined in: [modules/parser.ts:91](https://github.com/alrico88/hachescript/blob/54209dc/src/modules/parser.ts#L91)
