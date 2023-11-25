import { Emailvalidation } from '../email';
import { MinLengthValidation } from '../min-length';
import { RequiredFieldValidation } from '../required-field';
/**
 * Builder class that implements the Builder pattern to add validation rules mean to be use for the validationSchema
 * of the CoffeelessWrapper
 */
export class ValidationBuilder {
    constructor(validations) {
        this.validations = validations;
    }
    /**
     * Initialized the validator array to add validation rules
     * @returns ValidationBuilder
     */
    static init() {
        return new ValidationBuilder([]);
    }
    /**
     * Sets a field as required
     * @returns ValidationBuilder
     */
    required() {
        this.validations.push(new RequiredFieldValidation());
        return this;
    }
    /**
     * Sets the minimum length of characters a field should contain
     * @param length number parameter. Represents minimum length of the input
     * @returns ValidationBuilder
     */
    min(length) {
        this.validations.push(new MinLengthValidation(length));
        return this;
    }
    /**
     * Verifies email being valid
     * @param message: optional message to display error text
     * @returns ValidationBuilder
     */
    email(message) {
        this.validations.push(new Emailvalidation(message));
        return this;
    }
    /**
     * Return all of the validations as an array to be used for the validationSchema
     * @returns FieldValidation array
     */
    build() {
        return this.validations;
    }
}
