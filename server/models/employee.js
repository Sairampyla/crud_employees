
const mongoose = require ('mongoose');

var Employee = mongoose.model('Employee',{
    name:{type:String},
    email:{type:String},
    country:{type:String},
    phone:{type:Number},
});

module.exports = {Employee};