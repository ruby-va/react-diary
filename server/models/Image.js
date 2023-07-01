const { Schema, model } = require("mongoose");

const ImageSchema = new Schema({
  url: { type: String, uniquie: false, required: true },
  filename: { type: String, required: true, uniquie: true },
  title: { type: String, required: true, uniquie: false },
});

module.exports = model("Image", ImageSchema);
