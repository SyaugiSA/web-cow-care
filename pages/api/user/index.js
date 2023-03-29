export default async function User(req, res) {
  const { authorization } = req.headers;
  console.log(authorization);
}
