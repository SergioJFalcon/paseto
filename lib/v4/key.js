import v2KeyHelpers from '../v2/key.js';

const { 
  _checkPrivateKey, 
  _checkPublicKey, 
  _generateKey, 
  _keyObjectToBytes, 
  bytesToKeyObject: v2BytesToKeyObject 
} = v2KeyHelpers;

export async function generateKey(...args) {
  return _generateKey('v4', ...args);
}

export function keyObjectToBytes(...args) {
  return _keyObjectToBytes('v4', ...args);
}

// Re-export the functions you need from the other module
export { _checkPrivateKey, _checkPublicKey };
export { v2BytesToKeyObject as bytesToKeyObject };