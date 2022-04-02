var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test', (req, res) => {
  console.log('hello');
  console.log(req.body.newTask.taskName);
  // sequelize.authenticate();
  console.log('Connection has been established successfully.');
  return res.send({ title: 'Testing' });
});

module.exports = router;
