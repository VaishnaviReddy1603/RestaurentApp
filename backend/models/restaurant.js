const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: String
    },

    address: {
        type: String
    },

    totalSeats: {
        type: Number,
        required: true
    },

    availableSeats: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("Restaurant", restaurantSchema);