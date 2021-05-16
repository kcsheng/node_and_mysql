const mysql = require('mysql');
const express = require('express');
const faker = require('faker');

const db = mysql.createConnection({
  host     : '192.168.64.2',
  user     : 'root',
  password : '12345',
  database : 'join_us'
});

db.connect((err) => {
  if(err) { 
    throw err; 
  }
  console.log('MySql is conneted...');
});

const app = express();

app.get('/createdb', (request, response) => {
  let sql = 'CREATE DATABASE join_us';
  db.query(sql, (err, result) => {
    if(err) {
      throw err
    }
    console.log(result);
    response.send('database created...');
  })
})

// app.get('/createtable', (request, response))

app.listen('3000', () => {
  console.log('Server started on port 3000');
})