export const initialProductLine = {
    description: '',
    quantity: '1',
    rate: '0.00',
}

export const initialInvoice= {
  logo: '',
  logoWidth: 100,
  title: 'PROFORMA INVOICE',
  companyName: 'Blod',
  mail: 'info@blod.in',
  companyAddress: '2nd Floor, Old No 7/3A, New No 15/13',
  companyAddress2: '1st Cross Street, Kilpauk Garden Colony, Kilpauk,',
  companyAddress3: "Chennai, Tamil Nadu",
  companyCountry: 'India',
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'India',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
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
  notesLabel: 'Notes',
  notes: 'Prepared By: BLODIN PVT LTD',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}