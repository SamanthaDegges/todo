var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var todo = mongoose.model('todo', {
  description: String,
  dueDate: Date,
  isCompleted: Boolean
});

//var newtodo = Mongoose.model('laundry', {description:'laundry', dueDate: 9/22/2015, isCompleted: false});

/* GET home page. */
router.get('/', function(req, res, next) {
//res.render('index', { title: 'Express' });
  res.send("You've reached the todos/ endpoint!");
});

router.post ('/todos/:itemid/complete', function(req, res, next) {
  res.send('post');
});
//
// var todo = mongoose.model('todo', function(){
//     todo.save(function(err) {
//       if erre return handleError(err);
//     })
// });

module.exports = router;
