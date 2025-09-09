const express = require('express');

const app = express();

//Port**********************
const port = process.env.PORT || 4000


// database connection*****************
require("./db/connection")


// Require routes*****************
const workoutRoutes = require("./routes/workoutRoutes")

//Middleware*********************
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("hello")
})

//Routes ***********************
app.use("/api/workouts", workoutRoutes);

app.listen(port, ()=>{
    console.log(`Server is running at PORT: ${port}`);
})