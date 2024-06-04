const { Router } = require('express');
const controllerDetalle = require('../db/controller/controllerDetalle_boletas.js');

const ruta = Router();

ruta.post('/detalleInsertar', async (req, res) => {
    console.log(req.body);

    try {
        const result = await controllerDetalle.insertDetalle(req.body);
        
        res.status(200).json({ message: 'Se agregó un nuevo detalle de boleta', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar un nuevo detalle de boleta: ' + error.message });
    }
});


ruta.get('/detalle', async (req, res) => {
    try {
        const result = await controllerDetalle.obtenerTodosDetalle();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener todos los detalles de boletas: ' + error.message });
    }
});

ruta.get('/detalle/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await controllerDetalle.getUnoDetalle(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el detalle de boleta: ' + error.message });
    }
});

ruta.put('/detalleActualizar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = req.body;
        await controllerDetalle.updateDetalle(id, result);
        res.status(200).json({ message: 'Se actualizó el detalle de boleta' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el detalle de boleta: ' + error.message });
    }
});

ruta.delete('/detalleEliminar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await controllerDetalle.deleteDetalle(id);
        res.status(200).json({ message: 'Se eliminó el detalle de la boleta' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el detalle de la boleta: ' + error.message });
    }
});

module.exports = ruta;
