const mongoose = require("mongoose");
require("dotenv").config();

const connect = async function () {
  const conn = await mongoose.connect(process.env.MONGO);
  console.log(`mongoDB connection established ${conn.connection.host}`);
};

module.exports = connect;
