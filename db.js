const mysql = require("mysql2/promise");

async function customQuery(sqlQuery, sqlValues) {


    /*
 * Este archivo se creó para tener un lugar centralizando donde esté la
 * conexión a la base de datos.
 *
 * De forma arbitraria se lo nombró `db.js`.
 *
 * Lo realice de esta forma para probar
 * se debe actualizar cuando ya no estemos en localhost sino con el proyecto deployado
 *
 */

    const connection = await mysql.createConnection({
        host: "localhost",   
        user: "root",
        password: "root",
        database: "eccommerce",
    });
    const [result, fields] = await connection.execute(sqlQuery, sqlValues);

    connection.end();
    return result

}

module.exports = customQuery;