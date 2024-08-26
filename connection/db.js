const mongoose = require('mongoose');
let date = new Date();

const users = mongoose.Schema({
    task: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: false,
        default: `${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`
    }
});

module.exports = mongoose.model('users', users)