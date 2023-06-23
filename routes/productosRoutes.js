const express = require('express');
const router = express.Router();
const { 
    obtenerProductos,
    obtenerProductoPorId, 
    actualizarProducto,
    editarProducto, 
    borrarProducto,
    agregarProducto 
} = require("../controllers/productosController")

// ver todos los productos "/productos"
router.get("/", obtenerProductos)

// Obtener un producto por su ID (ej vista de producto detallado)
router.get("/:id", obtenerProductoPorId)

// Editar un producto (ej formulario prellenado para editar producto)
router.get("/editar/:id", editarProducto)

// Editar un producto enviando por formulario
router.put("/:id", actualizarProducto)

// Borrar un producto
router.delete("/:id", borrarProducto)

// Agregar un producto
router.post("/", agregarProducto)

module.exports = router;
