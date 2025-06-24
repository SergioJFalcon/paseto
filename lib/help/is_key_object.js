import { KeyObject } from 'node:crypto'
import { isKeyObject as nodeIsKeyObject } from 'node:util/types'

// Use the Node.js built-in function if available, otherwise fallback
const isKeyObject = nodeIsKeyObject || ((obj) => obj != null && obj instanceof KeyObject)

export default isKeyObject
