require("dotenv").config();
const express = require("express");
const port = process.env.PORT;

const os = require("os");
const operation = (os.freemem() * 100) / os.totalmem();
console.log(operation);

const app = express();

app.use((req, res) => {
  res.send(`La memoria libre del sistema es del ${operation}%`);
});

app.use((error, req, res) => {
  res.status(500).send("Algo hiciste mal");
});

app.listen(port, () => {
  console.log("Servidor web botando fume");
});
