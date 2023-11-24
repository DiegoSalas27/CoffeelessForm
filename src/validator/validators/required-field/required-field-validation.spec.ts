import faker from '@faker-js/faker'
import { RequiredFieldError } from '../../errors'
import { RequiredFieldValidation } from '.'

describe('RequiredFieldValidation', () => {
  let sut: RequiredFieldValidation
  const field = faker.random.word()

  beforeEach(() => {
    sut = new RequiredFieldValidation()
  })

  test('Should return error if field is empty', () => {
    const error = sut.validate('', field)
    expect(error).toEqual(new RequiredFieldError(field))
  })

  test('Should return falsy if field is not empty', () => {
    const error = sut.validate(faker.random.word(), field)
    expect(error).toBeFalsy()
  })
})