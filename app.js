const express = require("express");
const app = express();
const mongoose = require("mongoose");
const seedDB = require("./seed");
const foodRoutes = require("./api/foodRoutes");
const cors = require("cors");
require("dotenv").config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.timeLog(err);
    });

// seedDB();

app.use(express.json());
app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "https://focused-pike-5815b0.netlify.app",
        ],
        credentials: true,
    })
);

app.get("/test", (req, res) => {
    res.status(200).json({ msg: "Server running." });
});

app.use(foodRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
