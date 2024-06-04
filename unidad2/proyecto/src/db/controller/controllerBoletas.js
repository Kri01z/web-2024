const db = require('../conexion.js');

const TABLA = "boletas";

function insertBoletas(body) {
    return new Promise((resolve, reject) => {

        db.query(`INSERT INTO ${TABLA} SET ?`, body, (error,resultado) => {
            if (error) {
                return reject(error);
            }
            return resolve(resultado);
            console.log(query);
        });
        
    });
}

function obtenerTodosBoletas() {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ${TABLA}`, (error, resultado) =>{
            return error ? reject(error) : resolve(resultado);
        })
    });
}

function getUnoBoletas(id) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ${TABLA}  WHERE id = ${id}`, (error, resultado) => {
            return error ? reject(error) : resolve(resultado);
        })
    });
}

function updateBoletas(id, data) {
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

function deleteBoletas(id) {
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

module.exports = { obtenerTodosBoletas, insertBoletas, getUnoBoletas, updateBoletas, deleteBoletas };