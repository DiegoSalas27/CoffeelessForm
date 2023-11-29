export class InvalidFieldError extends Error {
  constructor(fieldName?: string, message?: string) {
    super(`${message !== undefined ? message : `${fieldName} is invalid`}`)
    this.name = 'InvalidFieldError'
  }
}
