const mongoose = require('mongoose');
require ('dotenv').config({path:'.env'});

const conectarDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            userNewUrlParser: true,
            useUnifiendTopology: true,
            userFindAndModify: false
        })
        console.log('DB base de datos conectada')
    } catch (error) {
        console.log(error); 
        // process.exit(1); //Para detener la app
    }
}

module.exports = conectarDB