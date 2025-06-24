import { PasetoInvalid } from '../errors.js'

import { strict as assert } from 'assert'
import isObject from './is_object'

export default (payload) => {
  try {
    const parsed = JSON.parse(payload)
    assert(isObject(parsed))
    return parsed
  } catch {
    throw new PasetoInvalid('All PASETO payloads MUST be a JSON object')
  }
}
