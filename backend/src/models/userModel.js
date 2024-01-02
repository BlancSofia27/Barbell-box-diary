const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required:true,
        unique: true
    },
    name:{
        type: String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    paidDays:{
        type:Number,
        required:true
    },
    notedDays:{
        type:[String],
        required:false
    }
});

module.exports = mongoose.model('User',userSchema)