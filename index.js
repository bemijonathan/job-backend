const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



mongoose.connect( process.env.MONGODB_URI ||'mongodb://localhost:27017/table', {useNewUrlParser: true});
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