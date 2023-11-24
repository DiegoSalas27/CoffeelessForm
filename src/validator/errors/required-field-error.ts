export class RequiredFieldError extends Error {
  constructor(field: string) {
    super(`${field} is Required`)
    this.name = 'RequiredFieldError'
  }
}