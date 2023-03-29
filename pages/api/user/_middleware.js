import { verify } from "jsonwebtoken";

export default async function Middleware(req, res) {
  const { authorization } = req.headers;

  if (!authorization) return req.session("Anauthorize");

  const token = authorization.split(" ")[1];
  const { _id } = verify(token, process.env.SECRET);
  console.log(_id);
}
