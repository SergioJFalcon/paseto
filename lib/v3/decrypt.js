import crypto_worker from '../help/crypto_worker.js'
import checkKeyHelper from '../help/symmetric_key_check.js'
import checkAssertion from '../help/check_assertion.js'
import consume from '../help/consume.js'

const { 'v3.local-decrypt': decrypt } = crypto_worker
const checkKey = checkKeyHelper.bind(undefined, 'v3.local')

const h = 'v3.local.'

export default async function v3Decrypt(
  token,
  key,
  { complete = false, buffer = false, assertion, ...options } = {},
) {
  const { raw, f } = consume.pre(h, token)
  key = checkKey(key)
  const i = checkAssertion(assertion)
  const k = key.export()
  const m = await decrypt(raw, f, k, i)
  return consume.post('v3', buffer, options, complete, m, f, 'local')
}
