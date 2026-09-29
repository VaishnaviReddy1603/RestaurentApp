const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({

    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },

    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    numberOfPeople: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["PENDING", "APPROVED", "CANCELLED"],
        default: "PENDING"
    }

});

module.exports = mongoose.model("Reservation", reservationSchema);