const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;
const mongoose = require("mongoose");

const Music = require("./Models/music");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (_, response) => {
  response.json("Testing the server!");
});

app.get("/charts", async (request, response) => {
  try {
    const musicCharts = await Music.find(request.query);
    response.json(musicCharts);
  } catch (error) {
    response.status(500).json({ error: "Error retrieving music charts" });
  }
});

app.delete("/charts/:id", async (request, response) => {
  try {
    const deleteMusic = await Music.findByIdAndDelete(request.params.id);
    response.json(deleteMusic);
  } catch (error) {
    response.status(500).json({ error: "Error retrieving music charts" });
  } 
});

app.post("/charts", async(request, response) => {
  const newChart = await Music.create(request.body);
  response.json(newChart);
});
 


// Always include this
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
