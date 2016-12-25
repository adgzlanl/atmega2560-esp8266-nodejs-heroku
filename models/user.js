var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userID=Schema.ObjectId;
var UserSchema = new Schema({
  ID                  :userID,
  name                : { type: String, required: true },
  email               : { type: String, required: true },
  pass                : { type: String, required: true },
  deviceID            : { type: String, required: true }
});

var User = mongoose.model('users', UserSchema);
module.exports = User;