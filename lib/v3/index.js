import sign from './sign'
import verify from './verify'
import encrypt from './encrypt'
import decrypt from './decrypt'
import { generateKey, bytesToKeyObject, keyObjectToBytes } from './key'

export default { sign, verify, encrypt, decrypt, generateKey, bytesToKeyObject, keyObjectToBytes }
