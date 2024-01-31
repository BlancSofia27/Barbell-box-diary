const {
    addUser
} = require("../controllers/userControllers");

// const postUserOpenBoxHandler = async (req, res) => {
//     try {
//       const {name , phone} = req.body;
//       console.log('Body', req.body);
//       const user = await addUserOpenbox(name, phone);
//       res.status(201).json(user);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };

const postUserHandler = async (req, res) => {
    try {
      const { name, email, notedDays} = req.body;
      if (!name || !email || !notedDays) {
        return res.status(400).json({ error: "Faltan propiedades en el cuerpo de la solicitud" });
      }
      console.log('Body', req.body);
      const user = await addUser(name, email, notedDays);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports ={
    postUserHandler
  }