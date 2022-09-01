const mongoose=  require('mongoose');

mongoose.connect('mongodb://localhost/OurCustomersDataBase')
.then(x=> console.log('Connected to mongo db'))
.catch(()=> console.log('Problems with mongo db'));
