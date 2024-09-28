function calculateTotal() {
    // Get all the input values
    let earning = parseFloat(document.getElementById('earning').value);
    let toll = parseFloat(document.getElementById('toll').value);
    let petrol = parseFloat(document.getElementById('petrol').value);
    let cash = parseFloat(document.getElementById('cash').value);
    let bachat = parseFloat(document.getElementById('bachat').value);
    let dhulai = parseFloat(document.getElementById('dhulai').value);

    // Calculate the total
    let total = earning + toll + petrol + cash + bachat + dhulai;

    // Display the total
    document.getElementById('total').textContent = total;
}
