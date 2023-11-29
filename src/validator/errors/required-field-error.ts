export class RequiredFieldError extends Error {
  constructor(fieldName: string, message?: string) {
    super(`${message !== undefined ? message : `${fieldName} is Required`}`)
    this.name = 'RequiredFieldError'
  }
}