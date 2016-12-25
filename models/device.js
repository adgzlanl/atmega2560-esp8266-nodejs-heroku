var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deviceID=Schema.ObjectId;
var DeviceSchema = new Schema({
  ID                  :deviceID,
  Param1                : { type: String, required: true },
  Param2                : { type: String, required: true },
  Param3                : { type: String, required: true },
  Param4                : { type: String, required: true }
});

var device = mongoose.model('Devices', DeviceSchema);
module.exports = device;