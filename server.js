const express = require('express');
const mysql = require('mysql');
const handlebars = require('express-handlebars');

const PORT = process.env.PORT || 3000
const app = express()
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'seinfeld'
})

connection.connect(err => {
    if (err) {
        throw err
    }
    console.log(`Connected as id: ${connection.threadId}`)
})