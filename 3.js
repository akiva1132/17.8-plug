const express = require("express");
const app = express();

app.get("/users", async (req, res) => {
res.json({"hello": "world"});
});
console.log("hello");
