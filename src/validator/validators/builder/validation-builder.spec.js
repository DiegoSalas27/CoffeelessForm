import faker from '@faker-js/faker';
import { MinLengthValidation } from '../min-length';
import { RequiredFieldValidation } from '../required-field';
import { ValidationBuilder } from './validation-builder';
describe('ValidationBuilder', function () {
    test('Should return RequiredFieldValidation', function () {
        var validations = ValidationBuilder.init().required().build();
        expect(validations).toEqual([new RequiredFieldValidation()]);
    });
    test('Should return MinLengthValidation', function () {
        var field = faker.database.column();
        var length = faker.datatype.number();
        var validations = ValidationBuilder.init().min(length).build();
        expect(validations).toEqual([new MinLengthValidation(length)]);
    });
    test('Should return a list of validations', function () {
        var field = faker.database.column();
        var length = faker.datatype.number();
        var validations = ValidationBuilder.init().required().min(length).build();
        expect(validations).toEqual([
            new RequiredFieldValidation(),
            new MinLengthValidation(length)
        ]);
    });
});
