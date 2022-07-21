/*
const checkAir = function (samples, threshold) {
  let i = 0;
  let perCent = 0;
  let check = "Pulluted";
  for (let sample of samples) {
    
    if (sample === "dirty") {
      i++;
    }
    perCent = i / sample.length
  }
  if (perCent < threshold) {
    check = "Clean";
  } else {
    check = "Pulluted"; 
  }
  return check;
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
*/




const checkAir = function(samples, threshold) {
  let num = 0;
  let persence = 0;
  let result = "Clean";
  for(let sample of samples) {
    if(sample === "dirty") {
      num += 1;
    }
    persence = num / (samples.length + 1);
  }
  if(persence > threshold) {
    result = "Polluted";
  }
  return result;
 };

 console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))