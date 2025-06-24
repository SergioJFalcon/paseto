import checkFooter from '../help/check_footer'
import checkPayload from '../help/check_payload'
import checkAssertion from '../help/check_assertion'
import sign from '../help/sign'
import default_key from './key'

const { _checkPrivateKey } = default_key
const checkKey = _checkPrivateKey.bind(undefined, 'v4')

export default async function v4Sign(payload, key, { footer, assertion, ...options } = {}) {
  const m = checkPayload(payload, options)
  const i = checkAssertion(assertion)
  key = checkKey(key)
  const f = checkFooter(footer)
  return sign('v4.public.', m, f, undefined, key, i)
}
