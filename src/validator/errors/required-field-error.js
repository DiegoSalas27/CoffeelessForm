export class RequiredFieldError extends Error {
    constructor(field) {
        super(`${field} is Required`);
        this.name = 'RequiredFieldError';
    }
}
