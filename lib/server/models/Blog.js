'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// установка схемы
var blogScheme = new Schema({
  author: String,
  text: String,
  title: String
});

module.exports = mongoose.model('Blog', blogScheme);