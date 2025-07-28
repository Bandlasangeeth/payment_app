const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { User, Account } = require("./backend/db");

const app = express();


app.use(express.json());
app.use(cors()); 


mongoose.connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));

app.get("/", (req, res) => {
  res.send("Server is running!");
});


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});