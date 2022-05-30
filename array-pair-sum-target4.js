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

const p= [1,5,9,10]; 
var i,j;
var count = p.length;
var key= 15;
var breakLoop = false;
for(i=0;i<count;i++){
for(j=0;j<count;j++){
        if(p[i]+p[j]==key){
            console.log(p[i]+'::'+p[j]);
            breakLoop = true;
            break;
        } 
    }
    if(breakLoop){ break;}
} 