import { generateKeyPair as _generateKeyPair, generateKey as _generateKey } from 'node:crypto'
import { promisify } from 'node:util'
import { PasetoNotSupported } from '../errors.js'

const generateKeyPair = promisify(_generateKeyPair)
const generateSecretKey = promisify(_generateKey)

async function generateKey(purpose, { format = 'keyobject' } = {}) {
  if (format !== 'keyobject' && format !== 'paserk') throw new TypeError('invalid format')
  switch (purpose) {
    case 'local': {
      const keyobject = await generateSecretKey('aes', { length: 256 })
      if (format === 'paserk') {
        return `k1.local.${keyobject.export().toString('base64url')}`
      }
      return keyobject
    }
    case 'public': {
      const { privateKey, publicKey } = await generateKeyPair('rsa', { modulusLength: 2048 })
      if (format === 'paserk') {
        return {
          secretKey: `k1.secret.${privateKey
            .export({ format: 'der', type: 'pkcs1' })
            .toString('base64url')}`,
          publicKey: `k1.public.${publicKey
            .export({ format: 'der', type: 'pkcs1' })
            .toString('base64url')}`,
        }
      }
      return privateKey
    }
    default:
      throw new PasetoNotSupported('unsupported v1 purpose')
  }
}

export default generateKey
