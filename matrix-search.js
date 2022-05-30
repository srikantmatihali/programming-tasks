/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: Write Program to search an element in the below given array.
 * [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
 * jsfiddle: https://jsfiddle.net/srikantmatihali/aswLn90z/69/ 
 * 
 */

console.log('Search Matrix');
console.log('=========================================');
var binarySearch = function(array,target,start,end){
    if(start>end){ return false; }
    mid = Math.floor(start+end/2);
    if(array[mid]===target){ 
      console.log('Element Found');
      return true; 
    }else if(array[mid]>target){
       return binarySearch(array,target,start,mid-1);
    }else{
       return binarySearch(array,target,mid+1,end);
    }
  } 
    
  var searchMatrix = function(matrix, target) {
      var flag = true;
      for(let innerArr of matrix){
        if(binarySearch(innerArr,target,0,innerArr.length)){
          flag = false;
            return 1;
        };
      }
      if(flag){
          console.log('Element Not found');
      }
  };
  
  const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
  const target = 23;
  searchMatrix(matrix,target); 