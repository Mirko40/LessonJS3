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

