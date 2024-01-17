const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose
    .connect()
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => console.error(err));
};

module.exports = connectDb;