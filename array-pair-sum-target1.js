/**
 * Author: Roopak B Rao
 * License: MIT
 * Problem Statment: 
 *   Sum any two numbers in the array, which adds up to the target. 
 *   Print the indices of those numbers as the output.
 *   Inputs:  Array =  [2,4,6,7,8,9] , Target= 10
 *   Output:  [0, 4] - indices within array
 * jsfiddle: https://jsfiddle.net/srikantmatihali/vwoz9q1m/31/ 
 * 
 */
 console.log('Array Pair sum leading to Target Value');
 console.log('=========================================');

 const arr =  [2,4,6,7,8,9];
 const arrCount = arr.length;
 const target = 10;
 for(var i=0;i<arrCount;i++){
     for(var j=i+1;j<arrCount;j++){
         if(target == (arr[i]+arr[j]))
         {
           console.log("===Matched===");
           console.log("INDICES::::"+i+"::"+j);
           console.log("NUMBERS::::"+arr[i]+"::"+arr[j]);
 
         }
     }
 }
 