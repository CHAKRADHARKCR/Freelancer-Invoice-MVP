document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const clientName = document.getElementById("clientName").value;
  const project = document.getElementById("project").value;
  const amount = document.getElementById("amount").value;
  const dueDate = document.getElementById("dueDate").value;

  const invoiceHTML = `
    <h2>Invoice</h2>
    <p><strong>Client:</strong> ${clientName}</p>
    <p><strong>Project:</strong> ${project}</p>
    <p><strong>Amount:</strong> ₹${amount}</p>
    <p><strong>Due Date:</strong> ${dueDate}</p>
  `;

  document.getElementById("invoiceOutput").innerHTML = invoiceHTML;
});