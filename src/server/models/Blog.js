const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// установка схемы
const blogScheme = new Schema({
  author:String,
  text: String,
  title: String
});

module.exports = mongoose.model('Blog', blogScheme);
