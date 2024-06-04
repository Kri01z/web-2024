const db = require('../conexion.js');

const TABLA = "productos";

//falta saber como funciona
function insertProductos(body) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLA} SET ?`
        console.log(query);
        db.query(query, body, (error,resultado) => {
                if (error) {
                    return reject(error);
                }
                return resolve(resultado);
            });
        });
    }

function obtenerTodosProductos() {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ${TABLA}`, (error, resultado) =>{
            return error ? reject(error) : resolve(resultado);
        })
    });
}

function getUnoProductos(id) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ${TABLA}  WHERE id = ${id}`, (error, resultado) => {
            return error ? reject(error) : resolve(resultado);
        })
    });
}

//falta saber como funciona
function updateProductos(id, data) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${TABLA} SET ? WHERE id = ?`;
        db.query(query, [data, id], (error, resultado) => {
            if (error) {
                return reject(error);
            }
            resolve(resultado);
        });
    });
}

function deleteProductos(id) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${TABLA} WHERE id = ?`;
        db.query(query, [id], (error, resultado) => {
            if (error) {
                return reject(error);
            }
            resolve(resultado);
        });
    });
}

module.exports = { obtenerTodosProductos, insertProductos, getUnoProductos, updateProductos, deleteProductos };
