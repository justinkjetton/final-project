// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');
let passport = require('passport');
const app = express();

// PRODUCTION ONLY
// app.use(express.static(path.join(__dirname, 'client/build')));

// models
require('./models/user');
require('./models/todo');

let users = require('./routes/users');
let todos = require('./routes/todos');

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(passport.initialize());
app.use('/users', users);
app.use('/todos', todos);

mongoose.connect('mongodb://MisfitCoders:MFC123456@ds257752.mlab.com:57752/misfit_weatherdb');

// PRODUCTION ONLY
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
