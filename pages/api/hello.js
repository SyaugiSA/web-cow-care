import mongoose from "../../lib/dbConnection";

export default async function handler(req, res) {
  await mongoose;
  res.json({ status: true, kode: 200 });
}
