/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: Given an array with elements, find the top k most occuring elements
 * Inputs: 
 *         array = ['a', 'b', 'c', 'c', 'c', 'b', 'a', 'd', 'd', 'd', 'd', 'd', 'a']
 *         k = 3
 * Output: [‘d’, ‘c’, ‘a’] or [‘d’, ‘a’, ‘c’]
 * jsfiddle: https://jsfiddle.net/srikantmatihali/zL4reusv/46/ 
*/

console.log('Array ==> k most occuring elements');
console.log('=========================================');

let arr = ['a', 'b', 'c', 'c', 'c', 'b', 'a', 'd', 'd', 'd', 'd', 'd', 'a'];
let p = {};
for(let element of arr){
   p[element] = (p[element])? p[element]+1 : 1;
} 

var sort_array = [];
for (var key in p) {
    sort_array.push({key:key,value: p[key]});
}
sort_array.sort(function(x,y){return y.value - x.value});

for(k=0;k<3;k++){
	console.log(sort_array[k]);
}