import UserModel from "../../../../Models/users.model";

export default async function Check(req, res) {
  const { email } = req.body;
  const user = await UserModel.findOne({ email });

  if (user) return res.json({ status: false, message: "User Tersedia" });

  return res.json({ status: true, message: "User tidak tersedia" });
}
