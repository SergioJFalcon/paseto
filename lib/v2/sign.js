import checkFooter from '../help/check_footer.js'
import checkPayload from '../help/check_payload.js'
import sign from '../help/sign.js'
import { _checkPrivateKey } from './key.js'

const checkKey = _checkPrivateKey.bind(undefined, 'v2')

export default async function v2Sign(payload, key, { footer, ...options } = {}) {
  const m = checkPayload(payload, options)
  key = checkKey(key)
  const f = checkFooter(footer)
  return sign('v2.public.', m, f, undefined, key)
}
