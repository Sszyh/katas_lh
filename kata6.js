/*
const whereCanIPark = function (spots, vehicle) {
  let x = 0;
  let y = 0;
  array = false;
  if (vehicle === "regular") {
    for (y = 0; y < spots.length; y++) {
      for (x = 0; x < spots[y].length; x++) {
        if (spots[y][x] === "R") {
          array = [x,y];
        }
      }
    }
  } else if (vehicle === "small") {
    for (y = 0; y < spots.length; y++) {
      for (x = 0; x < spots[y].length; x++) {
        if (spots[y][x] === "R" || spots[y][x] === "S") {
          array = [x,y];
        }
      }
    }
  } else if (vehicle === "motorcycle") {
    for (y = 0; y < spots.length; y++) {
      for (x = 0; x < spots[y].length; x++) {
        if ((spots[y][x] === "R") || (spots[y][x] === "S")|| (spots[y][x] === "M")) {
          array = [x,y];
          console.log(x);
        }
      }
    }
  }
  return array;
}


const whereCanIPark = function (spots, vehicle) {
  let array = false;
  let x = 0;
  let y = 0;
  for (y = 0; y < spots.length; y++) {

    for (x = 0; x < spots[y].length; x++) {
     // console.log(spots[y][x]);
      if (vehicle === "regular") {
        if (spots[y][x] === "R") {
          array = [x,y];
          return array;
        }
      } else if (vehicle === "small") {
        if (spots[y][x] === "R" || spots[y][x] === "S") {
          array = [x,y];
          return array;
        } 
      } else if (vehicle === "motorcycle") {
        if (spots[y][x] === "R" || spots[y][x] === "S" || spots[y][x] === "M") {
          array = [x,y];
          return array; //如果不return array，返回的是最后一个合格的值
        } 
      }
    }
  }
  return array;
}


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

*/



const whereCanIPark = function(spots, vehicle) {
  let finalOutput = false;
  for(let i = 0; i < spots.length; i++) {
    for(let j = 0; j <spots[0].length; j++) {
      switch(vehicle) {
        case "regular":
          if(spots[i][j] === "R") {
            finalOutput = [j, i]
            return finalOutput;
          }
          break;
        case "small":
          if(spots[i][j] === "R" || spots[i][j] === "S") {
            finalOutput = [j, i]
            return finalOutput;
          }
          break;
        case "motorcycle":
          if(spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M") {
            finalOutput = [j, i]
            return finalOutput;
          }
          break;
        }
      }
    }
    return finalOutput;
  }

  console.log(whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'r', 'M'], // 1
      ['s', 'M', 's', 'S', 'r', 'm'], // 2
      ['S', 'r', 's', 'm', 'r', 'M'], // 3
      ['S', 'r', 's', 'm', 'r', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S']  // 5
    ],
    'regular'
  ));
  
  console.log(whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M']
    ],
    'small'
  ));
  
  console.log(whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S']
    ],
    'motorcycle'
  ))