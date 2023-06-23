const express = require('express')
const app = express()
const db = require('./config/db')

// Obtener todos los productos 
app.get('/', function (req, res) {
    res.send(`
        <h1>Workshop de Backend</h1>
        <p>Se han creado los siguientes endpoints</p>
        <ul>
            <li>GET <a href="">/productos</a></li>
            <li>GET <a href="">/productos/:id</a></li>
            <li>PUT <a href="">/productos/:id</a></li>
            <li>DELETE <a href="">/productos/:id</a></li>
            <li>POST <a href="">/productos/</a></li>
        </ul>
    `)
})

// ver todos los productos
app.get("/productos/", (req, res) => {
    res.send("Obteniendo el listado de productos")
})

// Obtener un producto por su ID (ej vista de producto detallado)
app.get("/productos/:id", (req, res) => {
    const id = req.params.id
    res.send("Obtener un producto por su ID " + id)
})

// Editar un producto (ej formulario prellenado para editar producto)
app.get("/productos/editar/:id", (req, res) => {
    const id = req.params.id
    res.send("Enviando datos a la vista para prellenar formulario")
})

// Editar un producto enviando por formulario
app.put("/productos/:id", (req, res) => {
    const id = req.params.id
    res.send("Editando el producto con ID " + id)
})

// Borrar un producto
app.delete("/productos/:id", (req, res) => {
    const id = req.params.id
    res.send("Borrando el producto con ID " + id)
})

// Agregar un producto
app.post("/productos/", (req, res) => {
    res.send("Agregando producto a la DB")
})


app.listen(3000, () => console.log("Servidor ONLINE"))