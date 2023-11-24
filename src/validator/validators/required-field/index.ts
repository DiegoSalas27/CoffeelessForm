import { RequiredFieldError } from '@validator/errors'
import { type FieldValidation } from '@validator/protocols'

export class RequiredFieldValidation implements FieldValidation {
  constructor(public error: Error | null = null) {}

  validate(inputValue: any, field: string): Error | null {
    if (inputValue) {
      this.error = null
    } else {
      this.error = new RequiredFieldError(field)
    }
    return this.error
  }
}
