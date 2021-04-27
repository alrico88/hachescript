hachescript / [Exports](modules.md)

# hachescript

![](https://badgen.net/github/release/alrico88/hachescript) ![](https://badgen.net/bundlephobia/min/hachescript) ![](https://badgen.net/travis/alrico88/hachescript/master) ![](https://badgen.net/coveralls/c/github/alrico88/hachescript/master)

Create HTML strings using JavaScript, anywhere. Like [Hyperscript](https://github.com/hyperhype/hyperscript) but faster, and without the overhead of creating actual HTML elements.

## Installation

Using npm, `npm i hachescript`.

Using yarn, `yarn add hachescript`.

## Usage

Using `import`

```javascript
import { h } from 'hachescript';

const str = h(
  'div#myId.myClass', // the selector. supports ID and multiple classes
  'hello world', // The content. Can be a simple string, another HTML tag created by hachescript, or an array of them
  {
    dataIndex: 'hello',
    class: ['text-muted', 'text-primary'],
  } // Additional attributes. camelCase will be converted to kebab-case
);

// str is '<div id="myId" class="myClass text-muted text-primary" data-index="hello">hello world</div>'
```

In a CommonJS environment

```javascript
const { h } = require('hachescript');

const str = h(
  'img', // self closing tags will be detected
  '', // Always provide a content nevertheless
  {
    src: 'dog.png',
    class: 'rounded',
  }
);

// str is '<img class="rounded" src="dog.png"/>'
```

## Documentation

See [DOCS](./docs/modules.md)
