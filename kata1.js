/*
const sumLargestNumbers = function(data) { 
  let largerNum = 0;
  let secLargeNum = largerNum;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largerNum) {
      secLargeNum = largerNum;
      largerNum = data[i];
    }
  }
  return largerNum + secLargeNum;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
*/



const sumLargestNumbers = function(data) {
  data.sort(function(a, b) {
    return b - a;
  })
  return data[0] + data[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
