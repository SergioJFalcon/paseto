import { createPrivateKey } from 'node:crypto'

import checkFooter from '../help/check_footer.js'
import checkPayload from '../help/check_payload.js'
import checkAssertion from '../help/check_assertion.js'
import sign from '../help/sign.js'
import isKeyObject from '../help/is_key_object.js'
import keyHelpers from './key.js'
import compressPk from '../help/compress_pk.js'

function checkKey(key) {
  if (typeof key === 'string' && key.startsWith('k3.secret.')) {
    try {
      key = Buffer.from(key.slice(10), 'base64url')
      assert.strictEqual(key.byteLength, 48)
    } catch {}
  }
  if (Buffer.isBuffer(key)) {
    try {
      key = keyHelpers.bytesToKeyObject(key)
    } catch {}
  }

  if (!isKeyObject(key)) {
    try {
      key = createPrivateKey(key)
    } catch {}
  }

  if (!isKeyObject(key)) {
    throw new TypeError('invalid key provided')
  }

  if (
    key.type !== 'private' ||
    key.asymmetricKeyType !== 'ec' ||
    key.asymmetricKeyDetails.namedCurve !== 'secp384r1'
  ) {
    throw new TypeError('v3.public signing key must be a private EC P-384 key')
  }

  return key
}

export default async function v3Sign(payload, key, { footer, assertion, ...options } = {}) {
  const m = checkPayload(payload, options)
  const f = checkFooter(footer)
  const i = checkAssertion(assertion)
  key = checkKey(key)
  return sign('v3.public.', m, f, 'sha384', { key, dsaEncoding: 'ieee-p1363' }, i, compressPk(key))
}
