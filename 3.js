const express = require("express");
const axios = require("axios");
const app = express();
// const dotenv = require("dotenv");
const cheerio = require("cheerio");
// const { Configuration, OpenAIApi } = require("openai");
// const readlineSync = require("readline-sync");
// dotenv.config();

app.use(express.text());

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

//   const chapGPT = async (prompt) => {
//   const response = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [{ role: "user", content: prompt }],
//   });
//   console.log(response["data"]["choices"][0]["message"]["content"]);
//   };
  
//   chapGPT("hi?")











app.post("/", async (req, res) => {
  try {
    const link = req.body
    console.log(link)
    const response = await axios.get(link);
    const htmlContent = response.data;
    const $ = cheerio.load(htmlContent);
    let text = "";
    const h1_tags = $("h1");
    if (h1_tags.length > 0) {
      text += h1_tags.first().text() + "\n";
    }

    $("p").each((index, element) => {
      text += $(element).text() + "\n";
    });
    res.send(text);
  } catch (error) {
    console.error('An error occurred', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(8081, () => {
  console.log("Server is running...");
});
