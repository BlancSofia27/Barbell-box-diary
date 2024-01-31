
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes');
const diaryRoutes = require('./routes/diaryRoutes')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 9000;
//const morgan = require ('morgan')
// Configuración de CORS
app.use(cors({ origin: '*' }));

//middlewares
app.use(express.json());
app.use('/user',userRoutes)
app.use('/diary',diaryRoutes)
//app.use(morgan('combined')); // Puedes cambiar 'combined' por 'dev', 'common', etc.


//routes
app.get('/',(req, res)=>{
    res.send('welcome to my API')
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log('connected to mongodb Atlas'))
.catch((error) => console.error(error));

app.listen(port,()=> console.log('server listening on port',port));