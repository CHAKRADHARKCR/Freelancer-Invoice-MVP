function generateInvoice() {
  const client = document.getElementById("client").value;
  const service = document.getElementById("service").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const gstRate = parseFloat(document.getElementById("gst").value);
  const gstAmount = (amount * gstRate) / 100;
  const total = amount + gstAmount;

  document.getElementById("invoice-output").innerHTML = `
    <p><strong>Client:</strong> ${client}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Amount:</strong> ₹${amount}</p>
    <p><strong>GST (${gstRate}%):</strong> ₹${gstAmount}</p>
    <p><strong>Total:</strong> ₹${total}</p>
  `;
}

const gstRates = {
  "milk": 0,
  "mobile": 18,
  "books": 0,
  "software": 18,
  "clothing": 5,
};

function lookupGST() {
  const item = document.getElementById("item").value.toLowerCase();
  const rate = gstRates[item];

  if (rate !== undefined) {
    document.getElementById("gst-output").innerHTML = `
      <p><strong>GST Rate for ${item}:</strong> ${rate}%</p>
      <p>Input tax credit may apply based on business type.</p>
    `;
  } else {
    document.getElementById("gst-output").innerHTML = `<p>Item not found. Try another.</p>`;
  }
}
