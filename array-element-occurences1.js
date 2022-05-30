/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: Total number of same occurences within array
 * Inputs:  [1,1,2,5,5,6,6,4,4,4]
 * Output:  [ [ 1, 2 ], [ 2, 1 ], [ 5, 2 ], [ 6, 2 ], [ 4, 3 ] ]
 * jsfiddle: https://jsfiddle.net/srikantmatihali/qrxg3b9m/31/
 */
console.log('Number of Letter occurences within an Array');
console.log('---------------------------------------------');
console.log('Note: Output appears as array with first element denotes element, \nsecond denotes occurences');
console.log('=========================================');

const a = [1,1,2,5,5,6,6,4,4,4];
let mapObj2 = new Map();
for(var i of a){
  if(mapObj2.get(i)){
    mapObj2.set(i,mapObj2.get(i)+1);
  }else{
   mapObj2.set(i,1);
  }
}
console.log([...mapObj2.entries()]);