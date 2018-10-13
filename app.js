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
    //years value as a float
    const calcPayments = parseFloat(years.value);


    e.preventDefault();
}