const form = document.querySelector('form');
const addItemElement = document.getElementById("addItemButton")
const downloadInvoiceElement = document.getElementById("downloadInvoice")
const customerNameInputElement = document.getElementById("customerNameInput");
const paymentTypeInputElement = document.getElementById("paymentTypeInput");
const messageElement = document.getElementById("message");



// table show
const customerNameElement = document.getElementById("customerName");
const paymentTypeElement = document.getElementById("paymentType");
const currentDateTimeElement = document.getElementById("currentDateTime");
const tableShowElement = document.getElementById("showInvoice");
const grandTotalElememt = document.getElementById("grandTotal");

const invoiceData = [];


const dateAndTime = () => {
    // Create a new Date object for the current date and time
    const now = new Date();

    // Get the individual components of the date
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1. padStart ensures two digits.
    const day = now.getDate().toString().padStart(2, '0');

    // Get the individual components of the time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    // Combine the components into the desired formats
    const timeString = `${hours}:${minutes}`;
    const dateString = `${day}-${month}-${year}`;

    console.log("Time:", timeString);
    console.log("Date:", dateString);

    currentDateTimeElement.innerText = dateString + " , " + timeString
}

customerNameInputElement.addEventListener('change', (event) => {
    customerNameElement.innerText = event.target.value;
});
paymentTypeInputElement.addEventListener('change', (event) => {
    paymentTypeElement.innerText = event.target.value;

})

function addNewRow() {
    tableShowElement.replaceChildren();
    invoiceData.map((data, index) => {
        tableShowElement.insertAdjacentHTML('beforeend', `<tr>
        <td>${index + 1}</td>
        <td>${data.size} mm - ${data.shape} - ${data.type}</td>
        <td>${data.quantity}</td>
        <td>${data.price}</td>
        <td>${data.quantity * data.price}</td>
        </tr>`)
    });
}

const updateGrandTotal = () => {
    let total = invoiceData.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0) || 0;
    grandTotalElememt.innerText = total.toString();
}
updateGrandTotal();

// Buttons Event
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let data = {
        size: formData.get("dySize"),
        shape: formData.get("dyShape"),
        type: formData.get("dyType"),
        quantity: Number(formData.get("dyQuantity")),
        price: Number(formData.get("dyPrice"))
    };
    if (customerNameInputElement.value.length < 3) {
        console.log(customerNameInputElement.value, customerNameInputElement.value.length);

        alert("Enter valid customer name");
        customerNameInputElement.value = ""
        currentDateTimeElement.focus();
        return;
    }

    invoiceData.push(data);
    downloadInvoiceElement.disabled = false;
    dateAndTime();
    addNewRow();
    updateGrandTotal();
    messageElement.style.color = 'green';
    messageElement.innerText = `Item Added Successfully! Name : ${data.size} mm- ${data.shape} - ${data.type}`

});

downloadInvoiceElement.addEventListener("click", (event) => {
    const billElement = document.getElementById("invoiceBillContainer");

    html2canvas(billElement).then(canvas => {
        // Convert the canvas to a data URL
        const imageData = canvas.toDataURL('image/png');

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'table.png'; // Specify the filename
        document.body.appendChild(link);
        link.click(); // Programmatically click the link to start the download
        document.body.removeChild(link); // Clean up the temporary link
    });
});








