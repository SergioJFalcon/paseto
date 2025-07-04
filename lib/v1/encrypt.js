import checkFooter from '../help/check_footer.js'
import checkKeyHelper from '../help/symmetric_key_check.js'
import checkPayload from '../help/check_payload.js'
import crypto_worker from '../help/crypto_worker.js'

const checkKey = checkKeyHelper.bind(undefined, 'v1.local')
const { 'v1.local-encrypt': encrypt } = crypto_worker

export default async function v1Encrypt(payload, key, { footer, ...options } = {}) {
  const m = checkPayload(payload, options)
  key = checkKey(key)
  const f = checkFooter(footer)
  const k = key.export()
  return encrypt(m, f, k)
}
