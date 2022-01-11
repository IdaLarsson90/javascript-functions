// function add(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// function multiply (firstNumber, secondNumber) {
//     return firstNumber * secondNumber;
// }

// function showSums(sumOne, sumTwo) {
//     console.log(`sum of add: ${sumOne}`)
//     console.log(`sum of multiply: ${sumTwo}`);
// }

// function start () {
//     const sumOfAdd = add(5, 10);
//     const sumOfMultiply = multiply(10, 10);
//     showSums(sumOfAdd, sumOfMultiply);
// }

// start();


//Övning 1
function length (word) {
    return word.length;
}

let numberOfWords = length('mussla');
console.log(numberOfWords);

//Övning 2
function year (date) {
    return date.substring(0,4);
}

let yearOnly = year('2019-10-14');
console.log(yearOnly);

//Övning 3


function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function start (firstNumber, secondNumber, operator){
    console.log(typeof operator);
    if (typeof firstNumber == 'number' && typeof secondNumber == 'number') {
        if (operator == '+') {
            let sum = add(firstNumber, secondNumber);
            console.log(sum);
        } else if (operator == '-') {
            let sum = subtract(firstNumber, secondNumber);
            console.log(sum);
        } else if (operator == '*') {
            let sum = multiply(firstNumber, secondNumber);
            console.log(sum);
        } else if (operator == '/') {
            let sum = divide(firstNumber, secondNumber);
            console.log(sum);
        } else {
            console.log('detta är ingen operator')
        }
    }
    else {
        console.log('Du behöver skriva i formatet: siffra, siffra, operator');
    }
}

start(5, 3, '+');


//ARROW FUNCTIONS

//Letar upp knappen och får tillbaka ett html-element med ID button
const buttonElem = document.querySelector('#button');
console.log(buttonElem);


let counter = 1;
buttonElem.addEventListener('click', ()=> { //arrow function
    console.log(`Du klickade ${counter} gånger`);
    counter++; //förkortning för counter = counter + 1
});