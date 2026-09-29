const express = require("express");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customer_routes");

const app = express();

app.use(express.json());
app.use("/api/customer", customerRoutes);

mongoose.connect("mongodb://localhost:27017/restaurant_management")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});