/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: 
 *   Sum any two numbers in the array, which adds up to the target. 
 *   Print the indices of those numbers as the output.
 *   Inputs:  Array =  [2,4,6,7,8,9] , Target= 10
 *   Output:  [0, 4] - indices within array
 * 
 */
 console.log('Array Pair sum leading to Target Value');
 console.log('=========================================');

 const numbers = [1,4,3,2];
 k=5;
 //ouptput set of two numbers. all unique combinations of given numbers array.
 
 findPairs = function(numbers,k){
     //console.log(numbers);
     let returnArray = [];
     for(let i of numbers){   // n
        var tempVal = k-i;
        var duplicateCheck = returnArray.flat().filter(function(num){
            return (num==tempVal);
        });
        if(duplicateCheck.length>0){
            /* console.log('duplicate present') */
        }else{
           let resultTemp = [i,tempVal];
          var result= numbers.filter(function(number){
             return (number==tempVal);
          });
          if(result.length>0){
             /* console.log(resultTemp) */
             returnArray.push(resultTemp);
          }
        }
     }
     /* console.log(returnArray.flat()) */
     console.log(returnArray);
     return returnArray;
 }

 /*array.flat() is not implemented in in common browsers (only Chrome v69, Firefox Nightly and Opera 56). 
 It’s an experimental feature. Therefore you cannot use it yet.
 ref: https://stackoverflow.com/questions/50993498/flat-is-not-a-function-whats-wrong
 */
 Object.defineProperty(Array.prototype, 'flat', {
  value: function(depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
    }, []);
  }
});
 
 findPairs(numbers,k);
 