/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statement:
 * It seems like something happened to these strings. 
 * Can you figure out how to clear up the chaos?  Write a function that joins these strings together such that they form the following words:  'Javascript', 'Countryside', and 'Downtown'.  You might want to apply basic JS string methods such as replace(), split(), slice() etc
 * jsfiddle: https://jsfiddle.net/srikantmatihali/arcpdzh0/33/
 * 
 */

 console.log('JAVASCRIPT REPLACE SPLIT SPLICE IMPLEMENTATION');
 console.log('=========================================');

function myFunction(a, b){
    a = a.replace('%','');
 b = b.replace('%','').split("").reverse().join("");
 var c = a+b;
 c = c[0].toUpperCase() + c.slice(1);
     console.log(c);  
return 
}
myFunction('java', 'tpi%rcs')
myFunction('c%ountry', 'edis')
myFunction('down', 'nw%ot')
/* Javascript
Countryside
Downtown */