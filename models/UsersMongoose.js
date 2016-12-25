var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ObjectId=Schema.ObjectId;
var UsersSchema   = new Schema({
  ID:ObjectId,
	name: String,
	email: String,
	pass: String

});

module.exports = mongoose.model('Users', UsersSchema);
