const calculateChange = function(total, cash) {
  let numOfTwenty = 0;
  let numOfTen = 0;
  let numOfFive = 0;
  let numOfTwo = 0;
  let numOfOne =0;
  let numOfQuarter = 0;
  let numOfDime = 0;
  let numOfNichel = 0;
  let numOfPenny = 0;
  let change = {};
  let a = (cash - total) / 100;
  
  numOfTwenty = Math.floor(a / 20);
  a = a % 20;
  
  numOfTen = Math.floor(a/10);
  a = a % 10;
 
  numOfFive = Math.floor(a/5);
  a = a % 5;
  
  numOfTwo = Math.floor(a/2);
  a = a % 2;

  numOfOne = Math.floor(a);
  a = a % 1;
 
  numOfQuarter = Math.floor(a / 0.25);
  a = a % 0.25;

  numOfDime = Math.floor(a / 0.1);
  a = a % 0.1;

  numOfNichel = Math.floor(a / 0.05);
  a = a % 0.05;

  numOfPenny = Math.round(a*100);

  let arrays = [numOfTwenty,numOfTen,numOfFive,numOfTwo,numOfOne,numOfQuarter,numOfDime,numOfNichel,numOfPenny];
  let arrayKey = ["twentyDollars", "tenDollars", "fiveDollars","twoDollars","oneDollar","quarter","dime","nichel","penny"];
  let i = 0;
  for (i = 0; i < 9; i++) {
    if (arrays[i] > 0) {
      change[arrayKey[i]] = arrays[i];
    } 
  }
  return change;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));