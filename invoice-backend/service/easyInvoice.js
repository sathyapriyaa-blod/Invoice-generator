const fs = require("fs");
const easyinvoice = require("easyinvoice");

var today = new Date();
var dueday = new Date();
dueday.setDate(dueday.getDate() + 30)
today = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + today.getFullYear();
var duedate = String(dueday.getDate()).padStart(2, '0') + '/' + String(dueday.getMonth() + 1).padStart(2, '0') + '/' + dueday.getFullYear();

const data = {
  // Customize enables you to provide your own templates
  // Please review the documentation for instructions and examples
  customize: {
    // "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html
  },
  images: {
    // The logo on top of your invoice
    logo: fs.readFileSync("logo.png", "base64"),
    // The invoice background
    background: "",
  },
  // Your own data
  sender: {
    company: "Blod.in",
    address:
      "2nd Floor, Old No 7/3A, New No 15/13, 1st Cross Street, Kilpauk Garden Colony, Kilpauk",
    zip: "600010",
    city: "Chennai",
    country: "India",
    custom1: "info@blod.in",
    //"custom2": "custom value 2",
    //"custom3": "custom value 3"
  },
  // Your recipient
  client: {
    company: "Client Corp",
    address: "Clientstreet 456",
    zip: "4567 CD",
    city: "Clientcity",
    country: "Clientcountry",
    // "custom1": "custom value 1",
    // "custom2": "custom value 2",
    // "custom3": "custom value 3"
  },
  information: {
    // Invoice number
    "number": "2021.0001",
    // Invoice data
    "date": today,
    // Invoice due date
    "due-date": duedate,
    // Invoice State
    "state": "Tamil Nadu",
    // Invoice State Code
    "state-code": "TN",
    // Invoice Supply place
    "place-of-supply": "Chennai"
  },
  // The products you would like to see on your invoice
  // Total values are being calculated automatically
  products: [
    {
      "s.no": 1,
      quantity: 2,
      uom: 'UNIT',
      description: "Product 1",
      "tax-rate": 6,
      price: 33.87,
    },
    {
      "s.no": 2,
      quantity: 4.1,
      uom: 'KM',
      description: "Product 2",
      "tax-rate": 6,
      price: 12.34,
    },
    {
      "s.no": 3,
      quantity: 4.5678,
      uom:'%',
      description: "Product 3",
      "tax-rate": 21,
      price: 6324.453456,
    },
  ],
  // The message you would like to display on the bottom of your invoice
  "bottom-notice": "Kindly pay your invoice within 15 days.",
  // Settings to customize your invoice
  settings: {
    currency: "INR", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
    // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
    // "tax-notation": "gst", // Defaults to 'vat'
    // "margin-top": 25, // Defaults to '25'
    // "margin-right": 25, // Defaults to '25'
    // "margin-left": 25, // Defaults to '25'
    // "margin-bottom": 25, // Defaults to '25'
    // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
    // "height": "1000px", // allowed units: mm, cm, in, px
    // "width": "500px", // allowed units: mm, cm, in, px
    // "orientation": "landscape", // portrait or landscape, defaults to portrait
  },
  // Translate your invoice to your preferred language
  translate: {
    // "invoice": "FACTUUR",  // Default to 'INVOICE'
    // "number": "Nummer", // Defaults to 'Number'
    // "date": "Datum", // Default to 'Date'
    // "due-date": "Verloopdatum", // Defaults to 'Due Date'
    // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
    // "products": "Producten", // Defaults to 'Products'
    // "quantity": "Aantal", // Default to 'Quantity'
    // "price": "Prijs", // Defaults to 'Price'
    // "product-total": "Totaal", // Defaults to 'Total'
    // "total": "Totaal" // Defaults to 'Total'
  },
};

/**
 * Returns a PDF via filesystem and status of request.
 * 
 * Status: "String"
 *
 * @returns {PDF} via file system.
 * @returns {String} Status of request.
 */

const easyinvoiceservice = async() => {
  const result = await easyinvoice.createInvoice(data);
  await fs.writeFileSync("invoice.pdf", result.pdf, "base64");
  return "Status: Success, Invoice Generated";
}

module.exports  = {
  easyinvoiceservice
}