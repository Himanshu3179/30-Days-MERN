const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/items", (req, res) => {
  const items = ["Alto", "Civic", "Corolla", "Cultus", "Mehran", "Vitz"];
  res.send(items);
});

app.post("/", (req, res) => {
  res.send("you have made a post request");
});

app.listen(4000, () => {
  console.log("Listening");
});
