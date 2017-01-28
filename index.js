'use strict'
const path = require('path')
const symlinkDir = require('symlink-dir').default
const loadJsonFile = require('load-json-file')

module.exports = pkgDir => {
  const pkgJsonPath = path.join(pkgDir, 'package.json')
  const pkg = loadJsonFile.sync(pkgJsonPath)
  const dest = path.join('node_modules', pkg.name)

  return symlinkDir(pkgDir, dest)
}
