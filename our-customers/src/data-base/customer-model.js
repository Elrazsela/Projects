// כאן נגדיר סכמה
const mongoose= require('mongoose');

const customerSchema = {
    name:String,
    email:String,
    password:String,
    isBusinessAccount:Boolean
}
const mongooseSchema=  mongoose.Schema(customerSchema);
const customerModel=  mongoose.model('customer',mongooseSchema );

module.exports= customerModel;