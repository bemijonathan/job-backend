const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



mongoose.connect( 'mongodb+srv://jona:jona@cluster0-pps4s.mongodb.net/test?retryWrites=true&w=majority',  {dbName: 'yourDbName'});
const Table = require('./db')



app.get('/', (req, res) => {

  Table.find({}).then(e => {
    res.send(e)
  })
  
})


app.post('/', (req, res) => {
  console.log(req.body)

  var NewTable = new Table({
    Company:req.body.Company,
    Contact:req.body.Contact,
    Country:req.body.Country
  })

  NewTable.save().then(t => {
    console.log(t)
    res.send(t)
  }, err => {
      console.log(err)
      res.send(err)
  })  

})

app.listen(port, console.log('hello'))