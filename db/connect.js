const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {});
};
//if we are using v6 of mongo, there is no need for the {} after connectionString.

module.exports = connectDB;
