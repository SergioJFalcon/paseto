import sign from './sign.js'
import verify from './verify.js'
import encrypt from './encrypt.js'
import decrypt from './decrypt.js'
import keyHelpers from './key.js'

export default { 
  sign, 
  verify, 
  encrypt, 
  decrypt, 
  generateKey: keyHelpers.generateKey, 
  bytesToKeyObject: keyHelpers.bytesToKeyObject, 
  keyObjectToBytes: keyHelpers.keyObjectToBytes 
}
