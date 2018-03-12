const mongoose = require('mongoose');
const Schema = mongoose.Schema;

import bcrypt from 'bcrypt-nodejs';
import crypto from 'crypto';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

/**
 * Password hash middleware.
 */
UserSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) return next();
  bcrypt.genSalt(5, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {
 	comparePassword(candidatePassword, cb) {
 		bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
 			if (err) return cb(err);
 			cb(null, isMatch);
 		});
 	}
};

/**
* Statics
*/
UserSchema.statics = {};


// UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);
