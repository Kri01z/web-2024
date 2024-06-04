const { Router } = require('express');
//const res = require('../../res/response.js');
const controllerClientes = require('../../db/controller/controllerClientes.js');

const ruta = Router();

ruta.post('/clientesInsertar', async (req, res) => {
    console.log(req.body);

    try {
        const result = await controllerClientes.insertClientes(req.body);
        
        res.status(200).json({ message: 'Se agregó un nuevo cliente', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar un nuevo cliente: ' + error.message });
    }
});


ruta.get('/clientes', async (req, res) => {
    try {
        const result = await controllerClientes.obtenerTodosClientes();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener todos los clientes: ' + error.message });
    }
});

ruta.get('/clientes/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await controllerClientes.getUnoClientes(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el cliente: ' + error.message });
    }
});

ruta.put('/clientesActualizar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = req.body;
        await controllerClientes.updateClientes(id, result);
        res.status(200).json({ message: 'Se actualizó un cliente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el cliente: ' + error.message });
    }
});

ruta.delete('/clientesEliminar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await controllerClientes.deleteClientes(id);
        res.status(200).json({ message: 'Se eliminó el cliente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el cliente: ' + error.message });
    }
});

module.exports = ruta;
