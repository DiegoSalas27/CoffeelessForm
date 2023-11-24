export class MinLengthFieldError extends Error {
  constructor(fieldName: string, num: number) {
    super(`${fieldName} must be ${num} characters at least`)
    this.name = 'MinLengthFieldError'
  }
}
