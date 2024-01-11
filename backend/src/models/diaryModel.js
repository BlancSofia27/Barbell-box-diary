const mongoose = require('mongoose');

const diarySchema = mongoose.Schema({
    userName:{
        type: String,
        required:true,
    },
    dayTurn:{
        type: String,
        required:true
    },
    hourTurn:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// // Middleware para pre-save
// diarySchema.pre('save', async function (next) {
//     // Si el userName aún no está establecido y existe en el contexto
//     if (!this.userName && this.auth0Context && this.auth0Context.user) {
//         this.userName = this.auth0Context.user.name;
//     }

//     // Continuar con la operación de guardado
//     next();
// });

module.exports = mongoose.model('diary',diarySchema)