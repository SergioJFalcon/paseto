import checkFooter from '../help/check_footer'
const checkKey = require('../help/symmetric_key_check').bind(undefined, 'v3.local')
import checkPayload from '../help/check_payload'
import checkAssertion from '../help/check_assertion'
import crypto_worker from '../help/crypto_worker'
const { 'v3.local-encrypt': encrypt } = crypto_worker

export default async function v3Encrypt(payload, key, { footer, assertion, ...options } = {}) {
  const m = checkPayload(payload, options)
  key = checkKey(key)
  const f = checkFooter(footer)
  const i = checkAssertion(assertion)
  const k = key.export()
  return encrypt(m, f, k, i)
}
