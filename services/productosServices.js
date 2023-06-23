// En los servicios manejamos complejidades (validaciones)
const productosModels = require("../models/productosModels")


const obtenerProductos = async (filtros) => {
    const productos = await productosModels.obtenerProductos(filtros)
    return productos
}

// obtenerProductoPorId y así con los demás...
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

