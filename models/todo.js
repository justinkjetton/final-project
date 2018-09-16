let mongoose = require('mongoose');

let TodoSchema = new mongoose.Schema({
  description : String,
  status : String,
  owner: String
});

let Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;