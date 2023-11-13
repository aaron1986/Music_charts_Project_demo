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


 
/* app.get("/charts", async (request, response) => {
  const { search } = request.query;
  try {
    const music_api = {
      method: 'GET',
      url: 'https://billboard-api5.p.rapidapi.com/api/charts/billboard-200',
      params: { week: '2022-10-08' },
      headers: {
        'X-RapidAPI-Key': '8b32ba5f3dmshd2ba64c7bdcfe4ap1b4606jsn4b241837296c',
        'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
      }
    };

    // retrieve data 
    const answer = await axios(music_api);

    //extract data from json
    const entries = answer.data.chart.entries;
    const extractedData = entries.map((entry) => ({
      rank: entry.rank,
      title: entry.title,
      cover: entry.cover,
      position: entry.position,
    }));

   //show data
    const formattedData = {
      chart: {
        week: answer.data.chart.week,
        entries: extractedData,
      },
    };

   //output data on screen
    response.json(formattedData);

  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}); */

// Always include this
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
