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

const a = [4,4,5,5,1,2,1,4,0,9,0].sort();
function uniqueArray(a){
    var tempArr = [];
    const count = a.length;
    tempArr.push(a[0]);
    if(count>0){
        for(i=1;i<count;i++){
        if(a[i-1]!=a[i]){
            tempArr.push(a[i]);
        }
        }
    }
    return tempArr;
}
let b = uniqueArray(a);
console.log('Original Array :: ',a);
console.log('Modified Array :: ',b);