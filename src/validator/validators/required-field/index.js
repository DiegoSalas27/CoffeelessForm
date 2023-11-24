import { RequiredFieldError } from '../../errors';
var RequiredFieldValidation = /** @class */ (function () {
    function RequiredFieldValidation(error) {
        if (error === void 0) { error = null; }
        this.error = error;
    }
    RequiredFieldValidation.prototype.validate = function (inputValue, field) {
        if (inputValue) {
            this.error = null;
        }
        else {
            this.error = new RequiredFieldError(field);
        }
        return this.error;
    };
    return RequiredFieldValidation;
}());
export { RequiredFieldValidation };
