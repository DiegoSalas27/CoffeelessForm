export class InvalidFieldError extends Error {
    constructor(fieldName) {
        super(`${fieldName} is invalid`);
        this.name = 'InvalidFieldError';
    }
}
