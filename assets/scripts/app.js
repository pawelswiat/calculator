const defaultResult = 0;
let currentResult = defaultResult;


currentResult = add(1,2);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);


function add(number1, number2) {
    const result = number1 + number2;
    return result
} 