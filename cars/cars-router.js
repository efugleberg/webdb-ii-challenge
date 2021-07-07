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

router.get("/:id", async (req, res) => {
  console.log(req.params);
  try {
    const { id } = req.params;
    const car = await db("cars").where({ id });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve car" });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const carData = req.body;
    const [id] = await db("cars").insert(carData);
    const newCarEntry = await db("cars").where({ id });
    res.status(201).json(newCarEntry);
  } catch (err) {
    res.status(500).json({ message: "Failed to store data" });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const car = await db('cars').where({ id }).del();
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: "failed to delete car" })
  }
})

module.exports = router;
