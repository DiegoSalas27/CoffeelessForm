import { RequiredFieldError } from '../../errors';
export class RequiredFieldValidation {
    constructor(error = null) {
        this.error = error;
    }
    validate(inputValue, field) {
        if (inputValue) {
            this.error = null;
        }
        else {
            this.error = new RequiredFieldError(field);
        }
        return this.error;
    }
}
