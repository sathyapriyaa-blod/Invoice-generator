const express = require("express");
const app = express();
const fs = require("fs");
const { data } = require("./data")
const easyinvoice = require("easyinvoice")

app.get("/", async (_req, res) => {
  const result = await easyinvoice.createInvoice(data);
  await fs.writeFileSync("invoice.pdf", result.pdf, "base64");
  res.status(200).send("Invoice Generated");
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
