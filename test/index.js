'use strict'
const selfImport = require('self-import')
const path = require('path')
const test = require('tape')

test('link simple pkg', t => {
  const pkgPath = path.join(__dirname, 'simple-pkg')
  selfImport(pkgPath)
    .then(() => {
      t.equal(require('./simple-pkg/node_modules/simple-pkg/package.json').name, 'simple-pkg')
      t.end()
    })
})

test('link scoped pkg', t => {
  const pkgPath = path.join(__dirname, 'scoped-pkg')
  selfImport(pkgPath)
    .then(() => {
      t.equal(require('./scoped-pkg/node_modules/@scoped/pkg/package.json').name, '@scoped/pkg')
      t.end()
    })
})
