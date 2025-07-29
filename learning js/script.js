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