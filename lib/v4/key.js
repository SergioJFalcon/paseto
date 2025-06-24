import { _checkPrivateKey, _checkPublicKey, _generateKey, _keyObjectToBytes, bytesToKeyObject } from '../v2/key'

async function generateKey(...args) {
  return _generateKey('v4', ...args)
}

function keyObjectToBytes(...args) {
  return _keyObjectToBytes('v4', ...args)
}

export default {
  _checkPrivateKey,
  _checkPublicKey,
  bytesToKeyObject,
  generateKey,
  keyObjectToBytes,
}
