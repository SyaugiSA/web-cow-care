import { model, models, Schema } from "mongoose";

const User = new Schema({
  namaDepan: { type: String, required: true },
  namaBelakang: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  nohp: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  provinsi: { type: Number, required: true },
  kota: { type: Number, required: true },
  alamat: { type: String, required: true },
});

const UserModel = models.User || model("User", User);

export default UserModel;
