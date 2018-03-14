'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = require('../../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 Configuring local strategy to authenticate strategies
 Code modified from : https://github.com/madhums/node-express-mongoose-demo/blob/master/config/passport/local.js
 */
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;

/*
By default, LocalStrategy expects to find credentials in parameters named username and password.
If your site prefers to name these fields differently, options are available to change the defaults.
*/
exports.default = new LocalStrategy({
  usernameField: 'email'
}, function (email, password, done) {
  _User2.default.findOne({ email: email }, function (err, user) {
    if (!user) return done(null, false, { message: 'Email ' + email + ' not found' });
    user.comparePassword(password, function (err, isMatch) {
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { message: 'Invalid email or password' });
    });
  });
});