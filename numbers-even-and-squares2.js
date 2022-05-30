/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: FIND even numbers and their squares.
 * 
 */
 console.log('Even Number and its squares');
 console.log('=========================================');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const modifiedArray = numbers.filter(number => number%2==0);
const squareArray = modifiedArray.map(number => number*number);
console.log(squareArray);
 