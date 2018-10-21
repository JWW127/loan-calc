// listen for submit

document.querySelector("#loan-form").addEventListener('submit', calcResults);

//
function calcResults(e) {
    // UI variables

    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPay = document.querySelector('#monthly-payment');
    const totalPay = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    //get amount value as a float
    const principal = parseFloat(amount.value);
    //interest value as a float then calculated
    const calcInterest = parseFloat(interest.value) / 100 / 12;
    //years value as a float then calculated
    const calcPayments = parseFloat(years.value) * 12;

    //monthly calculated
    const x = Math.pow(1 + calcInterest, calcPayments);
    const monthly = (principal * x * calcInterest) / (x-1);

    //calculate a non infinite output
    if(isFinite(monthly)) {
        monthlyPay.value = monthly.toFixed(2);
        totalPay.value = (monthly * calcPayments).toFixed(2);
        totalInterest.value = ((monthly * calcPayments) - principal).toFixed(2);
    } else {
        showError('ERROR Please check fields!');
    }

    e.preventDefault();
}

function showError(error){
    //create div element
    const errorDiv = document.createElement('div');

    //get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    //create text node and append
    errorDiv.appendChild(document.createTextNode(error));

    //insert error @ dom before heading
    card.insertBefore(errorDiv, heading);

    //clear error
    setTimeout(clearError, 3000);
}

function clearError() {
    //use the alert class from bootstrap to remove error alert
    document.querySelector('.alert').remove();
}