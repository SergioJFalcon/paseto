import sign from './sign.js'
import verify from './verify.js'
import encrypt from './encrypt.js'
import decrypt from './decrypt.js'
import { generateKey, bytesToKeyObject, keyObjectToBytes } from './key.js'

export default { sign, verify, encrypt, decrypt, generateKey, bytesToKeyObject, keyObjectToBytes }
