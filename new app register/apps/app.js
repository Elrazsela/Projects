const express= require('express');
const server= express();


//שרת שים לב לאובייקטים הנשלחים מהצד של הלקוח
server.use(express.json());

server.post('', handleRegisterCustomer );

function handleRegisterCustomer(request,response){
    //לקבל נתונים מרחוק מצד המשתמש
    //שתי השורות הבאות הינם להדמיה בלבד
    console.log( request.body); 
    response.json(request.body);
}
server.listen(3000,   ()=> console.log('Express server listening')     );

console.log('I am hereeeeeeee');
