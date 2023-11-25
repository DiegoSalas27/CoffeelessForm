export class MinLengthFieldError extends Error {
    constructor(fieldName, num) {
        super(`${fieldName} must be ${num} characters at least`);
        this.name = 'MinLengthFieldError';
    }
}
