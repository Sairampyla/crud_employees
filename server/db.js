
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB',{ useNewUrlParser: true,useUnifiedTopology: true },(err) => {
      if(!err)
      console.log('mongodb connection succeeded');
      else
      console.log('Error in db connection: '+JSON.stringify(err,undefined,2));
});

module.exports = mongoose;

