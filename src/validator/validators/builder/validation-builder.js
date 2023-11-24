import { MinLengthValidation } from '../min-length';
import { RequiredFieldValidation } from '../required-field';
/**
 * Builder class that implements the Builder pattern to add validation rules mean to be use for the validationSchema
 * of the CoffeelessWrapper
 */
var ValidationBuilder = /** @class */ (function () {
    function ValidationBuilder(validations) {
        this.validations = validations;
    }
    /**
     * Initialized the validator array to add validation rules
     * @returns ValidationBuilder
     */
    ValidationBuilder.init = function () {
        return new ValidationBuilder([]);
    };
    /**
     * Sets a field as required
     * @returns ValidationBuilder
     */
    ValidationBuilder.prototype.required = function () {
        this.validations.push(new RequiredFieldValidation());
        return this;
    };
    /**
     * Sets the minimum length of characters a field should contain
     * @param length number parameter. Represents minimum length of the input
     * @returns ValidationBuilder
     */
    ValidationBuilder.prototype.min = function (length) {
        this.validations.push(new MinLengthValidation(length));
        return this;
    };
    /**
     * Return all of the validations as an array to be used for the validationSchema
     * @returns FieldValidation array
     */
    ValidationBuilder.prototype.build = function () {
        return this.validations;
    };
    return ValidationBuilder;
}());
export { ValidationBuilder };
