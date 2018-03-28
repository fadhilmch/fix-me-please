const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
