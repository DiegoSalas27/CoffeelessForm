import faker from '@faker-js/faker';
import { MinLengthFieldError } from '../../errors';
import { MinLengthValidation } from '.';
describe('MinLengthValidation', () => {
    let sut;
    const field = faker.random.word();
    beforeEach(() => {
        sut = new MinLengthValidation(5);
    });
    test('Should return error if value is invalid', () => {
        const error = sut.validate(faker.random.alphaNumeric(4), field);
        expect(error).toEqual(new MinLengthFieldError(field, 5));
    });
    test('Should return falsy if value is valid', () => {
        const error = sut.validate(faker.random.alphaNumeric(6), field);
        expect(error).toBeFalsy();
    });
});
