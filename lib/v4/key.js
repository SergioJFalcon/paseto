import { 
  _checkPrivateKey, 
  _checkPublicKey, 
  _generateKey, 
  _keyObjectToBytes, 
  bytesToKeyObject as v2BytesToKeyObject // Rename to avoid conflict
} from '../v2/key.js'; // <-- Don't forget .js!

export async function generateKey(...args) {
  return _generateKey('v4', ...args);
}

export function keyObjectToBytes(...args) {
  return _keyObjectToBytes('v4', ...args);
}

// Re-export the functions you need from the other module
export { _checkPrivateKey, _checkPublicKey };
export { v2BytesToKeyObject as bytesToKeyObject };