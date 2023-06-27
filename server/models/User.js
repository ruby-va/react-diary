const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
});

UserSchema.plugin(uniqueValidator);

module.exports = model("User", UserSchema);
