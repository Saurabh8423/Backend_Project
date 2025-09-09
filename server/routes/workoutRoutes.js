const express = require("express");

const Workout = require("../models/workoutModels");

const router = express.Router();

//Require controller*************
const {getWorkouts} = require("../controllers/workoutController")


// Get entire records
router.get("/", getWorkouts);

//get single record ***********
router.get("/:id", getWorkouts);


module.exports = router;