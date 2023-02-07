const express = require("express");
const { easyinvoiceservice } = require("../service/easyInvoice");

const router = express.Router();
router.get("/", async (_req, res) => {
  try {
    const invoiceStatus = await easyinvoiceservice();
    res.status(200).send(invoiceStatus);
  } catch (e) {
    res.status(500).send("Status: Some Error Occured", e);
  }
});

module.exports = router;
