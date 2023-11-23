const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/user");
const trainerRouter = require("./routes/trainer");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.use("/exercises", exerciseRouter);
app.use("/user", userRouter);
app.use("/trainers", trainerRouter);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
