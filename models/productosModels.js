const db = require("../config/db")

const obtenerProductos = async (filtros) => {
    console.log(filtros)
    /*
    filtros = {
        nombre: "dell",
        precioMin: 50,
        precioMax: 500,
        orden: "",
        limite: 10
    }

    */

    let sql = 'SELECT * FROM productos';

    // Filtros 
    let whereClause = ""
    let values = []

    if (filtros.nombre) { // ej localhost:3000/productos?nombre=dell
        whereClause += 'nombre LIKE ? AND '
        values.push(`%${filtros.nombre}%`)
    }

    if (filtros.precioMin && filtros.precioMax) {
        whereClause += 'precio BETWEEN ? AND ? AND '
        values.push(filtros.precioMin, filtros.precioMax)
    } else if (filtros.precioMin) {
        whereClause += 'precio > ? AND '
        values.push(filtros.precioMin)
    } else if (filtros.precioMax) {
        whereClause += 'precio < ? AND '
        values.push(filtros.precioMax)
    }

    if (whereClause !== '') {
        console.log("whereClause ANTES", whereClause)
        whereClause = 'WHERE ' + whereClause.slice(0, -5)
        sql += ' ' + whereClause
        console.log("whereClause DESPUES", whereClause) 
        console.log("sql", sql)
    }

    if (filtros.orden) {
        const orden = filtros.orden === 'desc' ? 'DESC' : 'ASC'
        sql += ` ORDER BY precio ${orden}`
    }

    sql += ` LIMIT ${filtros.limite}`


    try {
        const [rows] = await db.query(sql, values)
        console.log(rows)
        return rows; 
    } catch (err) {
        throw new Error('Error al obtener los productos desde la base de datos');
    }

}

// obtenerProductoPorId y así con los demás...

module.exports = {
    obtenerProductos
}