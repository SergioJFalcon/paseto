import crypto_worker from '../help/crypto_worker.js'
import checkKeyHelper from '../help/symmetric_key_check.js'
import consume from '../help/consume.js'

const { 'v1.local-decrypt': decrypt } = crypto_worker
const checkKey = checkKeyHelper.bind(undefined, 'v1.local')

const h = 'v1.local.'

export default async function v1Decrypt(
  token,  key,
  { complete = false, buffer = false, ...options } = {},
) {
  const { raw, f } = consume.pre(h, token)
  key = checkKey(key)
  const k = key.export()
  const m = await decrypt(raw, f, k)
  return consume.post('v1', buffer, options, complete, m, f, 'local')
}
