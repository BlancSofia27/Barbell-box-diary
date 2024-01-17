// const express = require('express');
// const userSchema = require('../models/diaryModel');
// const userOpenBoxSchema = require('../models/userOpenBoxModel')


// async function addTurn (req, res){
//     const userName = req.params.userName
//     const turn = req.params.turn
//     try {
//         // Buscar al usuario por nombre de usuario
//         const user = await userSchema.findOne({ userName: userName });
    
//         if (!user) {
//             console.log(`Usuario no encontrado para ${userName}`);
//             return res.status(404).json({ mensaje: 'Usuario no encontrado' });
//           }
    
//         // Agregar el turno a la propiedad notedDays
//         user.notedDays.push(turn);
    
//         // Guardar el usuario actualizado en la base de datos
//         await user.save();
    
//         res.json({ mensaje: 'Turno agregado con éxito', user });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error en el servidor' });
//       }
        
// }

// async function deleteTurn(req, res) {
//   const userName = req.params.userName;
//   const turn = req.params.turn;

//   try {
//     // Buscar al usuario por nombre de usuario
//     const user = await userSchema.findOne({ userName: userName });

//     if (!user) {
//       console.log(`Usuario no encontrado para ${userName}`);
//       return res.status(404).json({ mensaje: 'Usuario no encontrado' });
//     }

//     // Filtrar el array notedDays para quitar la cadena específica
//     user.notedDays = user.notedDays.filter((day) => day !== turn);

//     // Guardar el usuario actualizado en la base de datos
//     await user.save();

//     res.json({ mensaje: 'Turno eliminado con éxito', user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error en el servidor' });
//   }
// }


// async function getTurns (req, res) {
//   const { userName } = req.params;

//   try {
//     const user = await userSchema.findOne({ userName });

//     if (!user) {
//       return res.status(404).json({ mensaje: 'Usuario no encontrado' });
//     }

//     const notedDays = user.notedDays;

//     res.json(notedDays);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error en el servidor' });
//   }
// };


// async function getDays(req, res) {
//   const { userName } = req.params;

//   try {
//     const user = await userSchema.findOne({ userName });

//     if (!user) {
//       return res.status(404).json({ mensaje: 'Usuario no encontrado' });
//     }

//     const days = user.notedDays.map((entry) => {
//       const [day, time] = entry.split(" ");
//       return day;
//     });

//     res.json(days);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error en el servidor' });
//   }
// }

// async function addUserOpenBox(req, res) {
//   const {name, phone} = req.body;

//     // Utiliza findOneAndUpdate para buscar un documento por el campo userName y actualizarlo o crear uno nuevo si no existe
//     const resultado = await userOpenBoxSchema.findOneAndUpdate(
//       { name : name }, // o cualquier campo único que estés usando para identificar el documento
//       { $set: { phone } },
//       { upsert: true, new: true } // upsert: true crea el documento si no existe, new: true devuelve el documento actualizado
//     );

//     res.json({ mensaje: 'Operación exitosa', resultado });
  
// }



  

// module.exports ={addTurn, deleteTurn, getTurns, getDays, addUserOpenBox};