export class EmailFieldError extends Error {
    constructor(fieldName, message) {
        super(`${fieldName} ${message !== '' ? message : 'is not valid'}`);
        this.name = 'EmailFieldError';
    }
}
