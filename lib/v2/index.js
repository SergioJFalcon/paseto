import sign from './sign.js'
import verify from './verify.js'
import keyHelpers from './key.js'

export default { 
  sign, 
  verify, 
  generateKey: keyHelpers.generateKey, 
  bytesToKeyObject: keyHelpers.bytesToKeyObject, 
  keyObjectToBytes: keyHelpers.keyObjectToBytes 
}
