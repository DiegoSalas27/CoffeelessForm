import { EmailFieldError } from '../../errors';
export class Emailvalidation {
    constructor(message = '', error = null) {
        this.message = message;
        this.error = error;
    }
    validate(inputValue, field) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!regex.test(inputValue)) {
            this.error = new EmailFieldError(field, this.message);
        }
        else {
            this.error = null;
        }
        return this.error;
    }
}
