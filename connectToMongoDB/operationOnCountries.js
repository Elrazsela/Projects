const mongoose =  require('mongoose');

//בא נסגור מה זה?
//בא נסגור מה זו בכלל מדינה
//בואו נסגור מה יש לשמור עבור כל מדינה
//ואחרי שלחצנו ידיים ויודעים מהי מדינה
//בואו נצא מהחדר עם מילת מפתח שתחזיק את ההסכמה שלנו
const schemaOfCountry=  mongoose.Schema(
    {   
        name:String 
    }
) ;
 const countryModel =  mongoose.model ('Country',  schemaOfCountry   ); 

function getAllCountries(){
    return countryModel.find();
}
function addCountry(country){
   //מימוש
   new  countryModel({ name:  country  }).save();
}

module.exports={getAllCountries,addCountry };











function removeCountry(country){}
function updateCountry(oldcountry,newcountry){}
