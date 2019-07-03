const mongoose = require('mongoose')

var Schema  = new mongoose.Schema({
  Company:String,
  Contact:String,
  Country:String
})

var Table = mongoose.model('Table', Schema);

module.exports = Table





