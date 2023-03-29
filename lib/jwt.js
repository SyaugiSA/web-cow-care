import { sign } from "jsonwebtoken";

export default function jwt(_id) {
  return sign({ _id }, `${process.env.SECRET}`);
}
