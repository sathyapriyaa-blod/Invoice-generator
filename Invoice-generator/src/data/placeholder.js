export const initialProductLine = {
    description: '',
    quantity: '1',
    rate: '0.00',
}

export const initialInvoice= {
  logo: '',
  logoWidth: 100,
  signature: 'Signature',
  signatureWidth: 100,
  signatureHeight: 20,
  title: 'PROFORMA INVOICE',
  companyName: 'Blod',
  mail: 'info@blod.in',
  companyAddress: '2nd Floor, Old No 7/3A, New No 15/13',
  companyAddress2: '1st Cross Street, Kilpauk Garden Colony, Kilpauk',
  companyAddress3: "Chennai, Tamil Nadu",
  companyCountry: 'India',
  billTo: 'Patient Details',
  Name: 'Selvaraj',
  clientID: '23/503',
  bloodGroup: 'O pos',
  bloodComponent: 'Packed Red Blood Cells',
  hospitalDetails: 'Hospital Details',
  hospitalName: 'Sooriya Hospital',
  hospitalAddress: '1, Arunachalam Rd',
  State: 'Velayutham Colony, Chennai-600093',
  StateCode: 'TN',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineSno: 'S.No',
  productLineDescription: 'Item Description',
  productLineUOM: 'UOM',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineTax: 'Taxable Value(INR)',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'PRBC’s',
      quantity: '3',
      uom: 'UNIT',
      rate: '3900.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (10%)',
  totalLabel: 'TOTAL',
  currency: '₹',
  TransactionDetails: 'Transaction Details',
  bankName: 'IndusInd Bank',
  accountNo: '23445678900',
  IFSCCode: 'INDB0001011',
  MICRCode: '600234027',
  signature: 'For, BLODIN PVT LTD',
  authorisation: 'Authorised Signatory',
  notesLabel: 'Notes',
  notes: 'Prepared By: BLODIN PVT LTD',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}
