export class EmailFieldError extends Error {
  constructor(fieldName: string, message: string) {
    super(`${fieldName} ${message !== '' ? message : 'is not valid'}`)
    this.name = 'EmailFieldError'
  }
}
