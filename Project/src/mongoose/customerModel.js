const mongoose=  require('mongoose');

const customerSchema= mongoose.Schema({
     email:{
          type:String,
          unique:true}
          ,
     name:String,
     password:String,
     isBusinessAccount:Boolean
});

module.exports = mongoose.model('customer', customerSchema);