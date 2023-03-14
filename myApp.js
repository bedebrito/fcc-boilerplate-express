require("dotenv").config();

const bodyParser = require("body-parser");
let express = require("express");
let app = express();

let indexPath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";

app.use(bodyParser.urlencoded({extended: false}), (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get("/", (req, res) => { res.sendFile(indexPath) });

app.get("/json", (req, res) => {
    process.env.MESSAGE_STYLE==="uppercase" ? 
    res.json({"message": "HELLO JSON"}) : 
    res.json({"message": "Hello json"})
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({"time": req.time});
})

app.get("/:word/echo", (req, res) => {
    res.json({"echo": req.params.word});
});

app.get("/name", (req, res) => {
    let {first: firstName, last: lastName} = req.query;
    res.json({"name": `${firstName} ${lastName}`});
});

app.use("/public", express.static(publicPath));

































 module.exports = app;
