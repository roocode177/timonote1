const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

let appointments = [];

app.post("/book", (req, res) => {
    const data = req.body;
    appointments.push(data);
    res.json({ message: "Appointment saved" });
});

app.get("/appointments", (req, res) => {
    res.json(appointments);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
