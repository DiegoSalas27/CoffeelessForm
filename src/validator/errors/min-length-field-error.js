var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MinLengthFieldError = /** @class */ (function (_super) {
    __extends(MinLengthFieldError, _super);
    function MinLengthFieldError(fieldName, num) {
        var _this = _super.call(this, "".concat(fieldName, " must be ").concat(num, " characters at least")) || this;
        _this.name = 'MinLengthFieldError';
        return _this;
    }
    return MinLengthFieldError;
}(Error));
export { MinLengthFieldError };
