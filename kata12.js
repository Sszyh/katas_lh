let choose = "";
let chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (let x = 0; x < recipes.length; x++) {
    for (let i = 0; i < bakeryA.length; i++) {
      //console.log(recipes[x]["ingredients"][0]);
      if (recipes[x]["ingredients"][0] === bakeryA[i]) {
        //console.log(recipes[x]["ingredients"][0]);
        bakeryA.splice(i,1);
        //console.log(bakeryA);
        for (let j = 0; j < bakeryB.length; j++) {
          if (recipes[x]["ingredients"][1] === bakeryB[j]) {
            choose = recipes[x]["name"]
          }
        }
      } else if (recipes[x]["ingredients"][1] === bakeryA[i]) {
        for (let j = 0; j < bakeryB.length; j++) {
          if (recipes[x]["ingredients"][0] === bakeryB[j]) {
            choose = recipes[x]["name"]
          }
        }
      }
    }
  }
  return choose;
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));