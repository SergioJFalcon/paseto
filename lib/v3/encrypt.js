import checkFooter from '../help/check_footer.js'
import checkKeyHelper from '../help/symmetric_key_check.js'
import checkPayload from '../help/check_payload.js'
import checkAssertion from '../help/check_assertion.js'
import crypto_worker from '../help/crypto_worker.js'

const checkKey = checkKeyHelper.bind(undefined, 'v3.local')
const { 'v3.local-encrypt': encrypt } = crypto_worker

export default async function v3Encrypt(payload, key, { footer, assertion, ...options } = {}) {
  const m = checkPayload(payload, options)
  key = checkKey(key)
  const f = checkFooter(footer)
  const i = checkAssertion(assertion)
  const k = key.export()
  return encrypt(m, f, k, i)
}
