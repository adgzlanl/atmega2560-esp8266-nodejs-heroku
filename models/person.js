var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var PersonSchema   = new Schema({
  _id:Schema.ObjectId,
	name: String,
	email: String,
	pass: String,
});

module.exports = mongoose.model('Person', PersonSchema);
