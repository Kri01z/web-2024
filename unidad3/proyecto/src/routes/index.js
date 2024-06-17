const { Router } = require('express');

const clientesRoutes = require('./clientes.routes.js');
const empleadosRoutes = require('./empleados.routes.js');
const productosRoutes = require('./productos.routes.js');

const router = Router()

router.use(clientesRoutes)
router.use(empleadosRoutes)
router.use(productosRoutes)

router.get('/', (req, res) => {
    const titulo = "Home";
    res.render('home', {titulo})
})
router.get('/about', (req, res) => {
    const titulo = "Integrantes";
    res.render('about', {titulo})
})

router.get('/clientesIndex', (req, res) => {
    const titulo = "Clientes";
    res.render('clientes', {titulo})
})
router.get('/clientesInsert', (req, res) => {
    const titulo = "Clientes Insertar";
    res.render('clientesIndex/clientesInsertar', {titulo})
})

router.get('/productosIndex', (req, res) => {
    const titulo = "Productos";
    res.render('productos', {titulo})
})
router.get('/productosInsert', (req, res) => {
    const titulo = "Productos Insertar";
    res.render('productosIndex/productosInsertar', {titulo})
})

router.get('/empleadosIndex', (req, res) => {
    const titulo = "Empleados";
    res.render('empleados', {titulo})
})
router.get('/empleadosInsert', (req, res) => {
    const titulo = "Empleados Insertar";
    res.render('empleadosIndex/empleadosInsertar', {titulo})
})


module.exports = router;