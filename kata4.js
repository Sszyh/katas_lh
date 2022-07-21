/*
const instructorWithLongestName = function(instructor) {
  let index = 0;
  let length = 0;
  for (let i = 0; i < instructor.length; i++) {    
    if (instructor[i]["name"].length > length) {
      index = i;
      length = instructor[i]["name"].length;
    } 
  }
  return instructor[index];
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
*/




const instructorWithLongestName = function(instructors) {
  instructors.sort(function(a, b) {
    return  (b.name).length - (a.name).length
  })
    //console.log(instructors);
  return instructors[0];
  }

  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));