const express = require("express");
const cors = require("cors");
const client = require("./erueka");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
client.start();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://192.168.2.79:8999",
      "http://localhost:8999",
      "http://192.168.2.79:8761",
      "http://localhost:8761", 
      "http://192.168.2.91:3000",
      "http://localhost:3000"
    ],
  })
);

app.get("/test1", (req, res) => {
  res.json({
    msg: `node server-1 running from ${process.env.instnceID}`,
    ip: `${process.env.hostname}`,
  });
});

app.post("/test1", (req, res) => {
  console.log(req.body);
  res.json({
    response: req.body,
    msg: `node server-1 running from ${process.env.instnceID}`,
    ip: `${process.env.hostname}`,
  });
});

app.listen(process.env.port, () => {
  console.log(`node server 1 running on ${process.env.port}`);
});
