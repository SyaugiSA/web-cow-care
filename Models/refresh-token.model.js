const { Schema } = require("mongoose");

const refreshToken = new Schema({
  email: { type: String, required: true },
  client_id: { type: String, required: true },
  token: { type: String, required: true, unique: true },
  created: { type: Date, default: Date.now },
});
