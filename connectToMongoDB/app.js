const mongoose=  require('mongoose');
 const operations=  require('./operationOnCountries')

const express= require('express');
const server=  express();

server.get('',(req,res)=>{
         operations.getAllCountries()
         .then(x=>    res.json( x )  )
         .catch(()=> res.end())
} );
server.listen(3000, ()=> console.log('Server Listening open postman'));



mongoose.connect('mongodb://localhost/countriesDataBase')
.then(()=>   console.log('Connected to mongo DB'))
.catch(()=> console.log('Problems can not connect to mongo DB'));
