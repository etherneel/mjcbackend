const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactions");

router.post("/toadmin", (req, res) => {
  return transactionsController.transactions.transactionsDone(req, res);
});
router.post("/gettotal", (req, res) => {
  return transactionsController.transactions.gettotaltransactions(req, res);
});
router.get("/getall", (req, res) => {
  return transactionsController.transactions.getAll(req, res);
});
router.get("/team-purchase", (req, res) => {
  return transactionsController.teamPurchase.getTeamPurchase(req, res);
});
module.exports = router;
