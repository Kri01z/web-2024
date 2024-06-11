const express = require('express');
const routes = require('./routes/index.js');
const path = require('path');
const morgan = require('morgan');
const config = require('./config/config.js');

const app = express();

app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(routes);
app.set('port', config.app.port);
const port = app.get('port');
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Website: http://localhost:${port}`);
});