import { RequiredFieldError } from '../../errors'
import { FieldValidation } from '../../protocols'

export class RequiredFieldValidation implements FieldValidation {
  constructor(private readonly message?: string, public error: Error | null = null) {}

  validate(inputValue: any, field: string): Error | null {
    if (inputValue) {
      this.error = null
    } else {
      this.error = new RequiredFieldError(field, this.message)
    }
    return this.error
  }
}
