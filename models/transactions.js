"use strict";
const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Transactions = new mongoose.Schema(
  {
    accounts: { type: String, trim: true, require: true },
    txid: { type: String, trim: true, require: true },
    amount: { type: Number, trim: true, require: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Transactions", Transactions);
