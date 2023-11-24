import faker from '@faker-js/faker';
import { MinLengthFieldError } from '../../errors';
import { MinLengthValidation } from '.';
describe('MinLengthValidation', function () {
    var sut;
    var field = faker.random.word();
    beforeEach(function () {
        sut = new MinLengthValidation(5);
    });
    test('Should return error if value is invalid', function () {
        var error = sut.validate(faker.random.alphaNumeric(4), field);
        expect(error).toEqual(new MinLengthFieldError(field, 5));
    });
    test('Should return falsy if value is valid', function () {
        var error = sut.validate(faker.random.alphaNumeric(6), field);
        expect(error).toBeFalsy();
    });
});
