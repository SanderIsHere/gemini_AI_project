const express = require("express");
const multer = require("multer");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Controller = require("./controllers/controller");
require("dotenv").config();
const app = express();
const port = express.env.port || 3000;

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
});

// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", Controller.readData);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
