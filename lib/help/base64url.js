export function encode(input) { return input.toString('base64url')}
export function decode(input) { return Buffer.from(input, 'base64')}
