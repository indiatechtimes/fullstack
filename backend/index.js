
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/world', (req, res) => {
  res.send('Hello World!');
});

app.get('/', (req, res) => {
  res.send('Welcome to our server!');
});


app.get('/home', (req, res) => {
  res.send('Welcome to our HomePage!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});