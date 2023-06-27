const { Schema, model } = require("mongoose");

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

module.exports = model("Entry", EntrySchema);
