//#region combine in one function
/*
const chessBoard = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
];

const generateBoard = function(whiteQueen, blackQueen) {
  let row = whiteQueen[0];
  let column = whiteQueen[1];
  let inputChess = chessBoard;
  inputChess[row].splice(column,1,1);
  console.log(inputChess);
  let row2 = blackQueen[0];
  let column2 = blackQueen[1];
  inputChess[row2].splice(column2,1,1);
  
  //console.log(inputChess);
  let gapRow = Math.abs(row - row2);
  let gapColomn = Math.abs(column - column2);
  if(row === row2 || column === column2 || gapRow === gapColomn) {
    return true;
  } else {
    return false;
  }
}
//#endregion

let whiteQueen = [0,5];
let blackQueen = [5,0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
//console.log(queenThreat(generatedBoard));
*/

const chessBoard = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
];
let row = 0;
let column = 0;
let row2 = 0;
let column2 = 0;

const generateBoard = function(whiteQueen, blackQueen) {
  row = whiteQueen[0];
  column = whiteQueen[1];
  let inputChess = chessBoard;
  inputChess[row].splice(column,1,1);
  row2 = blackQueen[0];
  column2 = blackQueen[1];
  inputChess[row2].splice(column2,1,1);
  return inputChess;
}

const queenThreat = function(input) {
  let gapRow = Math.abs(row - row2);
  let gapColomn = Math.abs(column - column2);
  if(row === row2 || column === column2 || gapRow === gapColomn) {
    return true;
  } else {
    return false;
  }
}
/*
let whiteQueen = [0,5];
let blackQueen = [5,0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));