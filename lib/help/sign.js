import { sign } from './crypto_worker.js'
import pae from './pae.js'
import pack from './pack.js'

export default async function signPaseto(h, m, f, alg, key, i, eo) {
  const m2 = pae(eo, h, m, f, i)
  const sig = await sign(alg, m2, key)
  return pack(h, f, m, sig)
}
