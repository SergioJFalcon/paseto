import checkFooter from '../help/check_footer'
import checkPayload from '../help/check_payload'
import sign from '../help/sign'
import { _checkPrivateKey } from './key'

const checkKey = _checkPrivateKey.bind(undefined, 'v2')

export default async function v2Sign(payload, key, { footer, ...options } = {}) {
  const m = checkPayload(payload, options)
  key = checkKey(key)
  const f = checkFooter(footer)
  return sign('v2.public.', m, f, undefined, key)
}
