/*
 Configuring local strategy to authenticate strategies
 Code modified from : https://github.com/madhums/node-express-mongoose-demo/blob/master/config/passport/local.js
 */
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;

import User from '../../models/User';

 /*
 By default, LocalStrategy expects to find credentials in parameters named username and password.
 If your site prefers to name these fields differently, options are available to change the defaults.
 */
export default new LocalStrategy({
 	usernameField: 'email'
}, (email, password, done) => {
 	User.findOne({ email }, (err, user) => {
 		if (!user) return done(null, false, { message: `Email ${email} not found` });
 		user.comparePassword(password, (err, isMatch) => {
 			if (isMatch) {
 				return done(null, user);
 			}
 				return done(null, false, { message: 'Invalid email or password' });
 		});
 	});
});
