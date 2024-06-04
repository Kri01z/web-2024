const express = require('express');
const routes = require('./routes/index.js');
const path = require('path');
const morgan = require('morgan');
const config = require('./config/config.js');
//const api = require('./routes/api.js');
//const render = requiere('./routes/render.js') 

// Objetos del sistema
const app = express();

app.use(express.json())

//app.use("/api", api);
//app.use(render);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//const port = 5000;
app.use(routes);

app.set('port', config.app.port);
const port = app.get('port');


// Settings
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

// no usa " tampoco ' en realidad usa alt gr+} = `
app.listen(port, () => {
    console.log(`Website: http://localhost:${port}`);
});