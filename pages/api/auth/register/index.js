import UserModel from "../../../../Models/users.model";
import bcrypt from "bcrypt";

export default async function Signup(req, res) {
  const {
    namaDepan,
    namaBelakang,
    email,
    password,
    nohp,
    provinsi,
    kota,
    alamat,
  } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const encrypt = bcrypt.hashSync(password, salt);

  const data = new UserModel({
    namaDepan,
    namaBelakang,
    email,
    password: encrypt,
    nohp,
    provinsi,
    kota,
    alamat,
  });
  data.save();

  return res.json({ status: true, message: "Registrasi berhasil" });
}
