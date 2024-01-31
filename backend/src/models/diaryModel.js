const mongoose = require('mongoose');

const diarySchema = mongoose.Schema({
    userName:{
        type:String,
        unique:false
    },
    dayTurn:{
        type: String,
        required:true
    },
    hourTurn:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('diary',diarySchema)