const mysql = require("mysql2/promise");
require("dotenv").config();

// Cria a conexão com o banco
const pool = mysql.createPool({
  host: process.env.DB_HOST,         // Host fornecido pelo PlanetScale
  user: process.env.DB_USER,         // Usuário gerado no Connect > Node.js
  password: process.env.DB_PASSWORD, // Senha correspondente
  database: process.env.DB_DATABASE, // Nome do banco (ex: api_playlist)
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: true
  }
});

module.exports = pool;


/*
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true // Necessário para PlanetScale
  }
});
*/