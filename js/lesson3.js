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
function getStatistics() {
    let negativeNumber = 0;
    let plusesNumber = 0;
    let zeroNumber = 0;
    let evenNumber = 0;
    let oddNumber = 0;
    let i = 0;
    while (i < 10) {
        i++;
        let n = Number(prompt("Enter the number for statistics", ""));
        if (n % 2 == 0) {
            evenNumber = evenNumber + 1;
        } else oddNumber = oddNumber + 1;

        if (n == 0) {
            zeroNumber = zeroNumber + 1;
        } else if (n < 0) {
            negativeNumber = negativeNumber + 1;
        } else plusesNumber = plusesNumber + 1;
    }
    alert(`Even numbers ${evenNumber}, Odd numbers ${oddNumber}, Negative numbers ${negativeNumber}, Pluses numbers ${plusesNumber}, Zero numbers ${zeroNumber}`);
};
function getCalculation() {
    while (true) {
        let a = +prompt('Enter the first number');
        let b = +prompt('Enter the second number');
        let operation = prompt('Select an action sign - + / *');
        let action = {
            '+': () => a + b,
            '-': () => a - b,
            '/': () => a / b,
            '*': () => a * b
        }[operation];
        if (action) alert(action());

        if (!confirm('Do you want to solve another example?')) break;
    }
};
function showMoveNumber() {
    let getNumber = +prompt('Enter number');
    let m = +prompt('Shift');
    let str = String(getNumber);
    let lenghtStr = str.length;
    let resultNumber = "";

    for (let i = m; i < lenghtStr; i++) {
        resultNumber += str[i];
    };
    i = 0;
    while (i < m) {

        resultNumber += str[i];
        i++;
    };

    alert(`Result number ${resultNumber}`)
};
function showDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currDay = +prompt('What day to start? (Day number)');

    while (confirm(`${days[currDay]}. Want to see the next day?`)) {
        currDay = (currDay + 1) % days.length;
    }
};
function showTable() {
    let num = 0;
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 10; j++) {
            num = i * j;
            if (num / 10 < 1) {
                num = "&nbsp;&nbsp;" + i * j;
            }
            if (j <= i) {
                document.write(j + "*" + i + "=" + num + "&nbsp;&nbsp;&nbsp;&nbsp;");
            }
        }
        document.write("<br>");
    }
};

function guessNumber() {
    alert('Guess the number from 0 to 100');
    let startN = 0;
    let endN = 100;
    for (let i = 1; i < 10; i++) {
        let N = Math.round((startN + endN) / 2);
        let resault = confirm(`Your number is ${N}?`);
        if (resault == false) {
            resault = confirm(`Your number > ${N}?`)
            if (resault == true) {
                startN = N;
            } else endN = N;
        } else {
            alert(`Your number is: ${N}\nQuantity of attempts: ${i}`);
            i = 10;
        };

    };
};




