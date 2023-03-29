const jwt = require("jsonwebtoken");

let a = "a";
const secret = "asdas";
const token = jwt.sign({ a }, secret);

// let tok = token.split(" ")[1];

let b = jwt.verify(token, secret);

console.log(b);
