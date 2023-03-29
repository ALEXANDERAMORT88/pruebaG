// Para subir la informacion 

const mongosse = require('mongoose');
const TareaSchema = mongosse.Schema({
    tarea: {
        type: String,
        require:true
    },
    fechaCreacion:{
        type:Date,
        default: Date.now()
    }

});

module.exports = mongosse.model('tarea', TareaSchema)