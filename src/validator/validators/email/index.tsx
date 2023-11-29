import { EmailFieldError } from '../../errors'
import { FieldValidation } from '../../protocols'

export class Emailvalidation implements FieldValidation {
  constructor(private readonly message?: string, public error: Error | null = null) {}

  validate(inputValue: string, field: string): Error | null {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (!regex.test(inputValue)) {
      this.error = new EmailFieldError(field, this.message)
    } else {
      this.error = null
    }
    return this.error
  }
}
