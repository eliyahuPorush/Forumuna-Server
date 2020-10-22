const joi = require('joi') ;


exports.post_schema = joi.object({
    title: joi.string().min(2).max(100).required(), 
    content: joi.string().min(10).required().max(1000)
}) ;