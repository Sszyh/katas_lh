const talkingCalendar = function(date) {
  let month = date.slice(5,7);
  let monOutput = "";
  switch (month) {
    case "01" :
      monOutput = "January";
      break;
    case "02" :
      monOutput = "February";
      break;
    case "03" :
      monOutput = "March";
      break;
    case "04" :
      monOutput = "April";
      break;
    case "05" :
      monOutput = "May";
      break;
    case "06" :
      monOutput = "June";
      break;
    case "07" :
      monOutput = "July";
      break;
    case "08" :
      monOutput = "August";
      break;
    case "09" :
      monOutput = "September";
      break;
    case "10" :
      monOutput = "October";
      break;
    case "11" :
      monOutput = "November";
      break;
    case "12" :
      monOutput = "December";
      break;

  } 

  let day = date.slice(8,10);
  let dayOutput = "";
  switch (day) {
    case "01" :
      dayOutput = "1st";
      break;
    case "02" :
      dayOutput = "2nd";
      break;
    case "03" :
      dayOutput = "3rd";
      break;
    case "21" :
      dayOutput = "21st";
      break;
    case "22" :
      dayOutput = "22nd";
      break;
    case "23" :
      dayOutput = "23rd";
      break;
    case "31" :
      dayOutput = "31st";
      break;
    default :
      dayOutput = day + "th";
  }
  return monOutput + " " + dayOutput + ", " + date.slice(0,4)
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

//可以尝试设一个array