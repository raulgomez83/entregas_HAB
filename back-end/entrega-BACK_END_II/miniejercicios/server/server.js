require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT;

const date = new Date();
const hour = date.getHours();

app.get("/", (req, res) => {
  if (hour < 12 && hour > 5) {
    res.send("Holi");
  } else {
    res.send("No tengo nada que decir");
  }
});
app.use((error, req, res) => {
  res.status(404).send("Algo hiciste mal");
});

app.listen(port, () => {
  console.log("Servidor web botando fume");
});
