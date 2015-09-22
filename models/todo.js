var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = Schema({
  description: {type: String, required: true},
  dueDate: {type: Date, required: false},
  createdAt: {type: Date, required: true, default: Date.now()},
  isCompleted: {type: Boolean, required: true, default: false}
});

var todo = mongoose.model('todo', todoSchema);

module.exports = todo;
