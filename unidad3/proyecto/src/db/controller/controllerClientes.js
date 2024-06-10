const db = require('../conexion.js');

const TABLA = "clientes";

//falta saber como funciona
function insertClientes(body) {
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

function obtenerTodosClientes() {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ${TABLA}`, (error, resultado) =>{
            return error ? reject(error) : resolve(resultado);
        })
    });
}

function getUnoClientes(id) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ${TABLA}  WHERE id = ${id}`, (error, resultado) => {
            return error ? reject(error) : resolve(resultado);
        })
    });
}

//falta saber como funciona
function updateClientes(id, data) {
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

function deleteClientes(id) {
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

module.exports = { obtenerTodosClientes, insertClientes, getUnoClientes, updateClientes, deleteClientes };