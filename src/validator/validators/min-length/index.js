import { MinLengthFieldError } from '../../errors';
export class MinLengthValidation {
    constructor(minLength, error = null) {
        this.minLength = minLength;
        this.error = error;
    }
    validate(inputValue, field) {
        if (inputValue.length < this.minLength) {
            this.error = new MinLengthFieldError(field, this.minLength);
        }
        else {
            this.error = null;
        }
        return this.error;
    }
}
