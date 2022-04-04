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

// router.post('/', async (req, res) => {
//   const { task, status } = req.body;
//   try {
//     todos = models.Todo.create({
//       title: title,
//       description: description,
//       completed: false,
//     });
//   } catch (error) {
//     return res.status(404).json('Something went wrong');
//   }
//   return res.status(200).json({ msg: 'success' });
// });
router.get('/getting', async (req, res) => {
  const getting = await models.Todo.findAll({});
  return res.status(200).json(getting);
});

router.post('/test', async (req, res) => {
  let { task } = req.body;
  let todo = models.Todo.create({
    task: task,
    status: 'active',
  });
  return res.status(200).json(todo);
  // console.log(req.body);
});

router.delete('delete', async (req, res) => {
  let { ind, task } = req.body;
  where: {
    id === ind;
  }
});
// Todo.create({ task: taskName, status: 'active' });
// console.log('Connection has been established successfully.');

router.post('/', async (req, res) => {
  const { title, description } = req.body;
});

module.exports = router;
