export const recursivelyComputeValidation = (deepStateChild, deepValidationState, deepSkipSchemaValidation, errorState) => {
    for (const [key, value] of Object.entries(deepValidationState)) {
        if (typeof deepStateChild[key] !== 'object') {
            if (!deepSkipSchemaValidation || !deepSkipSchemaValidation[key]) {
                const validationError = value.map((validation) => validation.validate(deepStateChild[key], key)).some((err) => err !== null);
                errorState.error = !!(errorState.error || validationError);
            }
        }
        else {
            let skipValidation;
            if (deepSkipSchemaValidation) {
                skipValidation = deepSkipSchemaValidation[key];
            }
            recursivelyComputeValidation(deepStateChild[key], value, skipValidation, errorState);
        }
    }
};
export const stateSchemaUpdateDeepComparison = (initialValues, state, schema) => {
    for (const [key, value] of Object.entries(schema)) {
        if (typeof initialValues[key] === 'object' &&
            typeof initialValues[key].length === 'number' &&
            state !== undefined &&
            schema !== undefined) { // arrays can be added dynamically, it's necessary to deeply map both objects to update the state
            state[key] = [...schema[key]];
        }
        else {
            if (typeof initialValues[key] === 'object') {
                stateSchemaUpdateDeepComparison(initialValues[key], state[key], value);
            }
        }
    }
};
export const objectIterator = (state, path) => {
    let copy = Object.assign({}, state);
    if (path === '')
        return [copy, ''];
    const updatePath = path.split('.');
    updatePath.forEach((path, idx) => {
        if (idx <= updatePath.length - 1 && copy !== undefined) {
            copy = copy[path];
        }
    });
    return [copy, updatePath[updatePath.length - 1]];
};
