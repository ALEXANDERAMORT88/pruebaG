// rutas para tareas 
const express = require('express');
const router = express.Router();
const tareaControllers = require('../controllers/tareaControllers');

// api/tarea
router.post('/', tareaControllers.crearTarea);

module.exports = router;
