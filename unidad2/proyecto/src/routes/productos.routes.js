const { Router } = require('express');
const controllerProductos = require('../db/controller/controllerProductos.js');

const ruta = Router();

ruta.post('/productosInsertar', async (req, res) => {
    console.log(req.body);
    try {
        const result = await controllerProductos.insertProductos(req.body);
        res.status(200).json({ message: 'Se agregó un nuevo producto', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar un nuevo producto: ' + error.message });
    }
});

ruta.get('/productos', async (req, res) => {
    try {
        const result = await controllerProductos.obtenerTodosProductos();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener todos los productos: ' + error.message });
    }
});

ruta.get('/productos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await controllerProductos.getUnoProductos(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el productos: ' + error.message });
    }
});

ruta.put('/productosActualizar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = req.body;
        await controllerProductos.updateProductos(id, result);
        res.status(200).json({ message: 'Se actualizó un producto' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto: ' + error.message });
    }
});

ruta.delete('/productosEliminar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await controllerProductos.deleteProductos(id);
        res.status(200).json({ message: 'Se eliminó el producto' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto: ' + error.message });
    }
});

module.exports = ruta;