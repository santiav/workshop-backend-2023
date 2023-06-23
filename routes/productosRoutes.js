const express = require('express');
const router = express.Router();

// ver todos los productos "/productos"
router.get("/", (req, res) => {
    res.send("Obteniendo el listado de productos")
})

// Obtener un producto por su ID (ej vista de producto detallado)
router.get("/:id", (req, res) => { //  "/productos/:id"
    const id = req.params.id
    res.send("Obtener un producto por su ID " + id)
})

// Editar un producto (ej formulario prellenado para editar producto)
router.get("/editar/:id", (req, res) => {
    const id = req.params.id
    res.send("Enviando datos a la vista para prellenar formulario")
})

// Editar un producto enviando por formulario
router.put("/:id", (req, res) => {
    const id = req.params.id
    res.send("Editando el producto con ID " + id)
})

// Borrar un producto
router.delete("/:id", (req, res) => {
    const id = req.params.id
    res.send("Borrando el producto con ID " + id)
})

// Agregar un producto
router.post("/", (req, res) => {
    res.send("Agregando producto a la DB")
})

module.exports = router;
