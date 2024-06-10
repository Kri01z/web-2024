const { Router } = require('express');

const clientesRoutes = require('./dbRoutes/clientes.routes.js');
const empleadosRoutes = require('./dbRoutes/empleados.routes.js');
const productosRoutes = require('./dbRoutes/productos.routes.js');

const router = Router()

router.use(clientesRoutes)
router.use(empleadosRoutes)
router.use(productosRoutes)

router.get('/', (req, res) => {
    console.log(req.body.nombre)
    res.render('home')
})
router.get('/about', (req, res) => {
    console.log(req.body.nombre)
    res.render('about')
})




module.exports = router;