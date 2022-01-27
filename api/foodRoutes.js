const express = require("express");
const router = express.Router();
const Food = require("../models/Food");
const Order = require("../models/Order");

router.get("/allFoods", async (req, res) => {
    try {
        const allfoods = await Food.find();
        res.status(200).json(allfoods);
    } catch (err) {
        res.status(404).json({ msg: "Cannot fetch the Foods at the moment." });
    }
});

router.post("/placeOrder", async (req, res) => {
    try {
        const { cart: orderedItems } = req.body;
        const newOrder = new Order({ orderedItems });
        await newOrder.save();
        res.status(200).json({ msg: "Order Placed Successfully." });
    } catch (err) {
        res.status(404).json({
            msg: "An Error occurred while placing your Order.",
        });
    }
});

module.exports = router;
