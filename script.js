//variables
let name_ = "mehdi";
let age = 19;
name_ = "dhia";
console.log(name_);
const nameAgain = "meriem";

//primitive data
let str = "hello";
let x = 1.5;
console.log(x / 2);
console.log(9 > 19);
let y;
console.log(y);
//non primitive data
const arr = ["nour", "zeineb", "dhia"];
const ages = [18, 25, 35, 8];
console.log(arr[1]);
const person = {
  name: "youssef",
  lastName: "Rabai",
  age: 19,
};
console.log(person);
console.log(person.lastName);
//if statement:

// for loop
for (let i = 0; i < ages.length; i++) {
  if (ages[i] > 18) {
    let res = ages[i] - 18;
    console.log("this person is an adult since " + res + " ago");
  } else if (ages[i] == 18) {
    console.log("barely an adult");
  } else {
    console.log("this is a minor");
  }
}
for (i in arr) {
  console.log(arr[i]);
}

console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

function addition(a, b) {
  return a + b;
}
console.log(addition(8, 9) / 2);
