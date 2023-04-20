let signal = "red";

// if-else

if (signal == "red") {
  console.log("red => STOP");
} else if (signal == "yellow") {
  console.log("yellow => GO SLOW");
} else if (signal == "green") {
  console.log("green => GO FAST");
} else {
  console.log("INVALID");
}

console.log("----------");
//switch case

let user = "Admin";

switch (user) {
  case "Admin":
    console.log("He is admin");
    break;
  case "Student":
    console.log("He is Student");
  case "Mentor":
    console.log("He is mentor");
    break;
  default:
    console.log("this is default case");
}

console.log("----------");
// loops

// do while , while , for

// for

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("----------");
// do-while

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

console.log("----------");
// while

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
