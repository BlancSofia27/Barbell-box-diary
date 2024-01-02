const express = require('express');
const userSchema = require('../models/userModel');
const router = express.Router();
const {addTurn, getDays, getTurns, deleteTurn} = require ('../controllers/userControllers');
const { postUserOpenBoxHandler } = require('../handlers/userHandlers');

// create user
router.post('/users', async (req, res) => {
  const { userName, name, lastName, password, phone, paidDays, notedDays } = req.body;

  try {
    // Utiliza findOneAndUpdate para buscar un documento por el campo userName y actualizarlo o crear uno nuevo si no existe
    const resultado = await userSchema.findOneAndUpdate(
      { userName: userName }, // o cualquier campo único que estés usando para identificar el documento
      { $set: { lastName, name, password, phone, paidDays, notedDays } },
      { upsert: true, new: true } // upsert: true crea el documento si no existe, new: true devuelve el documento actualizado
    );

    res.json({ mensaje: 'Operación exitosa', resultado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

//trae todos los usuarios
router.get("/users",(req, res)=>{
    userSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});



// Elimina un turno específico del usuario
router.delete('/users/deleteTurn/:userName/:turn', deleteTurn);

// 


// Ruta para agregar un turno a la propiedad notedDays del usuario
router.post('/users/addTurn/:userName/:turn', addTurn);


// Obtiene los turnos anotados según el usuario
router.get('/users/:userName/notedDays', getTurns );

//obtiene los dias anotados segun el usuario
router.get('/users/:userName/days',getDays)

//crea un usario para el openBox
router.post('/users/addUserOpenBox',postUserOpenBoxHandler)


module.exports = router;


