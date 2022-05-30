/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: 
 *  Given a string S, find length of the longest substring with all distinct characters.
 * Inputs:  S = "geeksforgeeks"  //substrings: ge, eksforg,eks 
 * Output: 7
 * Explanation: "eksforg" is the longest substring with all distinct characters.
 * 
 */
 console.log('FIND LONGEST SUBSTRING');
 console.log('=========================================');

 const s=  "geeksforgeeks"; 
 const length = s.length;
 var bigString = s[0];
 var tempSubString = s[0];
 console.log('SUB STRINGS::');
 for(var i=1;i<length;i++){
   var j = i-1;
   var tempSubString = s[j];
    while(j<(length-1)){
      if(s[j]!=s[j+1]){
           if(tempSubString.indexOf(s[j+1])==-1){
            tempSubString += s[j+1];
          }else{
              break;
          }
      }else{
          break;
      }
      j++;
   }
   if(tempSubString.length > bigString.length){
       bigString = tempSubString;
   }
   console.log(tempSubString);
 }

 console.log('=========================================');
 console.log('Biggest sub String::'+bigString);