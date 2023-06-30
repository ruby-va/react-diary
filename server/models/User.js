const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, uniquie: true, required: true },
  password: { type: String },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

module.exports = model("User", UserSchema);
