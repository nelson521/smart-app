//dependencies
var mongoose = require("mongoose");
var logger = require("morgan");

//initialize Express app
var express = require("express");
var app = express();

app.use(logger("dev"));


app.use(express.static(process.cwd() + "/public"));


//connecting to MongoDB
//mongoose.connect("mongodb://localhost/smart_app");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/smart_app";
  console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});


//Create localhost port
var port = process.env.PORT || 3010;
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
