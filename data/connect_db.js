const mongoose= require('mongoose');

const url= 'mongodb+srv://electiva123:1234@cluster0.fiuuw.mongodb.net/DataControlActivities?retryWrites=true&w=majority'

mongoose.connect(url)
.then(()=>{console.log('Base de datos conectada')})
.catch(err=>{console.log(err)})
