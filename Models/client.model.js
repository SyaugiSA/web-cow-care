import { Schema, model } from "mongoose";

const Client = new Schema({
  email: { type: String, required: true },
  client_id: { type: String, required: true, unique: true },
  client_secret: { type: String, required: true },
});

const ClientModel = model("Client", Client);

export default ClientModel;
