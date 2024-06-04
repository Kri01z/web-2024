const mysql = require('mysql2');
const config = require('../config/config.js');

let con;
function connMYSQL(){

    con = mysql.createConnection(config.mysql);

    con.connect((error) =>{
        if (error){
        console.log('[db error]',error);
        setTimeout(connMYSQL,2000);
        } else {
            console.log('[db conectado]');
        }
    });

    con.on('error',error =>{
        console.log('[db error]', error);
        if (error.code === 'PROTOCOL_CONECCTION_LOST'){
            connMYSQL();
        } else {
            throw error;
        }
    });
}
connMYSQL();

module.exports = con