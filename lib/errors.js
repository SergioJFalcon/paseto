const CODES = {
  PasetoNotSupported: 'ERR_PASETO_NOT_SUPPORTED',
  PasetoDecryptionFailed: 'ERR_PASETO_DECRYPTION_FAILED',
  PasetoInvalid: 'ERR_PASETO_INVALID',
  PasetoVerificationFailed: 'ERR_PASETO_VERIFICATION_FAILED',
  PasetoClaimInvalid: 'ERR_PASETO_CLAIM_INVALID',
}

class PasetoError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    this.code = CODES[this.constructor.name]
    Error.captureStackTrace(this, this.constructor)
  }
}

const _PasetoError = PasetoError
export { _PasetoError as PasetoError }

export class PasetoNotSupported extends PasetoError {}
export class PasetoDecryptionFailed extends PasetoError {}
export class PasetoInvalid extends PasetoError {}
export class PasetoVerificationFailed extends PasetoError {}
export class PasetoClaimInvalid extends PasetoError {}
