
const organizeInstructors = function(instructors) {
  let obj = {};
  for (let instructor of instructors) {
    if (instructor["course"] in obj) {
      continue;
    } 
    obj[instructor["course"]] = [];
    //console.log(obj);
    //console.log(Object.keys(obj));
 
    for (let i = 0; i < instructors.length; i++) {
      let courseName = instructors[i]["course"];
      let instructorName = instructors[i]["name"];
      if (courseName === instructor["course"]) {
      obj[courseName].push(instructorName)
      }
    } 
  }  
  return obj;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/*
const organizeInstructors = function(instructors) {
  let result = {};
for (let instructor of instructors) {
    if(!result[instructor.course]) {
      result[instructor.course] = [];
      result[instructor.course].push(instructor.name);
    } else {
      result[instructor.course].push(instructor.name);
    }
}
  return result;
}
*/