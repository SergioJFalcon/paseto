import { encode } from './base64url.js'

export default function pack(header, footer, ...payload) {
  let token = `${header}${encode(Buffer.concat(payload))}`
  if (footer.byteLength) {
    token += `.${encode(footer)}`
  }
  return token
}
