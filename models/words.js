const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordsSchema = new Schema({
  Eord: {type: String, required: true},
  definition: {type: String, required: true}
});

const Words = mongoose.model("Words", wordsSchema);

module.exports = Words;
