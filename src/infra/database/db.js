const mysql = require("mysql");
require('dotenv').config({path:__dirname+'/./../../../.env'});

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    multipleStatements: true,
});

db.connect( (erro) => {
    if(erro){
        throw erro;
    }
    console.log(`Connected to database [${process.env.DB_NAME}]`);
});

global.db = db;

module.exports = db;