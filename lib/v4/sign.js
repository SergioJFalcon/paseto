import checkFooter from '../help/check_footer.js'
import checkPayload from '../help/check_payload.js'
import checkAssertion from '../help/check_assertion.js'
import sign from '../help/sign.js'
import { _checkPrivateKey } from './key.js'

const checkKey = _checkPrivateKey.bind(undefined, 'v4')

export default async function v4Sign(payload, key, { footer, assertion, ...options } = {}) {
  const m = checkPayload(payload, options)
  const i = checkAssertion(assertion)
  key = checkKey(key)
  const f = checkFooter(footer)
  return sign('v4.public.', m, f, undefined, key, i)
}
