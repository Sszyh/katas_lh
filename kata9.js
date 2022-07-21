/*
const camelCase = function (input) {
  let camelString = "";
  for (let i = 0; i < input.length; i++) {
    if (input.slice(i,i+1) !== " ") {
      camelString += input[i];
    } else {
      camelString += input[i+1].toUpperCase();
      i += 1;
    }
  }
  return camelString;
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
*/



const camelCase = function(input) {
  let newString = input;
  for(let i = 0; i < input.length; i++) {
    if(newString[i] === " ") {
      newString = newString.slice(0 , i) + newString[i+1].toUpperCase() + newString.slice(i+2);
      console.log(newString)
    }
  }
  return newString;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
