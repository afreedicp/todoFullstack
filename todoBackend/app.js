const express = require('express');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo', {
  host: 'localhost',
  dialect: 'postgres',
});

try {
  await sequelize.authenticate();
  console.log('got connected');
} catch (e) {
  console.log('error happened', e);
}
module.exports = app;
