const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  mood: {
    type: String,
    enum: ["pensive", "calm", "cry", "happy"],
    required: true,
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: null },
});

PostSchema.index({ "$**": "text" });

module.exports = model("Post", PostSchema);
