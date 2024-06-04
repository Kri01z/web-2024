const { Router } = require('express');

const clientesRoutes = require('./clientes.routes.js');
const empleadosRoutes = require('./empleados.routes.js');
const productosRoutes = require('./productos.routes.js');
const boletasRoutes = require('./boletas.routes.js');
const detalleRoutes = require('./detalle_boletas.routes.js');

const router = Router()

router.use(clientesRoutes)
router.use(empleadosRoutes)
router.use(productosRoutes)
router.use(boletasRoutes)
router.use(detalleRoutes)

router.get('/', (req, res) => {
    console.log(req.body.nombre)
    res.render('home')
})
router.get('/about', (req, res) => {
    console.log(req.body.nombre)
    res.render('about')
})




module.exports = router;