const express = require("express");
const bcrypt = require("bcrypt");

const Customer = require("../models/customer");

const router = express.Router();

router.post("/register", async (req, res) => {

    try {

        const data = req.body;

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const customer = new Customer({
            name: data.name,
            email: data.email,
            password: hashedPassword,
            phone: data.phone,
            address: data.address
        });

        await customer.save();

        res.send("Customer registered successfully");

    } catch (error) {

        console.log(error);
        res.status(500).send("Error registering customer");

    }

});

module.exports = router;