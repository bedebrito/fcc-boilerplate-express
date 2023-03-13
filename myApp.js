let express = require('express');
let app = express();

let indexPath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";
let message = {
    "message": "Hello json"
}

app.get("/", (req, res) => { res.sendFile(indexPath) });
app.get("/json", (req, res) => {res.json(message)});
app.use("/public", express.static(publicPath));


































 module.exports = app;
