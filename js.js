// let yourNumber = prompt("Введите число");
// yourNumber--;
// document.write(yourNumber);

// let hour = 00;
// if (hour >= 5 && hour <= 10) {
//   console.log("Kutman tan");
// } else if (hour > 10 && hour <= 18) {
//   console.log("Kuyman kun");
// } else if (hour > 18 && hour <= 22) {
//   console.log("kutman kech");
// } else {
//   console.log("kutman tun");
// }

// let user = "Azgamat";
// if (user == "Azamat") {
//   console.log("Hello Azamat");
// } else {
//   console.log("hello user");
// }

// let user = "";

// if (user) {
//   console.log("Hello " + user);
// } else {
//   console.log("I don't who you are!");
// }

// let user = "";
// user ? console.log("Hello " + user) : console.log("I don't who you are");

// function
// function erlan() {
//   console.log("Hello World!");
// }
// erlan();

// function erlan() {
//   let user = prompt("What is your name?");
//   alert("Hello " + user);
// }
// erlan();
// erlan();

// let user = prompt("What is your name?");
// function erlan(userName) {
//   alert("Hello " + userName);
// }
// erlan(user);

// function erlan(userName) {
//   alert("Hello " + userName);
// }
// erlan("Erlan");
// erlan("Mirlan");

// function calcSum(num1, num2) {
//   console.log(num1 + num2);
// }
// calcSum(1, 1);
// calcSum(199, 1);

// function calcSum(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }
// console.log(calcSum(10, 10));

// function calcSum(num1, num2) {
//   return num1 + num2;
// }
// console.log(calcSum(1, 2));

// function calcSum(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     console.log("Check your args");
//     return "typeof arg1: " + typeof num1 + " typeof arg2: " + typeof num2;
//   }
// }
// console.log(calcSum(12, 0));

// function calcSum(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     console.error("wrong args types");
//     return "typeof arg1: " + typeof num1 + " typeof arg2: " + typeof num2;
//   }
// }
// console.log(calcSum(12, "p"));

function greet(userName) {
  console.log(`Hello ${userName}`);
}
greet("erln");
