const express = require('express')
const app = express()
const db = require('./config/db')
const productosRoutes = require('./routes/productosRoutes');

// Obtener todos los productos 
app.get('/', function (req, res) {
    res.send(`
        <h1>Workshop de Backend</h1>
        <p>Se han creado los siguientes endpoints</p>
        <ul>
            <li>GET <a href="./productos">/productos</a></li>
            <li>GET <a href="./productos/1">/productos/:id</a></li>
            <li>PUT <a href="">/productos/:id</a> (probar en insomnia)</li>
            <li>DELETE <a href="">/productos/:id</a> (probar en insomnia)</li>
            <li>POST <a href="">/productos/</a> (probar en insomnia)</li>
        </ul>
    `)
})

app.use("/productos", productosRoutes)

// 404
app.use(function (req, res, next) {
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL no encontrada'
    };
    res.status(404).send(respuesta);
});

app.listen(3000, () => console.log("Servidor ONLINE"))