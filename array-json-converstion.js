/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: 
 *  Write a function that takes meta input and progress array and returns the result [line 28 - line 41].
 *   Inputs:  
 * [{
    id: 1551,
    name: 'cloud'
    }, {
    id: 1552,
    name: 'cloud2'
    }, {
    id: 1553,
    name: 'cloud3'
    }, ];
    const progress = [{
    id: 1551,
    state: 'new',
    }, {
    id: 1553,
    state: 'running',
    }]
 *   Output:  Get below output after above
 *  {
        1551: {
            name: 'cloud'
            state: 'new'
        },
        1552: {
            name: 'cloud2',
            state: 'unknown',
        },
        1553: {
            name: 'cloud3',
            state: 'running',
        }
    }
 * 
 * jsfiddle: https://jsfiddle.net/srikantmatihali/57je0dm9/23/   
 */

console.log('Array to JSON conversion');
console.log('=========================================');

 const meta = [{
    id: 1551,
    name: 'cloud'
  }, {
    id: 1552,
    name: 'cloud2'
  }, {
    id: 1553,
    name: 'cloud3'
  }, ];
  const progress = [{
    id: 1551,
    state: 'new',
  }, {
    id: 1553,
    state: 'running',
  }, ];
  const count = meta.length;
  var obj = new Object();
  for(var i=0;i<count;i++){
     var tempProgress = progress.filter(x => x.id == meta[i]['id'] );
     obj[meta[i]['id']] = { 'name': meta[i]['name'], 'state': 'unknown' }
     if(tempProgress && tempProgress.length>0){
          obj[meta[i]['id']].state =  tempProgress[0]['state'];
     }
  }
  console.log(obj);
  //n*m
  
  