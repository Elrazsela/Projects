require('./data-base/connect-to-db');
const express= require('express');
const customerModel = require('./data-base/customer-model');
const validateRegisterCustomer = require('./validateRegisterCustomer');
const  validateSigninCustomer = require('./validateSigninCustomer');
const server= express();

//שרת שים לב לאובייקטים הנשלחים מהצד של הלקוח
server.use(express.json());

server.post('', handleRegisterCustomer );

server.post('/signincustomer', handleSigninCustomer);


function handleSigninCustomer(request,response){
 const result =   validateSigninCustomer(request.body);

    if(result)
    {
                      customerModel.findOne({
                      email: request.body.email,
                      password:request.body.password
                    })
                    .then( customer=>  response.json({
                      id:customer._id,
                      isBusinessAccount:customer.isBusinessAccount
                    }))
                    .catch(()=> response.status(400).json('לקוח לא נמצא בבסיס נתונים'));
    }
    else
    {
      response.status(400).json('חסרים פרטים עבור כניסת לקוח');
    }
}


function handleRegisterCustomer(request,response){
    
    // נצטרך קודם כול להעביר את האובייקט וולידציה 
     const result =   validateRegisterCustomer(   request.body        );

       if(result)
       {
                 new   customerModel(request.body).save()
                 .then( x=> response.json(  { id:x._id, email:x.email, name:x.name }    )     )
                 .catch(x=> response.status(500).json('לא הצלחנו לשמור בבסיס הנתונים')  );
               ;    
       }
       else
       {
        response.status(400).json('אחד השדות חסרים');
       }
}
server.listen(3000,   ()=> console.log('Express server listening')     );
