const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:/MyNewCelebDataBaseOnThursday')
.then(x=>console.log('Connected To DB'))
.catch(x=> console.log('Problems with connection to mongo DB'));