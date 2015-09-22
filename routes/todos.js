'use strict';

var express = require('express');
var router = express.Router();
var todo = require('../models/todo');

// var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/testdb');
// var todo = mongoose.model('todo', {
//   description: String,
//   dueDate: String,
//   isCompleted: Boolean
// }); //This was moved to models as module.


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("test");
  // todo.find({}, function(err, tasks){
  //   res.send(err || tasks);
  // })//return all todos AND LATER res.render('index', { title: 'Express' });
});

// router.post('/', function(req, res) {   //create one new todo by calling the schema and saving it.
//   var newtodo = new todo(req.body);
//   newtodo.save(function(err, saved) {
//     res.send(err || 'task created.');
//   });
// });
//
// router.delete('/:todoId', function(req, res) {
//   todo.findbyIdAndRemove(req.params.todoId, function(err, deletednewtodo){
//     if(err || !deletednewtodo){
//       res.status(400).send(err ||"item not found");
//     } else {
//       res.send("you have deleted a todo in the database.");
//     }
//   });
// });
//
// router.put('/:todoId/toggle', function(req, res) { //this takes the body of the url and passes it into our function so we can use it.
//   todo.findById(req.params.todoId, function(err, todo){
//     todo.isCompleted = !todo.isCompleted;
//     todo.save(function(err, saved) {
//       res.send("You have updated a todo in the databse.");
//     })
//   })
// });
//
// router.post('/todos/:itemid/complete', function(req, res) {
//   res.send('post');
//   //find item in db by matching itemid; then update and $set the isCompleted to true.
// });

module.exports = router;
