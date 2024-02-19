var express = require("express");
var app = express();

const PORT = process.env.PORT || 3000;
const fs = require("fs");
app.use(express.json());

app.get("/api/commits/random", function (req, res) {
    const fileContent = fs.readFileSync(`${__dirname}/data.json`)
    const data = JSON.parse(fileContent);
    const random = Math.floor(Math.random() * data.length);
    res.json(data[random]);
  });
app.get("/api/commits", function (req, res) {
 const fileContent = fs.readFileSync(`${__dirname}/data.json`)
    const data = JSON.parse(fileContent);   
    res.json(data);

});

app.get("/api", function (req, res) {
  res.send("API <a href='/api/commits'>Commits</a>")
});

app.get("/", function (req, res) {
  res.send("Hello World! <a href='/api'>API</a>");
});
app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`);
});
