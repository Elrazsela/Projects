const mongoose= require('mongoose');

const celebSchema=  mongoose.Schema({
    name:String,
    age:Number,
    imageUrl:String
});

const celebModel=  mongoose.model('celeb', celebSchema );

module.exports= celebModel;


