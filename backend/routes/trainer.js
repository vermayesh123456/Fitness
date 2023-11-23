const express = require("express");
const router = express.Router();
const Trainer = require("../models/trainer_model");

router.get("/", (req, res) => {
  // Define logic for handling GET requests if needed
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await Trainer.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await Trainer.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await Trainer.create(data);
    }
  } catch (e) {
    res.json("fail");
  }
});

module.exports = router;
