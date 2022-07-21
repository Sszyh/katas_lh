const makeCase = function(input, cas) {
  let newString = "";
  
  let casStyles = []; //set new array, change cas to array
  if (typeof cas === "string") {
    casStyles.push(cas);
  } else {
    casStyles = cas;
  }

//#region
/*
  let arrayOfCase = [ //set sample 
    {
      priority: 1,
      caseGroup: ["camel", "pascal", "snake", "kebab", "title"]
    },
    {
      priority: 2,
      caseGroup: ["vowel", "consonant"]
    },
    {
      priority: 3,
      caseGroup:["upper", "lower"]
    }
  ];

 
  //sort array
  arrayOfCase.sort(function(a, b) {
    return (b["priority"] - a["priority"])
  });

//console.log(arrayOfCase);

let obj = {};
for (let casStyle of casStyles) { //loop cas
 for (i = 0; i < arrayOfCase.length; i++) { //loop sample to find cas
  //console.log(casStyle)
    if (casStyle in arrayOfCase[i]["caseGroup"]) {
      console.log(casStyle)
      //console.log(casStyle in arrayOfCase[i].caseGroup === true)
      //casStyle.priority = arrayOfCase[i].priority
      obj["name"] = "yi"; 
      obj["priority"] = "12";
      console.log(obj)
      console.log(e)
    }
  }
}
*/
//#endregion

let sortArray = {
  camel: {priority: 1},
  pascal: {priority: 1},
  snake: {priority: 1},
  kebab: {priority: 1},
  title: {priority: 1},
  vowel: {priority: 2},
  upper: {priority: 2}

}


console.log(casStyles);
casStyles.sort((a, b)=> sortArray[b].priority - sortArray[a].priority);

console.log(casStyles)

/*
  { name: "camel", prio: 1 },
  { name: "pascal", prio: 1},
  { name: "snake", prio: 1},
  { name: "kebab", prio: 1},
  { name: "title", prio: 1},
  { name: "vowel", prio: 2},
  { name: "consonant", prio: 2},
  { name: "upper", prio: 3},
  { name: "lower", prio: 3},
]
*/
//#region

  const camelFunc = function(input) {
    for (let i = 0; i < input.length; i++) {
      if (input.slice(i,i+1) !== " ") {
        newString += input[i];
      } else {
        newString += input[i+1].toUpperCase();
        i += 1;
      }
    }
    return newString;
  }

  const upperFunc = function(input) {
    
    newString = input.toUpperCase();
    return newString ;
  }

  const lowerFunc = function(input) {
    newString = input.toLowerCase();
    return newString;
  }

  const vowelFunc = function(input) {
    for (let letter of input) {
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        newString += letter.toUpperCase()
      } else {
        newString += letter;
      }
    }
    return newString;
  }

  const consonantFunc = function(input) {
    for (let letter of input) {
      if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u") {
        newString += letter.toUpperCase();
      } else {
        newString += letter;
      }
    }
    return newString;
  }
  
  const pascalFunc = function(input) {
    for (let i = 0; i < input.length; i++) {
      if (i === 0 && input[i] !== 0) { 
        newString += input[i].toUpperCase();
      } else if (input[i] === " "){
        newString += input[i+1].toUpperCase();
        i += 1;
      } else {
        newString += input[i]
      }
    }
    return newString;
  }

  const snakeFunc = function(input) {
    newString = input; //set value at the beginning is better than change input
    for (let letter of newString) {
      if (letter === " ") {
        //console.log(input.replace(letter, "_"));
        newString = newString.replace(letter, "_");
      }
    }
    /* 
    //another way
    for (let letter of input) {
      
      if (letter === " ") {
      newString += "_" ;
      } else {
        newString += letter
      }  
    }
    */
    return newString;
  }
  
  const kebabFunc = function(input) {
    for (let letter of input) {
      if (letter === " ") {
        newString += "-";
      } else {
        newString += letter;
      }
    }
    return newString;
  }
  
  const titleFunc = function(input) {
    newString += input.toUpperCase();
    newString = newString.replaceAll(" ", "_");
    return newString;
  }
 
//#endregion

  let temp = input;
  for (let casStyle of casStyles){
    //let temp = input
    //console.log(newString)
    //console.log(temp)
    switch (casStyle) {
      case "upper":
        newString = upperFunc(temp);
        break;
      case "lower":
        newString = lowerFunc(temp);
        break;
      case "vowel":
        newString = vowelFunc(temp);
        break;
      case "consonant":
        newString = consonantFunc(temp);
        break;
      case "camel":
        newString = camelFunc(temp);
        break;
      case "pascal":
        newString = pascalFunc(temp);
        break;
      case "snake":
        newString = snakeFunc(temp);
        break;
      case "kebab":
        newString = kebabFunc(temp);
        break;
      case "title":
        newString = titleFunc(temp);
        break;
    }
    temp = newString;
  }
  return newString;
}
/*
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
*/
console.log(makeCase("this is a string", ["snake", "upper"]));

