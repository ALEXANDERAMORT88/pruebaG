const Tarea = require("../models/Tarea");




exports.crearTarea = async (req, res)=> {
    // console.log(req.body);
    try {
        let tarea;
        //subir tarea
        tarea = new Tarea (req.body);

        await tarea.save();
        res.send(tarea);


        
    } catch (error) {
        console.log(error);
        res.status(500).send('Se prodijo un Error')
    }
}