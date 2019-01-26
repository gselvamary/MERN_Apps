const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.regno = !isEmpty(data.regno) ? data.regno : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password1 = !isEmpty(data.password1) ? data.password1 : "";
    // Name checks

    if (Validator.isEmpty(data.regno)) {
        errors.regno = "regno field is required";
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password1)) {
        errors.password1 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
        errors.password = "Password must be at least 8 characters";
    }
    if (!Validator.equals(data.password, data.password1)) {
        errors.password1 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};