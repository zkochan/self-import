# self-import

> Allows requiring of own modules like dependency modules

[![npm version](https://img.shields.io/npm/v/self-import.svg?style=flat-square)](https://www.npmjs.com/package/self-import) [![Build Status](https://img.shields.io/travis/zkochan/self-import/master.svg?style=flat-square)](https://travis-ci.org/zkochan/self-import)

Access your modules via `require('foo')` instead of long relative paths like `require('../../..')`. Inspired by [require-self](https://github.com/yortus/require-self).

## Background

Usually packages include tests and examples in their repos. This code needs to require the module itself.

But whereas modules depending on `foo` can write `require('foo')`, the test and example code within `foo`
cannot reliably require itself that way. It must use a relative path like `var foo = require('../..')` instead.

Being able to do `require('foo')` instead of `require('..')` has a few advantages. The code can be moved around.
Example code is a tad clearer and can be reused in a client module without changes. And if you are authoring in
TypeScript, then `import foo = require('foo')` picks up all the static type info from `foo.d.ts`, exactly as
a client module would see it.

## Installation

```
npm i -D self-import
```

## Usage

Call `self-import` in your package's prepublish script.

```json5
{
  // ...
  "scripts": {
    "prepublish": "self-import"
  },
  "devDependencies": {
    // ...
    "self-import": "*"
  }
}
```

## Programmatic usage

```js
const selfImport = require('self-import')

selfImport('/home/src/foo').then(() => console.log('Done!'))
```

## License

[MIT](LICENSE) © [Zoltan Kochan](http://kochan.io)
