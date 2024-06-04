const express = require('express');
const routes = require('./routes/index.js');
const morgan = require('morgan');
const config = require('./config/config.js');

const app = express();

app.use(express.json())

app.use(routes);

app.set('port', config.app.port);
const port = app.get('port');

app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Website: http://localhost:${port}`);
});