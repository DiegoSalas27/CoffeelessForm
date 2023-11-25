export class EmailFieldError extends Error {
  constructor(fieldName: string, message: string) {
    super(`${fieldName} ${message !== '' ? message : 'must be a valid email'}`)
    this.name = 'EmailFieldError'
  }
}
