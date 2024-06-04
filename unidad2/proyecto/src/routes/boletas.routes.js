const { Router } = require('express');
const controllerBoletas = require('../db/controller/controllerBoletas.js');

const ruta = Router();

ruta.post('/boletasInsertar', async (req, res) => {
    console.log(req.body);

    try {
        const result = await controllerBoletas.insertBoletas(req.body);
        
        res.status(200).json({ message: 'Se agregó una nueva boleta', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar una nueva boleta: ' + error.message });
    }
});


ruta.get('/boletas', async (req, res) => {
    try {
        const result = await controllerBoletas.obtenerTodosBoletas();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener todas las boletas: ' + error.message });
    }
});

ruta.get('/boletas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await controllerBoletas.getUnoBoletas(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la boleta: ' + error.message });
    }
});

ruta.put('/boletasActualizar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = req.body;
        await controllerBoletas.updateBoletas(id, result);
        res.status(200).json({ message: 'Se actualizó una boleta' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la boleta: ' + error.message });
    }
});

ruta.delete('/boletasEliminar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await controllerBoletas.deleteBoletas(id);
        res.status(200).json({ message: 'Se eliminó la boleta' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la boleta: ' + error.message });
    }
});

module.exports = ruta;
