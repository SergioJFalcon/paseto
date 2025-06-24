import checkAssertion from '../help/check_assertion.js'
import verify from '../help/verify.js'
import { _checkPublicKey } from './key.js'
import consume from '../help/consume.js'

const checkKey = _checkPublicKey.bind(undefined, 'v4')

export default async function v4Verify(
  token,
  key,
  { complete = false, buffer = false, assertion, ...options } = {},
) {
  key = checkKey(key)
  const i = checkAssertion(assertion)

  const { m, footer } = await verify('v4.public.', token, undefined, 64, key, i)

  return consume.post('v4', buffer, options, complete, m, footer, 'public')
}
