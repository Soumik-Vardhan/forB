const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userfinSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    organization_name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { collection: "usersData" }
);

const UserFin = mongoose.model("UserFin", userfinSchema);
module.exports = UserFin;
