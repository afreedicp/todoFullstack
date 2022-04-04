var express = require('express');

const models = require('../models');
const router = express.Router({ mergeParams: true });

// const { where } = require('sequelize');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/GET', async (req, res) => {
  var todo = await models.Todo.findAll({});
  return res.status(200).json(todo);
});

router.post('/test', async (req, res) => {
  // let addTodo=await models.Todo.
});

// Todo.create({ task: taskName, status: 'active' });
// console.log('Connection has been established successfully.');

router.post('/', async (req, res) => {
  const { title, description } = req.body;
});

module.exports = router;
