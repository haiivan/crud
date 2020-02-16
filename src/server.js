const express = require("express");
const path = require('path');
//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 6000);
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.urlencoded({
  extended: false
}));
//Global VARS

//Routes
app.get('/', (req, res) => {
  res.send('Hello!')
})

//Static files


module.exports = app;