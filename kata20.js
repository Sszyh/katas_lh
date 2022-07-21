const blocksAway = function(directions) {
  const startPoint = [0,0];
  let direc = "";
  let eastNum = 0;
  let westNum = 0
  let northNum = 0;
  let southNum = 0;
  let conditionString = [];
  let finalObj = {};

  if(directions[0] === "right") {
    direc = "east";
    eastNum = directions[1];
  } else if(directions[0] === "left") {
    direc = "north";
    northNum = directions[1];
  }
  
  for(let i = 2; i < directions.length; i =i+2) {
    if(direc === "east" && directions[i] === "left") {
      direc = "north";
      northNum += directions[i+1];
      conditionString = direc.concat(directions[i+2]);
    } else if(direc === "east" && directions[i] === "right") {
      direc = "south";
      southNum += directions[i+1];
      conditionString = direc.concat(directions[i+2]);
    } else if(direc === "north" && directions[i] === "left") {
      direc = "west";
      westNum += directions[i+1];
      conditionString = direc.concat(directions[i+2]);
    } else if(direc === "north" && directions[i] === "right") {
      direc = "east";
      eastNum += directions[i+1];
      conditionString = direc.concat(directions[i+2]);
    } else if (direc === "west" && directions[i] === "left") {
      direc = "south";
      southNum += directions[i+1];
      conditionString = direc.concat(directions[i+2]);
    } else if(direc === "west" && directions[i] === "right") {
      direc = "north";
      northNum += directions[i+1];
      conditionString = direc.concat(directions[i+2]);
    } else if(direc === "south" && directions[i] === "left") {
      direc = "west";
      westNum += directions[i+1];
      conditionString = direc.concat(directions[i+2]);
    } else if(direc === "south" && directions[i] === "right") {
      direc = "west";
      westNum += directions[i+1];
      conditionString = direc.concat(directions[i+2]);
    }
  }
  finalObj["east"]=eastNum - westNum;
  finalObj["north"]= northNum -southNum;
  return finalObj;
}


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
