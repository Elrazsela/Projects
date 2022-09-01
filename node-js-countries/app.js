const operations =  require('./data/countriesOperations');
const express= require('express');
const server=  express();

server.get('', handleGet  );
server.post('' , handlePost );
server.delete('', handleDelete);
server.put('',handleUpdate);

function handleUpdate(req,response){
    const countryOld= req.query.oldcountry;
    const countryNew= req.query.newcountry;
    operations.updateCountry(countryOld,countryNew);
    response.end();
}

function handleDelete(request,response){
    const country = request.query.country;
    operations.deleteCountry(country);
    response.end();
}

function handleGet(req,res){
    res.json( operations.getAllCountries());
}


function handlePost(req,res){
    const country= req.query.country;
    if(country && country.length>2)
         operations.addCountry(country);  
    res.end();
}

server.listen(3000);
