const express=require("express");
const bodyParser=require('body-parser')
const cors = require("cors");
const app=express();
app.use(bodyParser.json())
app.use(cors());

const PORT=5000;
app.set("views engine", "ejs");
app.set("views", "./views");

app.use("/",require('./routes/index'))
app.listen(PORT,console.log("Server started"))