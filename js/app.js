//module 28-6 
/*
function gitPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('this number is not more than 3', pin)
        return gitPin();

    }
}

function generatePin() {
    const pin =gitPin();
    document.getElementById('display-number').value = pin;
}
*/

//-----------------------------------module 28-6----------------
/*
function gitPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('this number is not more than 3', pin)
        return gitPin();

    }
}

function generatePin() {
    const displayNumber = gitPin();
    document.getElementById('display-number').value = displayNumber;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');//if value কে কাজ করাতে হলে এ লাইন কে এখানে দিতে হবে 
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';// এই লাইন দ্বারা 'c' কে ক্লিক করলে ভেলু টা ক্লিয়ার হয়ে যাবে 
        }
    }
    else {

        const previousCalc = calcInput.value;
        const newCalc = previousCalc + number;
        calcInput.value = newCalc;
    }

})
*/

//-----------------------------------module 28-7----------------
function gitPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('this number is not more than 3', pin)
        return gitPin();

    }
}

function generatePin() {
    const displayNumber = gitPin();
    document.getElementById('display-number').value = displayNumber;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');//if value কে কাজ করাতে হলে এ লাইন কে এখানে দিতে হবে 
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';// এই লাইন দ্বারা 'c' কে ক্লিক করলে ভেলু টা ক্লিয়ার হয়ে যাবে 
        }
    }
    else {

        const previousCalc = calcInput.value;
        const newNumber = previousCalc + number;
        calcInput.value = newNumber;
    }

})


//this is for makeing the connection between Generate PIn &&& submit option 
/*
function verifyPin() {
    const pin = document.getElementById('display-number').value;
    const typedNumber = document.getElementById('typed-number').value;

    if (pin == typedNumber) {
        console.log('working');
    }
    else {
        console.log('not mached');
    }
    // console.log('varifying chacking ')
}
*/

//second this for fixing the notification
function verifyPin() {
    const pin = document.getElementById('display-number').value;
    const typedNumber = document.getElementById('typed-number').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-failed');

    if (pin == typedNumber) {

        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none'
    }
    else {

        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';

    }
    console.log('varifying chacking ')
}