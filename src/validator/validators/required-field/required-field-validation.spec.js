import faker from '@faker-js/faker';
import { RequiredFieldError } from '../../errors';
import { RequiredFieldValidation } from '.';
describe('RequiredFieldValidation', function () {
    var sut;
    var field = faker.random.word();
    beforeEach(function () {
        sut = new RequiredFieldValidation();
    });
    test('Should return error if field is empty', function () {
        var error = sut.validate('', field);
        expect(error).toEqual(new RequiredFieldError(field));
    });
    test('Should return falsy if field is not empty', function () {
        var error = sut.validate(faker.random.word(), field);
        expect(error).toBeFalsy();
    });
});
