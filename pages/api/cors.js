import Cors from "cors";
import initMiddleware from "./../../lib/init-middleware";

const cors = initMiddleware(
  Cors({ methods: ["GET", "POST", "PATCH", "OPTION"] })
);

export default async function handler(req, res) {
  await cors(req, res);

  res.json({ message: "halo" });
}
