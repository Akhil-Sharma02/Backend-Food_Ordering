const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
    {
        orderedItems: [
            {
                _id: { id: false },
                name: String,
                desc: String,
                price: Number,
                qty: Number,
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
