const num1 = +prompt("Enter a integer: ")
const num2 = +prompt("Enter another integer: ")
const num3 = +prompt("Enter another integer: ")

document.querySelector('#sum').innerHTML = "Sum of numbers: " + (num1 + num2 + num3);
document.querySelector('#product').innerHTML = "Product of numbers: " + (num1 * num2 * num3);
document.querySelector('#average').innerHTML = "Average of numbers: " + (num1 + num2 + num3)/3;