import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server Up");
});

app.listen(5000, () => {
  console.log("Server at LocalHost http://localhost:5000/api/products");
});
