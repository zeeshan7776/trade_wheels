const mongoose = require("mongoose");

connectMongodb().catch((err) => console.log(err));
async function connectMongodb() {
  await mongoose.connect("mongodb://127.0.0.1:27017/tradewheels");
  console.log("db connected");
}

module.exports = {
  connectMongodb,
};
