const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleID: String
});

mongoose.model('users',UserSchema);