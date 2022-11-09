const express = require("express")
const app = express();
//the built in express.json middleware, which will pass any incoming JSON
app.use(express.json())
module.exports = app;