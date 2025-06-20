const { KeyObject } = require('node:crypto')
let { isKeyObject } = require('node:util/types')

if (!isKeyObject) {
  isKeyObject = (obj) => obj != null && obj instanceof KeyObject
}

module.exports = isKeyObject
