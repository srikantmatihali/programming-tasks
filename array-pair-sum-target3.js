/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: 
 *   Sum any two numbers in the array, which adds up to the target. 
 *   Print the indices of those numbers as the output.
 *   Inputs:  Array =  [1,5,9,10] , Target= 15
 *   Output:  [5, 10] -Elements
 * 
 */
 console.log('Array Pair sum leading to Target Value');
 console.log('=========================================');


//binary search algorithm
function binarySearch(sortedArray, key){
   let start = 0;
   let end = sortedArray.length - 1;
   while (start <= end) {
       let middle = Math.floor((start + end) / 2);
       if (sortedArray[middle] === key) {
           // found the key
           return middle;
       } else if (sortedArray[middle] < key) {
           // continue searching to the right
           start = middle + 1;
       } else {
           // search searching to the left
           end = middle - 1;
       }
   }
  // key wasn't found
   return -1;
}


const p= [1,5,9,10]; 
var i,j;
var count = p.length;
var key= 15;
var breakLoop = false;
for(i=0;i<count;i++){
  var secondvalue = key-p[i];
  var binarysearchVal = binarySearch(p, secondvalue);
  if(binarysearchVal>1){
   console.log(p[i]+'::'+secondvalue);
   break;
  }
}
 