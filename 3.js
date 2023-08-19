const express = require("express");
const axios = require("axios");
const app = express();
const cheerio = require("cheerio");
// const { OpenAI } = require("openai");

// const openai = new OpenAI({
//   apiKey: "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",
// });
// app.use(express.text());

// async function replayGpt(promt, text) {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: promt + text }],
//     model: "gpt-3.5-turbo",
//   });

//   return completion.choices[0].message.content;
// }
app.post("/", async (req, res) => {
  res.send("האתר אינו נתמך");}
// app.post("/", async (req, res) => {
//   try {
//     let text = "";
//     const link = req.body;
//     console.log(link);

//     if (
//       link.includes("mako.co.il") ||
//       link.includes("israelhayom.co.il") ||
//       link.includes("walla.co.il") ||
//       link.includes("sport5.co.il")
//     ) {
//       const response = await axios.get(link);
//       const htmlContent = response.data;
//       const $ = cheerio.load(htmlContent);
//       const h1_tags = $("h1");
//       if (h1_tags.length > 0) {
//         text += h1_tags.first().text() + "\n";
//       }

//       $("p").each((index, element) => {
//         text += $(element).text() + "\n";
//       });
//     } else {
//       console.log("else");
//       res.send("האתר אינו נתמך");
//       return;
//     }
//     let reply = await replayGpt("סכם לי במספר שורות את הטסקט הבא: ", text);
//     console.log(reply);
//     res.send(reply);
//   } catch (error) {
//     console.error("An error occurred", error);
//     res.status(500).send("An error occurred");
//   }
// });

app.listen(8081, () => {
  console.log("Server is running...");
});
