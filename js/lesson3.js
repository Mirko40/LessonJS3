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
