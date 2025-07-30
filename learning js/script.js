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

let todo = [];

let req = prompt("please enter your request:");

while(true){
  if(req=="quit"){
    console.log("quiting app");
    break;
  }

  if(req=="list"){
    console.log("------------");
    for(let i = 0; i < todo.length; i++) {
      console.log(i , todo[i]);
    }

    console.log("------------");
  } else if (req == "add"){
    let task = prompt("please enter your task");
    todo.push(task);
    console.log("task added! ");
  } else if(req == "delete"){
    let idx = prompt("please enter the task index");
    todo.splice(idx, 1);
    console.log("task deleted!");
  } else {
    console.log("wrong request!");
  }

  req = prompt("please enter your request");
}

