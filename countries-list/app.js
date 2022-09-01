const express =  require('express');
 const  app=  express();
const countries = ['Greece', 'Israel'];
 
app.get('', handleGet);

app.post('', handlePost);
 
 app.listen(3000);

 function handlePost(request,response){
    const country =   request.query.country;
    countries.push(country);
    response.end();
}

 function handleGet(req,response){
    response.json(countries);
 }
