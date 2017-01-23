var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema = new Schema({
  		nom : String,
		img : String,
		dimensionLong: String,
		dimensionLarg: String,
		date: String

});

module.exports = mongoose.model('Oeuvre', BearSchema);
