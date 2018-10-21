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

    if(isFinite(monthly)) {
        monthlyPay.value = monthly.toFixed(2);
        totalPay.value = (monthly * calcPayments).toFixed(2);
        totalInterest.value = ((monthly * calcPayments) - principal).toFixed(2);
    } else {
        console.log('check for errors');
    }

    e.preventDefault();
}