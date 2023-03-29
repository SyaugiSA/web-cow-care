import { model, Schema } from "mongoose";

const Click = model(
  "Click",
  new Schema({
    route: String,
    width: Number,
    height: Number,
    loct_x: Number,
    loct_y: Number,
  })
);

export default Click;
