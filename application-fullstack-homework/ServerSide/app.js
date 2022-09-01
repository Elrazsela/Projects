const cors =  require('cors');
const kefel = require('./kefel');
const server= require('express')();
// const kefel=  require('./kefel');

server.use(cors());

server.get('', (req,res)=>{
   res.json(kefel());
} );


server.listen(3000);