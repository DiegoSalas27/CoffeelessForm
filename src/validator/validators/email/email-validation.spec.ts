import faker from '@faker-js/faker'
import { Emailvalidation } from '.'
import { EmailFieldError } from '../../errors'

describe('EmailValidation', () => {
  let sut: Emailvalidation
  const field = faker.random.word()

  beforeEach(() => {
    sut = new Emailvalidation();
  })

  test('Should return error if value is invalid', () => {
    const error = sut.validate(faker.random.word(), field)
    expect(error).toEqual(new EmailFieldError(field, ''))
  })

  test('Should return falsy if value is valid', () => {
    const error = sut.validate('dominicsc2hs@gmail.com', field)
    expect(error).toBeFalsy()
  })
})
