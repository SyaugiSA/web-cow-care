import UserModel from "./../../../Models/users.model";
import bcrypt from "bcrypt";
import Jwt from "../../../lib/jwt";

export default async function Login(req, res) {
  try {
    const { email, pw } = req.body;
    const user = await UserModel.findOne({ email });
    const { password, ...userBoPassword } = user;

    if (!user)
      return res.json({ status: false, message: "User Tidak Tersedia" });

    const match = bcrypt.compareSync(pw, user.password);
    if (!match) return res.json({ status: false, message: "Password Salah" });
    const token = Jwt(user._id);

    req.user = userBoPassword;
    return res.json({ status: true, message: "Login Berhasil", token, email });
  } catch (e) {
    console.log(e);
  }
}
