const cors =  require('cors');
const server= require('express')();
 const countries=  require('./countries');

server.use(cors());

server.get('', (req,res)=>{
   res.json(countries);
} );


server.listen(3000);