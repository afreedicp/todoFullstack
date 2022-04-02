const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres@localahost:5432/todo');

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
