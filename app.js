// Assignment 3 
const temperatureCelsius = +prompt('Enter the current temperature in Celsius:');
if (temperatureCelsius > 30) {
    alert("Oh ====> It's a hot day!");
} else {
    alert("===> The weather is moderate.");
}

// Assignment 3 b
const Maths = +prompt('Enter Marks of Maths');
const English = +prompt('Enter Marks of English');
const urdu = +prompt('Enter Marks of urdu');

const totalMarks = Maths + English + urdu;
const percentage = (totalMarks / 300) * 100;
let userGrade;
if (percentage >= 90) {
    userGrade = 'A+';
} else if (percentage >= 80) {
    userGrade = 'A';
} else if (percentage >= 70) {
    userGrade = 'B';
} else if (percentage >= 60) {
    userGrade = 'C';
} else if (percentage >= 50) {
    userGrade = 'D';
} else {
    userGrade = 'Fail';
}
document.write(`--------- Marksheet --------- <hr> <br> Subject Maths: ${Maths} <br> Subject English: ${English} <br> Subject Urdu: ${urdu} <br> Total Marks: ${totalMarks}  <br> Percentage: ${percentage.toFixed(2)}% <br> <hr>  Grade: ${userGrade} <br> <hr> <hr> .`);

// Assignment 4a
let usera = +prompt('Enter Value for table ');
let userinpa1 = +prompt('Enter Value for table length');
document.write(`writing a table using loop of ${usera} <br> <hr>`);
for (let i = 1; i <= userinpa1; i++) {
    document.write(`${usera} X ${i} = ${usera * i}<br>`);
}

// Assignment 4b
let number1 = 5; 
let factorial = 1;
let i = 1;
while (i <= number1) {
    factorial *= i;
    i++; 
}
console.log(`Factorial of ${number1} is: ${factorial}`);

// Assignment 5a
function greetUser(name) {
    return `Hello, ${name}! Welcome to our website.`;    
}
const userRespone = prompt("What is your name?");
const greetingUser = greetUser(userRespone);
alert(greetingUser);

// Assignment 5b
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const userInput = +prompt("Enter a number:");
const primeCheck = isPrime(userInput);
if (primeCheck) {
    document.write(`<br><hr> ${userInput} is a prime number. <br><hr>`);
} else {
    document.write(`<br><hr> ${userInput} is not a prime number. <br><hr>`);
}