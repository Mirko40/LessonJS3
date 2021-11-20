"use strict"
function getSumRange() {
    let a = Number(prompt("Enter the beginning of the numbers range", ""));
    let n = Number(prompt("Enter the end of the numbers range", ""));
    let sum = 0;

    while (a <= n) {
        sum += a;
        a++;
    }

    alert(`The sum of numbers ${sum}`)
};

function getLargestDivisor() {
    let a = Number(prompt("Enter the first number", ""));
    let b = Number(prompt("Enter the second number", ""));
    a = Math.abs(a);
    b = Math.abs(b);

    if (a == 0) {
        alert(`The largest common divisor ${b}`)
    }
    else while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    };
    alert(`The largest common divisor ${a}`);
};


function getDivisors() {
    let n = Number(prompt("Enter the number of divisors you want to find", ""));
    n = Math.abs(n);
    let divisor = [], i = 1;
    while (i <= n) {
        if (n % i == 0) divisor.push(i);
        i = i + 1;
    }
    alert(`Divisors of number ${n} is ${divisor}`);
};

function getDigits() {
    let n = Number(prompt("Enter the number of digits you want to find", ""));
    let numDigits = 0;
    let integers = Math.abs(n);

    while (integers > 0) {
        integers = (integers - integers % 10) / 10;
        numDigits++;
    }
    alert(`Number of digits is ${numDigits}`);
};