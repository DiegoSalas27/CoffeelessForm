export class EmailFieldError extends Error {
  constructor(fieldName: string, message?: string) {
    super(`${message !== undefined ? message : `${fieldName} is not valid`}`)
    this.name = 'EmailFieldError'
  }
}
