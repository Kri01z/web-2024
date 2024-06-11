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
    console.log(req.body.nombre)
    res.render('about')
})




module.exports = router;