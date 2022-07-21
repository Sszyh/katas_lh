/*
const repeatNumbers = function(data) {
  let output = '';
  let i = 0;
  let j = 0;
  let arrey = []
  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i][1]; j++) {
      output += data[i][0].toString();
    }
      arrey.push(output);
      output = '';
  }
  return arrey.toString();
}
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

*/




const repeatNumbers = function(data) {
  let array = [];
  for(let elm of data) {
    let string = "";
    for(let i = 0; i < elm[1]; i++) {
    string += (elm[0]).toString();
    }
    array.push(string);
  }
  return array.join(", ");
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));