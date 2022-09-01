const cardModel = require('./cardModel');

//פונקציה שמקבלת פרטי כרטיסיה ןמנסה לשמור בבסיס הנתונים
//מחזירה את פרטי הכרטיסיה במידה ונשמר בהצלחה
//מחזירה null  במידה ולא נשמרה הכרטיסיה בבסיס הנתונים
async function createCardInMongoDB(cardDetails){
    try{
            const createdCardInDB=    await new cardModel(cardDetails).save();
            //האובייקט נשמר בבסיס הנתונים
            //וזה כבר קרה 
           return createdCardInDB;
    }
    catch
    {
         //האובייקט לא נשמר בבסיס הנתונים
         return  null;
    }
}

async function getAllCards(){
      try
      {
            const cards=     await    cardModel.find();
            return cards;
      }
      catch
      {
            return null;
      }
}

async function deleteOneCardById(id){
      try 
      {
            const deletedCard=   await   cardModel.deleteOne({
                  _id:id
            });
            return deletedCard;
      }
            catch
            {
            return null;
            }
}

async function getCardsByUserId(idOfUSer){

      try
      {
            const cardsOfThatUser=  await  cardModel.find({ userId: idOfUSer } );
            return cardsOfThatUser;        
      }
       
    catch{
      return null;
    }

}


async function getOneCardbyUserIDAndCardID(userId, cardId){
      try{
            const oneCard = await cardModel.find({
                  userId: userId,
                  _id: cardId
            });
            return oneCard;
      }
      catch{
            return null
      }
}



module.exports=  {createCardInMongoDB, getAllCards, deleteOneCardById,getCardsByUserId,
      getOneCardbyUserIDAndCardID  };

  