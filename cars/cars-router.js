const express = require("express");

const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrive cars" });
  }
});

module.exports = router;
