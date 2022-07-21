/*
const conditionalSum = function(values, condition) {
  let total = 0;
  if (values !== [] && condition === "even") {
    for (let value of values) {
      if (value % 2 === 0) {
        total += value;
      }
    }
  } else if (values !==[] && condition === "odd") {
    for (let value of values) {
      if (value % 2 === 1) {
        total += value;
      }
    } 
  } else if (values === []) {
    total = 0;
  }
  return total;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
*/




const conditionalSum = function(values, condition) {
  let num = 0
  for(let value of values) {
    if(condition === "even") {
      if(value % 2 === 0) {
      num += value;
    } 
  } else if(condition === "odd") {
    if(value % 2 === 1) {
      num += value;
    }
  }
  }
  return num;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));