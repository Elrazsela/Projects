 const express =  require('express');
const server=   express();

const cors= require('cors');
server.use(cors());

 const validateCeleb =  require('../joi/validateCeleb');
server.use(express.json());
const celebModel =  require('../mongoose/celebModel');

server.post('',    async    (req,res)=>{
               const result =  validateCeleb(req.body);
               if(result.error)
                 return  res.status(400).json(result.error.details[0].message);
                 //קודם כל נבדוק האם הידוען קיים בבסיס הנתונים
                     const celebFromDB=     await  celebModel.findOne({name:req.body.name });
                     if(celebFromDB!= null )
                     {
                        //יש לי בבסיס הנתונים כבר מישהו עם שם זהה
                        return res.status(409).json('כבר קיים ידוען בשם זה ');
                     } 
                     else
                     {
                         //כאן צריך ליצור אובייקט חדש                      
                         await new celebModel(  req.body ).save();
                         res.json('נוצר ידוען חדש בבסיס הנתונים');         
                    }
       });

 server.get('', async (req,res)=>{
            const allCelebs =     await   celebModel.find().select('-__v -_id');
            res.json(allCelebs);
 } )

 server.delete('', async(req,res)=>{
        await  celebModel.deleteMany();
        res.json('Deleted all celebs');
 });

 server.listen(3000, ()=> console.log('Express server listening'));