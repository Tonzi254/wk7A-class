const mongoose = require('mongoose');

// Schema
const teamSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    stadium: {
        required: true,
        type: String,
    },
    stadiumCapacity: {
        required: false,
        type: Number,
    },
});

module.exports = mongoose.model('Team', teamSchema);