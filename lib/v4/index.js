import sign from './sign'
import verify from './verify'
import default_key from './key'
const { generateKey, bytesToKeyObject, keyObjectToBytes } = default_key

export default { sign, verify, generateKey, bytesToKeyObject, keyObjectToBytes }
