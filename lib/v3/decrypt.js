import crypto_worker from '../help/crypto_worker.js'
const { 'v3.local-decrypt': decrypt } = crypto_worker
const checkKey = require('../help/symmetric_key_check').bind(undefined, 'v3.local')
import checkAssertion from '../help/check_assertion.js'
import { pre, post } from '../help/consume.js'

const h = 'v3.local.'

export default async function v3Decrypt(
  token,
  key,
  { complete = false, buffer = false, assertion, ...options } = {},
) {
  const { raw, f } = pre(h, token)
  key = checkKey(key)
  const i = checkAssertion(assertion)
  const k = key.export()
  const m = await decrypt(raw, f, k, i)
  return post('v3', buffer, options, complete, m, f, 'local')
}
