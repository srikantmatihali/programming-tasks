/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: Remove Duplicate Elements from array
 * Inputs:  [4,4,5,5,1,2,1,4,0,9,0]
 * Output:  [0, 1, 2, 4, 5, 9]
 * jsfiddle: https://jsfiddle.net/srikantmatihali/3Luqbnod/10/
 */
console.log('Array Duplicates Removal');
console.log('=========================================');

const a = [1, 2 , 3, 4, 1, 5, 3, 2 ];
let b = [];
var i,j;
const length = a.length;
b[0] = a[0];
console.log('Present Elements::');
for(i=1;i<length;i++){
    var count = b.length;
    var flag = true;
    for(j=0;j<count;j++){
        if(b[j]===a[i]){
            flag = false; 
            console.log(i);
        }
    }
    if(flag){
      b.push(a[i]);
    }
}
console.log('Output Array::');
console.log(b)