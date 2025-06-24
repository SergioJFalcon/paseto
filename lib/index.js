import * as errors from './errors.js'
import V1 from './v1/index.js'
import V2 from './v2/index.js'
import V3 from './v3/index.js'
import V4 from './v4/index.js'

import { decode } from './general/index.js'

// Named exports for direct import
export { V1, V2, V3, V4, errors, decode }

// Default export for backwards compatibility
export default { decode, V1, V2, V3, V4, errors }
