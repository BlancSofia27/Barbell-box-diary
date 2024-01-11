// const {
//     addUserOpenbox
// } = require("../controllers/userControllers");

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

//   module.exports ={
//     postUserOpenBoxHandler
//   }