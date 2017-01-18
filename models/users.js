var restful = require("node-restful");
var mongoose = restful.mongoose;

var userSchema = new mongoose.Schema({
	_fullname: String,
	_email: String,
	_password: String,
	_dateCreate: {
		type : Date,
		default: Date.now
	},
	_lastUpdate: {
		type : Date,
		default: Date.now
	}
});

// return model.
module.exports = restful.model("tbl_user", userSchema)