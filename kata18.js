/*
const squareCode = function(message) {
  let temp = message;
  let squareArray = [];
  let newCodeElm ="";
  let newArray = [];
  temp = temp.replaceAll(" ", "");
  //console.log(temp);
  let columns = Math.ceil(Math.sqrt(temp.length));
  //console.log(columns);
  
  for(let i = 0; i < columns; i++) {
    for(let j = 0; j < columns; j++) {
      if(temp[columns * j+i] !== undefined) {     
        newCodeElm += temp[columns * j+i ];
      }
    }
    //newArray.push(newCodeElm);
    newCodeElm = newCodeElm + " ";
    //newCodeElm = "";
  }
  
  //make squareArray [ 'feed', 'thed', 'og' ]
  for(let i = 0; i < columns -1 ; i++) {
    squareArray.push([temp.slice(0,columns)]);
    temp = temp.slice(columns,temp.length);
  }

for(const obj of squareArray){
  
  for(const c of obj){
    for(let j = 0; j < columns.length; j++) {

    }
    console.log(c)
    
  }
}

  for(let y = 0; y < columns; y++) {
    for(let x = 0; x < columns; x++) {
     //console.log(squareArray[0])//
     //newCodeElm += squareArray[x][y]hhh
    }
  
  //newArray.push(newCodeElm)
 //console.log(newArray)
  }
return newArray

return newCodeElm
}


console.log(squareCode("feed the dog"));

//console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
*/

const squareCode = function(message) {
  let temp = message;
  let newCodeElm ="";
  temp = temp.replaceAll(" ", "");
  let columns = Math.ceil(Math.sqrt(temp.length));
  for(let i = 0; i < columns; i++) {
    for(let j = 0; j < columns; j++) {
      if(temp[columns * j+i] !== undefined) {     
        newCodeElm += temp[columns * j+i ];
      }
    }
    newCodeElm = newCodeElm + " ";
  }  
  return newCodeElm;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
