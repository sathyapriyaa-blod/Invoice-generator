const express = require("express");
const easyinvoiceroute =  require('./routes/easyInvoiceRoute');
const htmlrewriteroute = require('./routes/htmlRewriteRoute');

const app = express();
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

// Define routes
app.use('/easyinvoice', easyinvoiceroute);
app.use('/htmlRewrite', htmlrewriteroute);