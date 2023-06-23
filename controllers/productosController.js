const productosServices = require("../services/productosServices")


const obtenerProductos = async (req, res) => {

    try {
        const productos = await productosServices.obtenerProductos()
        res.json(productos)
    } catch(err) {
        throw err
    }
    
}

const obtenerProductoPorId = (req, res) => { //  "/productos/:id"
    const id = req.params.id
    res.send("Obtener un producto por su ID " + id)
}

const editarProducto = (req, res) => {
    const id = req.params.id
    res.send("Enviando datos a la vista para prellenar formulario")
}

const actualizarProducto = (req, res) => {
    const id = req.params.id
    res.send("Editando el producto con ID " + id)
} 

const borrarProducto = (req, res) => {
    const id = req.params.id
    res.send("Borrando el producto con ID " + id)
}

const agregarProducto = (req, res) => {
    res.send("Agregando producto a la DB")
}

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    editarProducto,
    actualizarProducto,
    borrarProducto,
    agregarProducto
}

