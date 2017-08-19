const express = require('express')
var bodyParser = require('body-parser')
const app = express()


var mongoose = require('mongoose');
mongoose.connect();
/*var 




mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDB');
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: '127.0.0.1',
  dialect: 'sqlite',
  storage: __dirname + '/database.sqlite'
});

seq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.get({
      plain: true
    }));
  });
  */

// create application/json parser 
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies 
app.post('/yolo', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send(`${req.body.user} ${req.body.password} is registered`);
})


app.post('/yolo', function (req, res) {
  //let body = [];

  //res.send("login succesful ");
  //req.on('data', (chunk) => {
  //body.push(chunk);
  //console.log(chunk.toString());
  //}).on('end', () => {
  //body
  //res.send(body);
  // at this point, `body` has the entire request body stored in it as a string
  //});


  //res.write("sii");
})

app.get('/', function (req, res) {
  res.sendfile("index.html");

  //res.write("sii");
})

app.listen(3006, function () {
  console.log('Example app listening on port 3000!')
})
