const { resolve } = require('path');
const db = require('../conexion.js');
const { error } = require('console');

const TABLA = "empleados";

//falta saber como funciona
function insertEmpleados(body) {
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

function obtenerTodosEmpleados() {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ${TABLA}`, (error, resultado) =>{
            return error ? reject(error) : resolve(resultado);
        })
    });
}

function getUnoEmpleados(id) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ${TABLA}  WHERE id = ${id}`, (error, resultado) => {
            return error ? reject(error) : resolve(resultado);
        })
    });
}

//falta saber como funciona
function updateEmpleados(id, data) {
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

function deleteEmpleados(id) {
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

module.exports = { obtenerTodosEmpleados, insertEmpleados, getUnoEmpleados, updateEmpleados, deleteEmpleados };
