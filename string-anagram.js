/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statement: 
 *   An anagram of a string is another string that contains the same characters, 
 *   only the order of characters can be different. Ex - “vimeo” and “movie” are anagrams of each other. ‘vvimeo’ and ‘mmovie’ aren’t.
 * Alternate Solution: (https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other
 */

 console.log('check if string is anagram of another');
 console.log('=========================================');

 let str1 = "vimeo"; //"vvimeo";
 let str2 = "movie"; //"mmovie";
 
 let arr1 =  str1.split("");
 let arr2 =  str2.split("");
 
 let modifiedString1 = arr1.sort().join("");
 let modifiedString2 = arr2.sort().join("");
 
 if(modifiedString1===modifiedString2){
    console.log('Anagram Strings');
 }else{
   console.log('Non Anagram Strings');
 } 