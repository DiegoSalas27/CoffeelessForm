var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var recursivelyComputeValidation = function (deepStateChild, deepValidationState, deepSkipSchemaValidation, errorState) {
    var _loop_1 = function (key, value) {
        if (typeof deepStateChild[key] !== 'object') {
            if (!deepSkipSchemaValidation || !deepSkipSchemaValidation[key]) {
                var validationError = value.map(function (validation) {
                    return validation.validate(deepStateChild[key], key);
                }).some(function (err) { return err !== null; });
                errorState.error = !!(errorState.error || validationError);
            }
        }
        else {
            var skipValidation = void 0;
            if (deepSkipSchemaValidation) {
                skipValidation = deepSkipSchemaValidation[key];
            }
            recursivelyComputeValidation(deepStateChild[key], value, skipValidation, errorState);
        }
    };
    for (var _i = 0, _a = Object.entries(deepValidationState); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
};
export var stateSchemaUpdateDeepComparison = function (initialValues, state, schema) {
    for (var _i = 0, _a = Object.entries(schema); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof initialValues[key] === 'object' &&
            typeof initialValues[key].length === 'number' &&
            state !== undefined &&
            schema !== undefined) { // arrays can be added dynamically, it's necessary to deeply map both objects to update the state
            state[key] = __spreadArray([], schema[key], true);
        }
        else {
            if (typeof initialValues[key] === 'object') {
                stateSchemaUpdateDeepComparison(initialValues[key], state[key], value);
            }
        }
    }
};
export var objectIterator = function (state, path) {
    var copy = __assign({}, state);
    if (path === '')
        return [copy, ''];
    var updatePath = path.split('.');
    updatePath.forEach(function (path, idx) {
        if (idx <= updatePath.length - 1 && copy !== undefined) {
            copy = copy[path];
        }
    });
    return [copy, updatePath[updatePath.length - 1]];
};
