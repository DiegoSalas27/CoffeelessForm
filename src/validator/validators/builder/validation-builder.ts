import { type FieldValidation } from '@validator/protocols'
import { MinLengthValidation } from '../min-length'
import { RequiredFieldValidation } from '../required-field'

export class ValidationBuilder {
  private constructor(
    private readonly validations: FieldValidation[]
  ) {}

  static init(): ValidationBuilder {
    return new ValidationBuilder([])
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation())
    return this
  }

  min(length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(length))
    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
