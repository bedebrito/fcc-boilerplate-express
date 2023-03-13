let express = require('express');
let app = express();

let indexPath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";

app.get("/", (req, res) => { res.sendFile(indexPath) });
app.use("/public", express.static(publicPath));


































 module.exports = app;
