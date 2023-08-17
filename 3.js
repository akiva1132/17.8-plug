const express = require("express");
const fetch = require('node-fetch');
const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await fetch('https://www.ynet.co.il/news/article/bjjprkuh2#autoplay');
    const htmlContent = await response.text();
    res.send(htmlContent);
  } catch (error) {
    console.error('An error occurred', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(8080, () => {
  console.log("Server is running...");
});
