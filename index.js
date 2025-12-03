require("dotenv").config();
const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
const Controller = require("./controllers/controller");
const PORT = process.env.PORT || 3000;

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
});
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/ai-gemini", Controller.geminiAi);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
