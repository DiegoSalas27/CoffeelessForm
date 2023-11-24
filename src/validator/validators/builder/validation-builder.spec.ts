import faker from '@faker-js/faker'
import { MinLengthValidation } from '../min-length'
import { RequiredFieldValidation } from '../required-field'

import { ValidationBuilder } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const validations = ValidationBuilder.init().required().build()
    expect(validations).toEqual([new RequiredFieldValidation()])
  })

  test('Should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = ValidationBuilder.init().min(length).build()
    expect(validations).toEqual([new MinLengthValidation(length)])
  })

  test('Should return a list of validations', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = ValidationBuilder.init().required().min(length).build()
    expect(validations).toEqual([
      new RequiredFieldValidation(),
      new MinLengthValidation(length)
    ])
  })
})
