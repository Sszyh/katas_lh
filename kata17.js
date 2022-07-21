const urlDecode = function(text) {
  let obj = {};
  let temp  = text  
  let key = "";
  temp = temp.replaceAll("%20", " ")
  temp = temp.split("&");
  for (let j = 0; j < temp.length; j++) {
    for (let i = 0; i <  temp[j].length; i++) {
      if(temp[j][i] !== "=") {
        key += temp[j][i];  
      } else {
        obj[key] = (temp[j]).slice(i+1, temp[j].length);
        key = "";
        break;
      }
    }  
  }
  return obj;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);