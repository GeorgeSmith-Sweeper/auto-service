const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// setup express app
const app = express();

// log requests to console
app.use(logger('dev'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to car work',
}));

module.exports = app;
