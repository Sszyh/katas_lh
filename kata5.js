
const urlEncode = function(text) {
  let newString = "";
  for (let i = 0; i < text.length; i++){
    if (text.slice(i,i+1) !== " ") {
      //console.log(i);
      //console.log(text.slice(i,i+1));
      newString += text.slice(i,i+1);
    } else {
      newString += "%20";
    } 
  }
  return newString;
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs"));
console.log(urlEncode("blue is greener than purple for sure"));


/*
const urlEncode = function(text) {
  let i = 0;
  let string = "";
  while(i < text.length) {
    if(text[i] === " ") {
      string += "%20";
      i++;
    }
    string += text[i];
    i++;
  }
  return string;
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
*/