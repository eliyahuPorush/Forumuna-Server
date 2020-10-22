const joi = require('joi') ;


exports.user_schema = joi.object({
    name: joi.string().min(2).max(30).required(),
    email: joi.string().email().required(), 
    password: joi.string().required().min(6).max(20).alphanum(), 
    confirmPassword: joi.ref('password')
}) ;

