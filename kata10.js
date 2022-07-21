/*
const multiplicationTable = function(maxValue) {
  let x = 0;
  let y = 1;
  let string = "";
  for (y = 1; y <= maxValue; y++) {
    string += "\n"
    for (x = 0; x < maxValue; x++) {
      string += (x + 1) * y + " "; 
    }
  }
  return string;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
*/




const multiplicationTable = function(maxValue) {
  let num = 0;
  let array = [];
  let nestedArray = [];
  for(let j = 1; j < maxValue +1; j++) {
    for(let i = 0; i < maxValue; i++) {
    num += j;
    //console.log(num)
    array.push(num);

  }
  nestedArray.push(array);
  return nestedArray;
}
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));