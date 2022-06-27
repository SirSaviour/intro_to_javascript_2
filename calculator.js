//This is a Simple Arithmetic Calculator.

const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');     // prompts user for prefered operator

const number1 = parseFloat(prompt ('Enter the first number: '));    // prompt user for the first number
const number2 = parseFloat(prompt ('Enter the second number: '));   // prompt user for the second number

let result; // declaration of the variable.

// calculator conditions.
if (operator == '+') {                  // use + (addition) operator to add both numbers
    result = number1 + number2;
}
else if (operator == '-') {             // use -  (subtraction) operator to subtract both numbers
    result = number1 - number2;
}
else if (operator == '*') {             // use * (multiplication) operator to multiply both numbers
    result = number1 * number2;
}
else {
    result = number1 / number2;         // use / (division) operator to divide both numbers
}

window.alert(" Result is" + result);    // display the result of the Operations.