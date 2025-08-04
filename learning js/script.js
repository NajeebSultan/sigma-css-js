// ------Arrays------
let student1 = "aman";
let student2 = "suman";
let student3 = "ram";
let students = ["aman", "suman","ram" ];

let nums = [1, 2, 3, 4, 5];
 console.log(students[0]);

 let info = ["shrada", 23,90.6];
 console.log(info);
// -----Array push method------
 let cars = ["audi", "bmw", "xuv" ,"maruti"];
 cars.push("totyota");
 cars.push("honda");
 console.log(cars);

//  Array pop method
cars.pop();
console.log(cars);

// Array unshift method
cars.unshift("ferrari");
console.log(cars);
// Array shift method
let followers = ["a","b","c"];
followers.shift();
console.log(followers);

//Array indexOf method
let index = cars.indexOf("bmw");
console.log(index);

// array concat method
let primary = ["red", "yellow","blue"];
let secondary = ["green", "orange", "purple"];
let allcolors = primary.concat(secondary);
console.log(allcolors);

//array reverse method
primary.reverse();
console.log(primary);

//array sort method
 let car = ["audi", "bmw", "xuv" ,"maruti"];
car.sort();
console.log(car);
// array slice method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slicedNumbers = numbers.slice(2, 5); 
console.log(slicedNumbers); 

// array splice method
let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 2, "orange", "kiwi");
console.log(fruits); 

//Nested Arrays
let num = [[1,2],[3,4],[5,6]];
console.log(num);


//for loop
for(let i =0; i<=5; i++){
    console.log(i);
}


//print odd numbers
for(let i = 1; i <= 15; i += 2) {
    console.log(i);
}

//print even numbers
for(let i = 0 ; i<=10 ;i+= 2) {
    console.log(i);
}

//Table of 5 
for(let i=5 ; i<=50; i+=5) {
    console.log(i);
}

//nested for loop
for(let i = 1; i <= 3; i++) {
  console.log(`outer loop ${i}`);
    for(let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

//for of loop
let frus = ["mango", "apple", "banana", "orange"];
for (let fruit of frus) {
    console.log(fruit);

}


//Todo app

// let todo = [];

// let req = prompt("please enter your request:");

// while(true){
//   if(req=="quit"){
//     console.log("quiting app");
//     break;
//   }

//   if(req=="list"){
//     console.log("------------");
//     for(let i = 0; i < todo.length; i++) {
//       console.log(i , todo[i]);
//     }

//     console.log("------------");
//   } else if (req == "add"){
//     let task = prompt("please enter your task");
//     todo.push(task);
//     console.log("task added! ");
//   } else if(req == "delete"){
//     let idx = prompt("please enter the task index");
//     todo.splice(idx, 1);
//     console.log("task deleted!");
//   } else {
//     console.log("wrong request!");
//   }

//   req = prompt("please enter your request");
// }

//object literals
const  student = {
  name: "Aman",
  age: 23,
marks: 90.6,
}
console.log(student);

//object of object 
const classInfo = {
  aman:{
    grade: "A",
    city: "Delhi",
  },
    shradha:{
     grade: "A",
    city: "pune",
  },
  karan:{
     grade: "o",
    city: "mumbai",
  },
};
console.log(classInfo);

// Math Object
console.log(Math.PI);
console.log(Math.abs(-5)); 
console.log(Math.pow(2, 3)); 
console.log(Math.floor(4.7));
console.log(Math.ceil(4.2));
console.log(Math.random()); 

//Guessig game
// const max = prompt("Enter the maximum number");
// console.log(max);

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number");
// while (true){
//   if(guess =="quit"){
//     console.log("quiting game");
//     break;
//   }
//   if(guess == random){
//     console.log("you are right! random number was , " + random);
//     break;
//   } else if(guess < random){
//    guess = prompt("too low, try again");
//   }
//   else{
//    guess=  prompt("too large, try again");
//   }
// }

//functions 
function hello(){
  console.log("hello world");
}
hello();

function printName() {
  console.log("Aman");
  console.log("Shradha");
}
printName();

//roll a dice 

function rollDice() {
  const rand = Math.floor(Math.random() * 6) + 1;
  console.log(rand);
}

rollDice();

// function with parameters
function printName(name) {
  console.log(name);
}

printName("Aman");


//function to calculate average
function calAvg(a,b,c){
  let avg = (a + b + c) / 3;
  console.log(avg);
}
calAvg(10, 20, 30);

//return statement
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 10));

//scope
function calSum(a,b){
  let sum = a + b;
  console.log(sum);
}

calSum(10, 20);

//function expression
let sum1 = function(a, b) {
  return a + b;
}
console.log(sum1(5, 10));

let hello1 = function() {
  console.log("Hello, World!");
}
hello1();

//high order function
function multipleGreet(func,count){
  for(let i = 0; i < count; i++) {
    func();
  }
}

let greet = function() {
  console.log("Hello!");
}
multipleGreet(greet, 3);

//Methods
const calculator = {
  num:55,
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }

 
}

//this method
const person = {
  name: "Aman",
  age: 23 ,
  eng:12 ,
  sci:14 ,
  math: 16 ,
  getavg(){
    let avg = (this.eng + this.sci + this.math) / 3;
    console.log(`Average marks of ${this.name} is ${avg}`);
  }
  
}

//for each 
let arr = [1, 2, 3, 4, 5];      
arr.forEach((el) => {
  console.log(el);
});

//Map method
let num2 = [1, 2, 3, 4, 5];
let double = num.map((el) => {
  return el * 2;
});
console.log(double);  
//filter method
let num3 = [1, 2, 3, 4, 5];
let even = num3.filter((el) => {
  return el % 2 === 0;
}   
);
console.log(even);

//every method
let num4 = [1, 2, 3, 4, 5];
let allEven = num4.every((el) => {
  return el % 2 === 0;
}     
);
console.log(allEven);

//some method
let num5 = [1, 2, 3, 4, 5];
let someEven = num5.some((el) => {
  return el % 2 === 0;
}   
);    
console.log(someEven);

//default parameters 
function sum(a,b){
  return a + b;
}

//spread operator
let array = [1, 2, 3];
console.log(...array); 

//array literals
let arr4 = [1, 2, 3];
let newArr = [...arr4];
console.log(newArr);

//Object literals

const data= {
  email: "ironman@gmail.com",
  password: "ironman123",
};
const datacopy = {...data , id: 123, country: "pakistan" };

//destructuring
let names = ["Aman", "Shradha", "Karan"];
let [name1, name2, name3] = names;
console.log(name1, name2, name3);