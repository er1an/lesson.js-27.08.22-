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

// function greet(userName) {
//   console.log(`Hello ${userName}`);
// }
// greet("erln");

// function calcSum(a, b) {
//   return a + b;
// }
// let result = calcSum(1, 2);
// console.log(result);

// const erlan = function (a, b) {
//   return a + b;
// };
// console.log(erlan(1, 2));

// const greet = (a, b) => {
//   return a + b;
// };
// console.log(greet(79, 79));

// let greet = (a) => {
//   return a;
// };
// console.log(greet(444));

// function erlan() {
//   let greet = "10";
//   let num1 = Number(greet);
//   console.log(typeof num1);
// }
// erlan();

// function inArray(text, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === text) return true;
//   }
//   return false;
// }
// console.log(inArray("omg", ["hello", "ggf", "fddfd", "omg"]));

// function erlan(num1) {
//   if (num1 % 2 === 0) {
//     document.write(true);
//   } else {
//     document.write(false);
//   }
// }
// erlan(23);

//циклы while...

// let potatoes = 10;
// while (potatoes > 0) {
//   potatoes--;
//   console.log(`Potatoes left: ${potatoes}`);
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// let erlan = ["erlann", "mirlan", "asan", "uson"];
// let i = 0;
// while (i < erlan.length) {
//   console.log(`salam ${erlan[i]}`);
//   i++;
// }

// let erlan = 2;
// let i = 0;
// while (i <= 10) {
//   console.log(`2 * ${i} = ${erlan * i}`);
//   i++;
// }

let i = 2;
while (i <= 9) {
  let j = 1;
  while (j <= 10) {
    console.log(`${i} * ${j} = ${j * i}`);
    j++;
  }
  i++;
}
