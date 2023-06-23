const db = require("../config/db")

const obtenerProductos = async () => {

    let sql = 'SELECT * FROM productos';

    try {
        const [rows] = await db.query(sql)
        console.log(rows)
        return rows; 
    } catch (err) {
        throw new Error('Error al obtener los productos desde la base de datos');
    }

}

module.exports = {
    obtenerProductos
}