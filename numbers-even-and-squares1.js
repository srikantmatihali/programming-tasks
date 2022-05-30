/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: FIND even numbers and their squares.
 * 
 */
 console.log('Even Number and its squares');
 console.log('=========================================');

 const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 var i=0;
 const count = numbers.length;
 let numberSquares = [];
 for(i=0;i<count;i++){
   if(numbers[i]%2==0){
        numberSquares.push(numbers[i] * numbers[i]);
   }
 } 
 console.log(numberSquares);
 