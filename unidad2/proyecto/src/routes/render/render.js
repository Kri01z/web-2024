const {  Router } = require('express');
const routes = Router()

routes.get('/', (req, res) =>{
    res.render('../../views/home.ejs')

})

module.exports = routes;