const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;


app.get("/", (_, response) => {
    response.json("Testing the server!");
  });

    //always include this
    app.listen(PORT, () => console.log(`App is running on port ${PORT}`));