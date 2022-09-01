const express =  require('express');

const server = express();

//מיעוד עבור לקוחות
server.get('/users/getall', (req,res)=>{ res.json('getall users'); });
server.get('/users/getoneuserbyid', (req,res)=>{ res.json('get one  user'); });
server.post('/users/create', (req,res)=>{res.json('create user');});
server.delete('/users/remove', (req,res)=>{res.json('remove user');});
server.put('/users/update', (req,res)=>{res.json('update user');});

//מיועד עבור כרטיסי עסק
server.get('/cards/getall', (req,res)=>{ res.json('getall cards'); });
server.get('/cards/getonecardbyid', (req,res)=>{ res.json('get one  card'); });
server.post('/cards/create', (req,res)=>{ res.json('create card'); });
server.delete('/cards/remove', (req,res)=>{ res.json('remove card'); });
server.put('/cards/update', (req,res)=>{ res.json('update card'); });

server.listen(3000);
