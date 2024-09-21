const joi = require("joi");

// Signup validation
const signupValidation = (req, res, next) => {
    const Schema = joi.object({
        name: joi.string().min(3).max(30).required(), // Added .max(30)
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    });

    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Sign up Failed", error: error.details });
    }
    next();
};


// Login validation
const loginValidation = (req, res, next) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    });

    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Login Failed", error: error.details });
    }
    next();
};

module.exports = {
    signupValidation,
    loginValidation
};
