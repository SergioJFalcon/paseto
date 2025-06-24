import { KeyObject } from 'crypto'
import { isKeyObject } from 'util/types'

if (!isKeyObject) {
  isKeyObject = (obj) => obj != null && obj instanceof KeyObject
}

export default isKeyObject
