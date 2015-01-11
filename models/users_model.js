//so we bring in mongoose here
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//his defines the schema for the document/collection
var UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: String,
    color: String,
    hashed_password: String
});
//tell mongoose that this is going to be a collection/document called 'User'
mongoose.model('User', UserSchema);