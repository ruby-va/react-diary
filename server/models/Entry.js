const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const EntrySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  mood: {
    type: String,
    enum: ["pensive", "calm", "cry", "happy"],
    required: true,
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

EntrySchema.plugin(uniqueValidator);

module.exports = model("Entry", EntrySchema);
