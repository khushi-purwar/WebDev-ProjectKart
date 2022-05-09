const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MemoriesSchema = new Schema({
    postTitle: {
        type: String
    },
    postStory: {
        type: String
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('memories', MemoriesSchema);