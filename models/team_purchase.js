"use strict";
const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const teamPurchaseSchema = new mongoose.Schema({
  referral: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
  },
  txid: {
      type: String,
  },
  amount: {
      type: Number,
  },
  createdAt: {
      type: Date,
      default: Date.now,
  },
});
module.exports = mongoose.model("TeamPurchase", teamPurchaseSchema);
