const Joi = require("joi")

//חוקי
const customer1= {
     name:"Moshe",
     email:"moshe@sela.co.il",
     age:38
}

const schema =  Joi.object({
    name: Joi.string().required().min(3).max(255),
    email:Joi.string().email(),
    age:Joi.number()
});

const result =  schema.validate(customer1);
console.log(result);
