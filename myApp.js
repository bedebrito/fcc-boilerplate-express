require('dotenv').config();

let express = require('express');
let app = express();

let indexPath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";

app.get("/", (req, res) => { res.sendFile(indexPath) });
app.get("/json", (req, res) => {
    process.env.MESSAGE_STYLE==="uppercase" ? 
    res.json({"message": "HELLO JSON"}) : 
    res.json({"message": "Hello json"})
});
app.use("/public", express.static(publicPath));


































 module.exports = app;
