import { PasetoInvalid } from '../errors.js'

import { strict as assert } from 'node:assert'
import isObject from './is_object.js'

export default (payload) => {
  try {
    const parsed = JSON.parse(payload)
    assert(isObject(parsed))
    return parsed
  } catch {
    throw new PasetoInvalid('All PASETO payloads MUST be a JSON object')
  }
}
