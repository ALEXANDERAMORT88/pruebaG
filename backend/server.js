const express = require('express');
const conectarDB = require('./config/db');

//crear servidor 
const app = express();

//conectando a la BD Base de Datos 
conectarDB();

//nos permite resivir la infomacion que enviamos desde el Postman en tipo json
app.use(express.json())

app.use('/api/tarea', require('./routes/tarea'));

app.listen(9500, () =>{
    console.log(' servidor conectado ')
}) 