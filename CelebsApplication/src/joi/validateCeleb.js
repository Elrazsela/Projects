const joi = require('joi');

function validateCeleb(celeb){

    const schemaOfCeleb =  joi.object({
        name: joi.string().required().min(2).max(255),
        age:joi.number().required().min(18).max(120),
        imageUrl: joi.string().required().min(10).max(500)
    });

    return schemaOfCeleb.validate(celeb);
}

module.exports= validateCeleb;