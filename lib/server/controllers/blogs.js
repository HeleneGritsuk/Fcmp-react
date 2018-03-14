'use strict';

var dbModel = require('../models/Blog');
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.getById = function (req, res, next) {
  var id = req.params.id;
  var details = {
    '_id': new ObjectID(id)
  };

  dbModel.findById(details).then(function (blog) {
    if (!blog) {
      next({ message: 'No blog found with that ID' });
    }
    res.status(200).send(blog);
  }).catch(next);
};
exports.getAll = function (req, res, next) {
  dbModel.find().then(function (blogs) {
    res.send({ success: true, blogs: blogs });
  }).catch(next);
};
exports.postBlog = function (req, res) {
  var postObj = {
    text: req.body.text,
    title: req.body.title,
    author: req.body.author
  };

  var post = new dbModel(postObj);

  post.save(function (err, createdPost) {
    return res.json({ success: true, post: createdPost });
  });
};
exports.deleteBlog = function (req, res, next) {
  var id = req.params.id;
  var objId = {
    '_id': new ObjectID(id)
  };

  dbModel.findByIdAndRemove(objId).then(function (blog) {
    if (!blog) {
      next({ message: 'No blog found with that ID' });
    }
    res.status(200).send('Blog ' + id + ' deleted!');
  }).catch(next);
};
exports.updateBlog = function (req, res, next) {
  var id = req.params.id;
  var objId = {
    '_id': new ObjectID(id)
  };
  var blog = {
    text: req.body.body,
    title: req.body.title
  };

  dbModel.findById(objId).then(function (blog) {
    if (!blog) {
      next({ message: 'No blog found with that ID' });
    } else {
      blog.text = req.body.body || blog.text;
      blog.title = req.body.title || blog.title;
      blog.save().then(function (todo) {
        res.status(200).send(todo);
      }).catch(next);
    }
  }).catch(next);
};