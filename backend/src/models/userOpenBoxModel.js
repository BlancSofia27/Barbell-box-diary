const mongoose = require('mongoose');

const userOpenBoxSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
});

module.exports = mongoose.model('UserOpenBox',userOpenBoxSchema)