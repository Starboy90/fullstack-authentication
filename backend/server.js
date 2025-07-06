require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("../backend/routers/auth-routers");
const connectDB = require("../backend/utils/db");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "POST",
    credentials: true, // corrected spelling
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);

const port = 9290;

app.get("/", (req, res) => {
    res.status(200).send("Hello World"); // Status code 300 is for redirects, use 200 for success
});

connectDB().then(() =>
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
);
