/* 
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: OTT cracker problem.
 * jsfiddle: https://jsfiddle.net/srikantmatihali/wxa7d18e/28/
*/

console.log('OTT CRACKER PROBLEM');
console.log('=========================================');

function getNum(alphabetMap, letters) {
    var i = letters.length;
    var totalCount = 0;
    for (letter of letters) {
      totalCount += alphabetMap[letter] * (Math.pow(26, i - 1));
      i--;
    }
    return totalCount;
  }
  
  function createMap() {
    var obj = {};
    var k = 1;
    for (var i = 65; i < 91; i++) {
      Object.assign(obj, {
        [String.fromCharCode(i)]: k++
      });
    }
    return obj;
  }
  
  var alphabetMap = createMap();
  var lettersArray = ["AAZ", "AIP", "ZA"]; 
  //["AZ","BA","P"]; 
  //["AZ","BA"]
  let decodedArray = [];
  for (letters of lettersArray) {
    decodedArray.push(getNum(alphabetMap, letters));
  }
  console.log(decodedArray);
  var result = decodedArray.sort(function(a, b) {
    return Number("" + b + a) - Number("" + a + b);
  }).join('');
  console.log(result);
  