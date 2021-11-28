const express = require('express');
const http = require('http');
const routesFunc = require('./api/routes/funcRoutes.js');
const routesDeptos = require('./api/routes/deptoRoutes.js');

require('./database/indexDb.js');

const app = express();

app.set('url', 'http://localhost:');
app.set('porta', 3344);

app.use(express.json());
app.use(routesFunc);
app.use(routesDeptos);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
});