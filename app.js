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
      throw err;
    }
    console.log(result);
    response.send('database created...');
  });
});

app.get('/createuserstable', (request, response) => {
  let sql = 'CREATE TABLE users (email VARCHAR(255) PRIMARY KEY, created_at TIMESTAMP DEFAULT NOW())';
  db.query(sql, (err, result) => {
    if(err) {
      throw err;
    }
    console.log(result);
    response.send('Users table created...');
  });
});

app.get('/adduser1', (request, response) => {
  let sql = 'INSERT INTO users SET ?';
  let content = { email: 'abc@cde.xyz' };
  db.query(sql, content, (err, result) => {
    if(err) {
      throw err;
    }
    console.log(result);
    response.send('First email added...');
  });
});

app.get('/adduser2', (request, response) => {
  let sql = 'INSERT INTO users SET ?';
  let content = { email: 'hello@world.com' };
  db.query(sql, content, (err, result) => {
    if(err) {
      throw err;
    }
    console.log(result);
    response.send('Second email added...');
  });
});

app.listen('3000', () => {
  console.log('Server started on port 3000');
});