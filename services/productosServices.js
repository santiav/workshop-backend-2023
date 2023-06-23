// En los servicios manejamos complejidades (validaciones)
const productosModels = require("../models/productosModels")


const obtenerProductos = async () => {
    const productos = await productosModels.obtenerProductos()
    return productos
}

const obtenerProductoPorId = () => { //  "/productos/:id"
    
}

const editarProducto = () => {
   
}

const actualizarProducto = () => {
    
}

const borrarProducto = () => {
    
}

const agregarProducto = () => {
    
}

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    editarProducto,
    actualizarProducto,
    borrarProducto,
    agregarProducto
}

