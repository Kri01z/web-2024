const { Router } = require('express');
const ress = require('../../res/response');

const clientes = require('../../db/controller/controllerClientes');
const empleados = require('../../db/controller/controllerEmpleados');
const productos = require('../../db/controller/controllerProductos');

routerApi = new Router();

routerApi.get('/',(req, res) => {
    
});

module.exports = routerApi;