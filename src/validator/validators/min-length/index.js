import { MinLengthFieldError } from '../../errors';
var MinLengthValidation = /** @class */ (function () {
    function MinLengthValidation(minLength, error) {
        if (error === void 0) { error = null; }
        this.minLength = minLength;
        this.error = error;
    }
    MinLengthValidation.prototype.validate = function (inputValue, field) {
        if (inputValue.length < this.minLength) {
            this.error = new MinLengthFieldError(field, this.minLength);
        }
        else {
            this.error = null;
        }
        return this.error;
    };
    return MinLengthValidation;
}());
export { MinLengthValidation };
