// import { GoogleGenAI } from "@google/genai";
const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

console.log("API Key:", process.env.GEMINI_API_KEY ? "OK" : "MISSING!");

class Controller {
  static async geminiAi(req, res, next) {
    try {
      const { prompt } = req.body;
      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      res.status(200).json({
        result: result.text,
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({ message: err.message });
    }
  }
  static async readData(req, res, next) {
    try {
      res.send("Berhasil");
    } catch (err) {
      res.send(err);
    }
  }
}
module.exports = Controller;
