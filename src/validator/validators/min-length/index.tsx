import { MinLengthFieldError } from '@validator/errors'
import { type FieldValidation } from '@validator/protocols'

export class MinLengthValidation implements FieldValidation {
  constructor(
    private readonly minLength: number,
    public error: Error | null = null
  ) {}

  validate(inputValue: any, field: string): Error | null {
    if (inputValue.length < this.minLength) {
      this.error = new MinLengthFieldError(field, this.minLength)
    } else {
      this.error = null
    }
    return this.error
  }
}
