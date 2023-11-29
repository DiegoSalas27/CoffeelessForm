export class MinLengthFieldError extends Error {
  constructor(fieldName: string, num: number, message?: string) {
    super(`${message !== undefined ? message : `${fieldName} must be ${num} characters at least`}`)
    this.name = 'MinLengthFieldError'
  }
}
