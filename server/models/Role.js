const { Schema, model } = require("mongoose");

const Role = new Schema({
  value: {
    type: String,
    unique: true,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});

module.exports = model("Role", Role);
