var mongoose = require('mongoose');

module.exports = mongoose.model('Comment',{
	name: String
});