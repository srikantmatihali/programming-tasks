/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: Total number of same occurences within array
 * Inputs:   [1,1,2,5,5,6,6,4,4,4]
 * Output:  
 * {
    1: 2,
    2: 1,
    4: 3,
    5: 2,
    6: 2
   }
 * jsfiddle: https://jsfiddle.net/srikantmatihali/qrxg3b9m/31/
 */
console.log('Number of Letter occurences within an Array');
console.log('=========================================');

const a = [1,1,2,5,5,6,6,4,4,4];
let mapObj1 = {};
for(var i of a){
 if(mapObj1[i]){
    mapObj1[i]= mapObj1[i]+1;
  }else{
    mapObj1[i] = 1;
  }
}
console.log(mapObj1);