import { PasetoVerificationFailed } from '../errors.js'
import { verify } from './crypto_worker.js'
import pae from './pae.js'
import { pre } from './consume.js'

export default async function verifyPaseto(h, token, alg, sigLength, key, i, eo) {
  const { raw, f } = pre(h, token)

  const m = raw.subarray(0, -sigLength)
  const s = raw.subarray(-sigLength)
  const m2 = pae(eo, h, m, f, i)

  if (!(await verify(alg, m2, key, s))) {
    throw new PasetoVerificationFailed('invalid signature')
  }

  return {
    m,
    footer: f.length ? f : undefined,
  }
}
