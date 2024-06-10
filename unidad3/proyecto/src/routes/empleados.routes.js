const { Router, query } = require('express');
const controllerEmpleados = require('../db/controller/controllerEmpleados.js');

const ruta = Router();

ruta.post('/empleadosInsertar', async (req, res) => {
    console.log(req.body);
    try {
        const result = await controllerEmpleados.insertEmpleados(req.body);
        res.status(200).json({ message: 'Se agregó un nuevo empleado', id: result.insertId });
        console.log(query);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar un nuevo empleado: ' + error.message });
    }
});

ruta.get('/empleados', async (req, res) => {
    try {
        const result = await controllerEmpleados.obtenerTodosEmpleados();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener todos los empleados: ' + error.message });
    }
});

ruta.get('/empleados/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await controllerEmpleados.getUnoEmpleados(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el empleados: ' + error.message });
    }
});

ruta.put('/empleadosActualizar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = req.body;
        await controllerEmpleados.updateEmpleado(id, result);
        res.status(200).json({ message: 'Se actualizó un empleado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el empleado: ' + error.message });
    }
});

ruta.delete('/empleadosEliminar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await controllerEmpleados.deleteEmpleados(id);
        res.status(200).json({ message: 'Se eliminó el empleado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el empleado: ' + error.message });
    }
});

module.exports = ruta;
