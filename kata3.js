/*
const numberOfVowels = function(data) {
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    if (data.slice(i,i+1) === "a" || data.slice(i,i+1) === "e" || data.slice(i,i+1) === "i" || data.slice(i,i+1) === "o"|| data.slice(i,i+1)=== "u")
      num += 1;
  }
  return num;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
*/



const numberOfVowels = function(data) {
  let num = 0
  for(let d of data) {
    //console.log(d);
    if(d === "a" || d === "e" || d === "i" || d === "o" || d === "u") {
      num += 1;
    }
  }
  return num
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));