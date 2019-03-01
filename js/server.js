const express = require('express');
const http = require('http')
const path = require('path')

const app = express();
let server = http.createServer(app)

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')))

//IO = esta es la comunicacion del backend

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});