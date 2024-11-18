// console.log('hiii...!');


// alert('hi');
// window.alert('widows alert');

// single comment

/* this is fro paragraph comments */


// document.getElementById("h1").textContent = 'chandru';
// document.getElementById('p1').textContent = 'I am Chandru from kamalapuram. This is my starting site of javaScript. Thank you for watching this site  ...!'


// 1. Variable 

// this is decler and assign Variable
// let x;
// x = 100;

// this is direct assign to the Variable
// let x = 'hi';
// let age = 21;

// console.log(`${x} all i am ${age} years old boy.`);

// console.log(x);


//2. data types

// console.log(typeof (x));
// console.log(typeof (age));

// let a = true;
// console.log(a);
// console.log( typeof (a));


// let name = 'Chandru';
// let age = 21;
// let student = true;

//display the values in the html page
// document.getElementById('name').textContent = name;
// document.getElementById('age').textContent = age;
// document.getElementById('student').textContent = student;

//3. operators

//a. arithmetic operator:

// + - * / % **

// let value = 2500;
// console.log(value);


// this is augument assingment operator
// value += 1;
// console.log(value);

// value -= 1;
// console.log(value);

// value *=2;
// console.log(value);

// value /= 2;
// console.log(value);

// value %= 2;
// console.log(value);

// console.log(4**2);


// b. increment operator and decrement operator

// let inde = 5;
// inde++;
// console.log(inde);

// inde--;
// console.log(inde);


// 4. user input accept

// a. window promt methord

// let name;

// name = window.prompt("enter the name ? = ");
// console.log(`your name is ${name}`);

// b. html input

// let name;
// let age;

// document.getElementById("submit").onclick = function(){
//     name = document.getElementById("username").value;
//     age = document.getElementById("userage").value;
//     document.getElementById("greet").textContent = `hello buddy you ${name} your are now ${age}`;
//     console.log(name);
//     console.log(age);
    
// }


// 5. data type convertion

// datatypes - string, number, boolen

// let name = "chan";
// console.log(name); // chan
// console.log(typeof(name)); // string

// name = Number(name);
// console.log(name); // NaN
// console.log(typeof(name)); // number

// let age = 21;
// console.log(age); // 21
// console.log(typeof(age)); // number

// age = String(age);
// console.log(age);// 21
// console.log(typeof(age)); // string

// let gohome = true;
// console.log(gohome); // true
// console.log(typeof(gohome)); // boolean

// gohome = String(gohome);
// console.log(gohome); // true
// console.log(typeof(gohome)); // string


// 6. constant

// const PI = 3.3;
// console.log(PI); // 3.3

// PI = 5; // error: assignment to constant variable

// 7. math in js
// > buit-in object that provides a collection of properties and methods

// how to use the math

// console.log(Math.round(5.55)); // 6
// console.log(Math.floor(10.74)); // 10
// console.log(Math.ceil(10.74)); // 11
// console.log(Math.trunc(10.74)); // 10
// console.log(Math.pow(2,2)); // 4
// console.log(Math.sqrt(2)); // 1.4142135623730951
// console.log(Math.log(10)); // 2.302585092994046
// console.log(Math.sin(10)); // -0.5440211108893698
// console.log(Math.cos(10)); // -0.8390715290764524
// console.log(Math.tan(10)); // 0.6483608274590866
// console.log(Math.abs(10)); // 10
// console.log(Math.sign(-11)); // -1 for -signed values , 1 for + signed values
// console.log(Math.max(10,11,9)); // 11
// console.log(Math.min(10,1,0)); // 0

// 8. rendom number generator

// console.log(Math.random()); // random - 0 to infinete with decimal 

// console.log(Math.floor(Math.random()*6)); // 0-6 only numbers becouse used floor

// console.log(Math.floor(Math.random()*6)+1) // 1-6 

// let min = 1;
// let max = 7;
// console.log(Math.floor(Math.random()*(max - min))+min) // range random

// 9. conditions

// a. if statements
// > if a condition is true, execute some code (if not , do somthing else)

// if( 1<0 ) {
//     console.log("hello");
// }else{
//     console.log("hi.."); // hi...
// }

// let name = "chandru";

// if (name == "chandru") {
//     console.log("lol"); // lol
// }else {
//     console.log("mmm");
// }

// if(1) {
//     console.log("yeah"); // yeah
// }else {
//     console.log ("toto");
// }

// const ageinpt = document.getElementById("userage");
// const msg = document.getElementById("msg");
// const sub = document.getElementById("submit");
// let age;

// sub.onclick = function (){
//     age = ageinpt.value;

//     if(age > 18){
//         msg.textContent = "you are welcome"
//     }else if(age <= 0) {
//         msg.textContent = "are you a roobo"
//     }else if(age <= 18){
//         msg.textContent = "you are not 18+ , come beck after 18+"
//     }else {
//         msg.textContent = "onnum illa inga"
//     }
// }

// 10. .checked

// > property that determines the checked state of an HTML checkbox or radio button element
// const submitbtn = document.getElementById("checkboxbtn");
// const subresult = document.getElementById("subresult");
// const subresult1 = document.getElementById("subresult1");

// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById("visabtn");
// const masterbtn = document.getElementById("masterbtn");
// const paypalbtn = document.getElementById("paypalbtn");


// submitbtn.onclick = function () {
//     if(mycheckbox.checked) {
//         subresult.textContent = "your chandru ytuu";
//     }else {
//         subresult.textContent = "your not chandru"
//     }

//     if(visabtn.checked){
//         subresult1.textContent = "your choose is visa";
//     }else if(masterbtn.checked){
//         subresult1.textContent = "your choose is mastercard";
//     }else if(paypalbtn.checked){
//         subresult1.textContent = "your choose is paypal"; 
//     }else {
//         subresult1.textContent = "you are not choose any thing"; 
//     }
// }

//11. ternary operator

// > a shortcut to if{} and else {} statements help to assign a variable based on a condition 
// ex  : condition ? codeiftrue : codeiffalse;

// let age = 21;

// let msg = age <= 18 ? "you are not adult" : "you are adult";
// console.log(msg);


// 12. switch ;

// > can be an efficient replacement to many else if statements

// ex; switch(condition){
//          case condition:
                // code block
                // break
//      }

// let day = 11;

// switch(day) {
//     case 1:
//         console.log("monday");
//         break;
    
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;

//     default :
//         console.log("you are not selected any day");
//         break;
// }

// // 13. string methods
// // > allow you to manipulate and work with text (strings)

// let str1 = "chandru";

// // let str1 = window.prompt();

// console.log(str1);// input string(chandru)

// // .charAt()
// console.log(str1.charAt(1));// h

// // .indexOf()
// console.log(str1.indexOf("a"));// 2

// // .lastIndexOf()
// console.log(str1.lastIndexOf("a"));// 2

// //.length
// console.log(str1.length);// 7

// // .trim()
// let str2 = " chandru T";
// console.log(str2.trim());// chandru T

// // .toUpperCase()
// console.log(str1.toUpperCase());// CHANDRU

// // .toLowerCase()
// console.log(str2.toLowerCase());// chandru t

// // .repeat()
// console.log(str1.repeat(3));// chandruchandruchandru

// // stratswitch
// console.log(str1.startsWith(" "));// false
// console.log(str2.startsWith(" "));// true

// //endswith()
// console.log(str1.endsWith("u"));// true
// console.log(str2.endsWith(" "));// false

// // includes
// console.log(str1.includes(" "));// false
// console.log(str2.includes(" "));// true 

// // replace
// let str3 = "chan dru  T";
// console.log(str3.replaceAll(" ",""));// chandrut

// // padstart
// console.log(str1.padStart(10,"l")); // lllchandru

// // padend
// console.log(str1.padEnd(10, "o")); // chandruooo

// // 14 . string slicing

// // > creating a subtring from a poriton of another string
// // ex : string.slice(start, end);

// const email = "chandru@gmail.com";

// console.log(email.slice(0,email.indexOf("@"))); // chandru
// console.log(email.slice(email.indexOf("@")+1)); // gmail.com

// 15. method chaining
// > calling one method after another in one continuouse line of code

// let username = window.prompt("enter the name:");
 
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);


// 16.logical operator

// > used to combine or manipulate boolean values(true or false)
// ex ; AND = &&, OR = ||, NOT = !

// 17 . === (strict equality operator)
// > compare if values & datatype are equal
// ===, !==

// const PI = 3.14;

// if(PI === "3.14"){
//     console.log("this is Pi") // true
// }else{
//     console.log("this is not pi");
// }

// 18.  LOOPS
// > iterate the piece of code
// for , while, do while, for-in loop

// a) while and do{}while();
// > reapt some code WHILE some condition is true

// while (condition)  
//     {  
//         code to be executed  
//     } 

// let count = 0;

// let name1 ="";

// while(name1 === null || name1 ===""){
//     name1 = window.prompt("enter your name");
//     count++;
//     console.log(count);
//     console.log(`your not type anything`);
// }

// console.log(`hii ${name1}`);

// do{
//     name1 = window.prompt("enter the name:")
// }while(name1 === "" || name1 === null );

// console.log(`hii ${name1}`);

// let loggedIn = false;
// let username1;
// let password;

// while(!loggedIn){
//     username1 = window.prompt("enter your name:");
//     password = window.prompt("enter your password:")
    
//     if(username1 === "chandru" && password === "1234"){
//         loggedIn = true;
//         console.log(`you are loggedin ${username1}`);
//     }else {
//         console.log("invalide credentials! please try again");
//     }
// }

// do{
//     username1 = window.prompt("enter your name:");
//     password = window.prompt("enter your password:")
    
//     if(username1 === "chandru" && password === "1234"){
//         loggedIn = true;
//         console.log(`you are loggedin ${username1}`);
//     }else {
//         console.log("invalide credentials! please try again");
//     }
    
// }while(!loggedIn);


// b. for loop
// > repeat some code a LIMITED amount of times

// for (initialization; condition; increment)  
//     {  
//         code to be executed  
//     }  

// for(let i=0; i<=9; i+=2){
//     console.log(i);
// }

// pass 2.39

// > continue, break, pass --- it is works only for the looping with conditions statements

// for(let i=1; i<=10; i++){
//     if(i==5){
//         continue;
//     }
//     if(i === 10){
//         break;
//     }
//     console.log(i);
// }

// 19. Function

// > a section of resuable code.
// declare code once, use it whenever you want.
// call the function to execute that code.
// adv: code reusability, less coding


// JavaScript Function Syntax:
// function functionName([arg1, arg2, ...argN]){  
//     //code to be executed  
//    }  

// function birthdatwish(){
//     console.log("hello there!");
// }

// birthdatwish();

// // *** JavaScript Function Arguments ---> function name(args){}

// function args(x, y){
//     console.log(`${x} and ${y} are the passed values`);
// }

// args(2,1);

// // return 

// function add(x,y){ // function and args
//     let result = x+y;
//     return result; // return
// }

// let ans = add(1,3); // call
// console.log(ans); // 4

// function valid(email){
//     return email.includes("@") ? true: false;
// }

// console.log(valid("cahndru@2345.com")); // true
// console.log(valid("cahndru2345.com")); // false

// 20. VARIABLE SCOPE

// where a variable is recognized and accessible(LOCAL VS GLOBAL);
 

// 21. ARRAY
// > a variable like structure that can hold more then 1 value
// > an object that represents a collection of similar type of elements

// let fruits = ["apple", "mango", "grapes", "papaya"];
// let name = new Array("chandru", "Dhiinesh", "kiruthik");


// console.log(fruits[0]);// apple
// console.log(name[0]);// chandru
// fruits[4] = "banana"; // index -4 ---> banana\


// // arr0.concat(arr1,arr2,arr3)
// let marray = fruits.concat(name);

// fruits.push("nana");// add at end
// fruits.pop(); //remove last

// marray.reverse();

// marray.sort(); // sort the array

// name.unshift("padiya", "kurnal"); // add at beginning

// for(let fruit of name){
//     console.log(fruit);
// }

// 22. spread operator
// ... allows an iterable such as an array or string to be expanded into seperate elements(unpacks the elements)

// let num = [1, 2 , 3, 4, 5];

// console.log(Math.max(...num));
// console.log(Math.min(...num));

// let name = "chandru";
// let latter = [...name].join("-");
// console.log(latter);

// // with this operator we can combine arrays

// let veg = ["carrot", "celery", "potato"];
// let fruit = ["apple", "graps", "banana"];

// let food = [...veg, ...fruit, "egg", "milk"];
// console.log(food);

// 23. REST PARAMETERS
// > (...rest)---> allow a function work with a variable number of arguments by bundling them into an array
// > spreed = expands an array into separate elements
// > rest = bundles seperate elements into an array


// function combinestr(...strings){
//     return strings.join(" ");
// }

// const fullname = combinestr("t", "chandru", ".");
// console.log(fullname);


// function add(...numbers){
//     let sum = 0;
//     for(number of numbers){
//         sum += number;
//     }

//     return sum;
// }

// console.log(add(1,2,3,4,5));


// function addlist(...Array){
//     let fullarray;
//     fullarray =  Array.concat();
//     return fullarray;
// }

// console.log([1,2,3], ["chandru", "t"]);

// 24. CALLBACK
// > a function that is passed as an argument to another function 
// used to handle asynchronous operations;
// 1. reading a file
// 2. network requests
// 3. Interacting with databases

// ex ; hey , when you're done, call this next.

// sum(display, 3, 0);

// function sum(callback, x, y){
//     let result = x+y;
//     callback(result);
// }

// function display(result){
//     console.log(result);
// } 

// wish(display);

// function wish(callback) {
//     let wish =  "welcome";
//     callback(wish);
// }

// function display(resut) {
//     console.log(resut);
// }

// 25. forEach()
// > method used to iterate over the elements of an array and apply a specified function (callback) to each elements

// ex: array.forEach(callback)
//       element, index, array are provided

// let fruit = ["apple", "orange", "GRAPES", "Banana"];

   
// fruit.forEach(display);


// fruit.forEach(toUpperCase);
// fruit.forEach(display);

// fruit.forEach(toLowerCase);
// fruit.forEach(display);

// fruit.forEach(capitaliz);
// fruit.forEach(display);

// function display(element){
//     console.log(element);
// }

// function toLowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function toUpperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function capitaliz(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1) ;
// }

// 26. .map()
// > accept a callback and applies that function to each element of an array, then return a array
// it is same as .forEach method but it will return array

// const num = [1, 2, 3, 4, 5];

// num.forEach(display);

// const newsqr = num.map(sqr);
// newsqr.forEach(display);

// function display(element) {
//     console.log(element);
// }

// function sqr(element){
//     return Math.pow(element, 2);
// }

// // date formate example

// const dates = ['25/05/2003', '17/10/2003', '18/01/2024'];

// const fomateddate = dates.map(dateformate);
// fomateddate.forEach(display);

// function dateformate(element){
//     const parts = element.split("/");
//     return `${parts[0]}/${parts[1]}/${parts[2]}`
// }

// 27. .filter()
// creates a new array by filtering out elements


// let num = [1, 2, 3, 4, 5];

// let neweven = num.filter(isEven);
// console.log(neweven);

// let newodd = num.filter(isOdd);
// console.log(newodd);

// function isEven(element){
//     return element % 2 === 0 ;
// }

// function isOdd(element){
//     return element % 3 ===0;
// }

// //ex:2 
// const studentAge = [12, 14, 19, 21, 20];

// const newadult = studentAge.filter(isadult);
// console.log(newadult)

// function isadult(element){
//     // if(element >= 18){
//     //     return element;
//     // };
//     return element >= 18;
// }

// // ex:3
// let fruit = ["apple", "orange", "GRAPES", "Banana"];

// const shortWord = fruit.filter(getShortWords);
// console.log(shortWord);

// function getShortWords(element) {
//     return element.length >= 6;
// }


// 28. .reduce()
// > reduce the element of an array to a single value

// //  ex:1 
// const num = [1, 2, 3, 4, 5, 6];

// console.log(num.reduce(sum));

// function sum(accum, element) {
//     return accum + element;
// }

// // ex:2
// console.log(num.reduce(max));
// function max(accum, element) {
//     return Math.max(accum, element);
// }

// // ex:3
// console.log(num.reduce(min));
// function min(accum, element) {
//     return Math.min(accum, element);
// }


// 29. function declaration > define a reuable block of code that performs a specific TextTrackList
//     fucntion expressions > a way to define function as value or variables
 

// function wish(){
//     console.log("hello");
// }

// setTimeout(wish, 3000);

// // ex;1

// const num = [1, 2, 3, 4, 5];

// const cube = num.map(function (element){
//     return Math.pow(element, 2);
// });

// const sqr = num.map(function (element){
//     return Math.pow(element, 3);
// });

// const isEven = num.filter(function (element){
//     return element % 2 === 0;
// });

// const isOdd = num.filter(function (element){
//     return element % 3 === 0;
// });

// const sum = num.reduce(function (accum, element){
//     return accum + element;
// });

// console.log(cube);
// console.log(sqr);
// console.log(isEven);
// console.log(isOdd);
// console.log(sum);

// const hello = function(){
//     console.log("hello");
// }

// setTimeout(function(){
//     return "hello7";
// },5000);


// *** function expression > a way to define function as values or variables
//1, callback in asynchronous operations
// 2. higher-order functions
// 3. event listeners
// 4. closures

// *** 30. arrow functions = a concise way to write function expressions good for simple fuctions that you use only once
// (parameters) => some code


// normal fucntion - declaration

// function hello (){
//     console.log("hello");
// }


// // function expression

// setTimeout(function (){
//     return hello();
// }, 3000);


// const greet = () => console.log("i am chandru");

// greet();


// // ex:1

// const number = [1, 2, 3, 4, 5];

// const sqt = number.map((element) => Math.pow(element, 2));
// console.log(sqt);

// const cube = number.map((element) => Math.pow(element, 3));
// console.log(cube);

// const isEven = number.filter((element) => element%2 === 0);
// console.log(isEven);

// const isOdd = number.filter((element) => element%2 !== 0);
// console.log(isOdd);

// const total = number.reduce((acc, element) => acc+element);
// console.log(total);

// *** 31. object
// a collection of related properties and/or methods can represent real word objects (people, products, places)
// objectName = {key:value, 
//         function()}

// ex:1

// const person = {
//     name: "chandru",
//     deb: "B.tech",
//     num: 123,
//     isStudent: true,
//     great: (name) => console.log(`hello i am ${name}`)
// }

// person.great(person.name);

// ex: 2

// const Car = {
//     name: "BMW",
//     price: 1400,
//     maseIn: () => console.log("india")
// }

// console.log(Car.name);
// Car.maseIn();



// *** 32. this
// reference to the object where this is used -> the object depends on the immediate context)
// person.name = this.name

// ex:1

// const person = {
//     name: "chandru",
//     deb: "AI&DS",
//     details: () => console.log(`i am ${this.deb}`),// ---> this arrow tergets to the window obj
//     det: function(){console.log(`this is ${this.name}`)}
// }

// person.det();
// person.details();



// 32. CONSTRUCTOR
// special method for defining the properties and methods of objects

// ex:1

// function Car(make, model, year, price){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.price = price,
//     this.fun = function(){console.log(`you dirve the ${model}`)}
// }

// const car1 = new Car('tata', 'safari', 2021, 2000000);

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.price);
// car1.fun();



// 33.  CLASS
// (ES6 feature) provides a more structure and cleaner way to work with objects compared to traditional constructor functions
// ex: static keyword, encapsulation, inheritance, apstraction, polymorpism

// // ex: 1
// class Products{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`product name : ${this.name}`);
//         console.log(`product proce : $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(tax){
//         return this.price + (this.price * tax);
//     }
// }

// const tax = 0.05;
// const prod = new Products("shirt", 20.0000);

// prod.displayProduct();
// const total = prod.calculateTotal(tax).toFixed(2);
// console.log(`the total price of the product $${total}`);

// // ex: 2
// class Car{
//     constructor(name, model, price){
//         this.name = name;
//         this.model = model;
//         this.price = price;
//     }

//     displayCar(){
//         console.log(`name : ${this.name} model: ${this.model} price: ${this.price}`);
//     }
// }

// const car = new Car("tata", "safari", 2000000);

// car.displayCar();



// 34.static
// keyword that defines properties or methods that belong to a class itself rether than the object created from that class(class owns anything static, not the objects)

// class User{
//     static userCount = 0;

//     constructor(name){
//         this.name = name;
//         User.userCount ++;
//     }
// }

// const user = new User("chan");
// ;
// // console.log(user1.userCount);
// console.log(User.userCount);// 1
// console.log(User); // User's blueprint
// console.log(user); // user{name: 'chan'}


// class Users{
//     static usersCount = 0;
    
//     constructor(name){
//         this.name = name;
//         Users.usersCount ++;
//     }
    
//     sayHello(){
//         console.log(`hello ${this.name}`);
//     }
    
//     static getUsercount(){
//         console.log(`online users ${Users.usersCount}`);
//     }
// }

// const user1 = new Users("chan");
// const user2 = new Users("deshva");


// console.log(Users);
// console.log(user1.sayHello());
// user1.sayHello();
// user2.sayHello();
// Users.getUsercount();
// console.log(user2);
// console.log(Users.usersCount);
// console.log(Users.getUsercount);

// class User{
//     static onlineUser=0;

//     constructor(name){
//         this.name = name;
//         User.onlineUser ++;
//     }

//     displayUser(){
//         console.log(this.name);
//     }

//     static OnlineCount(){
//         console.log(`online : ${User.onlineUser}`);
//     }

// }

// const user1 = new User("Chithra");
// const user2 = new User("Priya");
// const user3 = new User("Chandru");

// user1.displayUser();
// user2.displayUser();
// user3.displayUser();

// User.OnlineCount();



// 35. inheritance
// allows a new class to inherit propeties and methods from an existing class (parent -> child) helps with code reusability


// class Animal{
//     // alive = true;
//     static alive = true;

//     static eat() {
//         console.log(`${this.name} is eating`);
//     }

//     sleep() {
//         console.log(`${this.name} is not sleeping`);
//     }
// }

// class cat extends Animal{
//     name = "cat";
// }

// class dog extends Animal{
//     name = "dog";
// }

// const cat1 = new cat();
// const cat2 = new cat();
// cat.alive = false;

// console.log(cat1.name);
// console.log(cat.alive);
// cat.eat();
// cat1.sleep();

// console.log(cat2.name);
// console.log(cat.alive);
// cat.eat();
// cat2.sleep();

// const dog1 = new dog();
// // dog.alive = false;

// console.log(dog1.name);
// console.log(dog.alive);
// dog.eat();
// dog1.sleep();



// 36. super
// keyword is used in classes to call the constructor or access the properties and methods of a (superclass)

// this = this object
// super = the parent

// ex: 1

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`the speed of ${speed} kmph`);
//     }
// }

// class cat extends Animal {
//     constructor(name, age, runspeed){
//         super(name, age);
//         // this.name = name;
//         // this.age = age;
//         this.runspeed = runspeed;
//     }

//     run(){
//         console.log(`${this.name} can runs`);
//         super.move(this.runspeed);
//     }
// }

// class fish extends Animal {
//     constructor(name, age, swimspeed){
//         super(name, age);
//         // this.name = name;
//         // this.age = age;
//         this.swimspeed = swimspeed;
//     }

//     swim(){
//         console.log(`${this.name} can swim`);
//         super.move(this.swimspeed);
//     }
// }
// class crow extends Animal {
//     constructor(name, age, flyspeed){
//         super(name, age);
//         // this.name = name;
//         // this.age = age;
//         this.flyspeed = flyspeed;
//     }

//     fly(){
//         console.log(`${this.name} can fly`);
//         super.move(this.flyspeed);
//     }
// }

// const cat1 = new cat ('pusycat', 2, 10);
// const fish1 = new fish('goldfish', 1, 20);
// const crow1 = new crow('karuppu kaka', 1, 30);

// console.log(cat1.name);
// console.log(cat1.age);
// console.log(cat1.runspeed);
// cat1.run();

// console.log(fish1.name);
// console.log(fish1.age);
// console.log(fish1.swimspeed);
// fish1.swim();

// console.log(crow1.name);
// console.log(crow1.age);
// console.log(crow1.flyspeed);
// crow1.fly();



//37. getter = special method that make a property readable
// setter = special method that makes a property writeable
// validate and modify a value when reading/writing a property


// _somecode ---> to indicate this is a private property

// ex: 1

// class Rectangle{

//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }

//     set height(NewHeight){
//         if(NewHeight > 0){
//             this._height = NewHeight;
//         }else{
//             console.error("enter valid height");
//         }
//     }

//     set width(NewWidth){
//         if(NewWidth > 0){
//             this._width = NewWidth;
//         }else{
//             console.error("enter valid width");
//         }
//     }

//     get height(){
//         return `${this._height.toFixed(1)} cm`;
//     }

//     get width(){
//         return `${this._width.toFixed(1)} cm`;
//     }
// }

// const obj1 = new Rectangle(-100, "chan");
// const obj2 = new Rectangle(32, 12);

// obj1._height=1,
// obj1.width=1,

// console.log(obj2.height, obj2.width);
// console.log(obj1.height, obj1.width);
// console.log(obj1._height, obj1._width);

// console.log(obj2._height);


// pass :5:55

// recall

// class User{
//     constructor(name, age, mobileNumber){
//         this.name = name;
//         this.age = age;
//         this.mobileNumber = mobileNumber;
//     }

//     set name(newName){
//         // if(! (newName >= 0 ) && !(newName <= 0)){
//         //     if(newName.length < 1){
//         //         console.error("name doesn't single latter");
//         //     }else{
//         //         this._name = newName;
//         //     }
//         // }else{
//         //     console.error("name doesn't a number");
//         // }
        
//         if(typeof newName === "string" && newName.length > 1){
//             this._name = newName;
//         }else{
//             console.error("name doesn't single latter or must be latter");
//         }
//     }

//     set age(newAge){
//         if(newAge <= 0){
//             console.error("age must above 0");
//         }else{
//             this._age = newAge;
//         }
//     }

//     set mobileNumber(newMobileNumber){
//         if(String(newMobileNumber).length < 10){
//             console.error("mobile number must 10 digits");
//         }else{
//             this._mobileNumber = newMobileNumber;
//         }
//     }

//     get name(){
//         return `name : ${this._name}`;
//     }

//     get age(){
//         return `age : ${this._age}`;
//     }

//     get mobileNumber(){
//         return `mobile.no : ${this._mobileNumber}`;
//     }
// }

// const uobj1 = new User("chandru", 21, 1234567890 );
// console.log(uobj1.name);
// console.log(uobj1.age);
// console.log(uobj1.mobileNumber);
// console.log(uobj1);

// const uobj2 = new User(123, 0, 123);
// const uobj3 = new User(-123, -9, 123);
// const uobj4 = new User("Deshva", 1, 9876543210);



// pass : 6:1
// 38. destructuring = extract values from arrays and objects, then assign them to variables in a covenient way
// [] = to perform array destructuring
// {} = to perform object destructuring


// A = array 
// ex: 1 ---> variable value swap

// let a = 1;
// let b = 2;

// console.log(a,b);

// [a, b] = [b, a];
// console.log(a,b);

// // ex: 2 ---> array value swap

// const color = ["red", "green", "blue", "white", "black"];

// console.log(color);

// [color[0], color[2]] = [color[2], color[0]];
// console.log(color);

// // ex: 3 ---> assign array element to variables
// const [firstcolor, seccolor, thirdcolor, ...rem] = color;
// console.log(firstcolor);
// console.log(seccolor);
// console.log(thirdcolor);
// console.log(rem);


// // B = object

// ex:1 ---> extract values from objects

// const person1 = {
//     firstName :"chandru",
//     age : 21,
//     student : "kiot"
// }

// const person2 = {
//     firstName :"Deshva",
//     age : 1,
// }

// const {firstName, age, student} = person1;
// // console.log(firstName); // chandru
// // console.log(age); // 21
// // console.log(student); // kiot

// // const {firstName, age, student="baby"} = person2;
// console.log(firstName); // Deshva
// console.log(age); // 1
// console.log(student); // babay

// ex:2 --> destructure in function parameters

// function display({firstName, age, student="baby"}){
//     console.log(`name :${firstName} age:${age} student:${student}`);
// }

// display(person1); //name :chandru age:21 student:kiot
// display(person2); //name :Deshva age:1 student:baby



// 39. Nested object = object inside of other objects.

// allows you to represent more complex data structures
// child object is enclosed by a parent object

// ex:1 person{address{}, contactInfo{}}
// ex:2 shoppingCart{keyboard{}, mouse{}}

// // ex:1
// const person = {
//     name : "chandru",
//     age : 21,
//     adree : {
//         street : "mel street",
//         doorNo : "1/421-b"
//     }
// }

// console.log(person.name, person.age)
// console.log(person.adree.doorNo, person.adree.street)

// // ex:2

// class user{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }

//     dispaly(){
//         console.log(`${this.name} ${this.age} ${this.address.dooeNo} ${this.address.street} ${this.address.city}`)
//     }
// }

// class Address{
//     constructor(dooeNo, street, city){
//         this.dooeNo = dooeNo;
//         this.street = street;
//         this.city = city;
//     }
// }

// const user1 = new user("chan", 21, "1/421-b", "mel street", "salem");
// user1.dispaly();


// let cls = [1, 2, 3, 4];

// for(let clss in cls){
//     console.log(cls[clss]);
// }

// Pass: 6:22



// 40.array of objects

// ex: 1 [{}, {}, {}]


// let fruits = [{name: "apple", clr:"red", prince: 100},
//             {name: "orange", clr:"orenge", prince: 90}, 
//             {name: "banana", clr:"yellow", prince: 10}
//                 ]

// // console.log(fruits[0].name);

// // fruits.push({name: "graps", clr: "brown", prince: 70});
// // console.log(fruits[3].name);

// // console.log(fruits);
// // fruits.splice(1,3);
// // console.log(fruits);

// // foreach()
// fruits.forEach(fruit => console.log(fruit.name, fruit.clr, fruit.prince));

// // map()

// const fruitName = fruits.map(fruit => fruit.name);
// console.log(fruitName);

// // filter()

// const filt = fruits.filter(fruit => fruit.clr === "red");
// console.log(filt);

// // reduce()

// const maxprice = fruits.reduce((max, fruit) => fruit.prince > max.prince ? fruit: max );
// console.log(maxprice);



// 41.sort() = method used to sort elements of an array in place.

// sorts elements as strings in lexicographic order , not lexicographic = (alphabet + number + symbols) as string

// let str = ['apple', 'zeebra', 'owl', 'cow', 'bee']

// console.log(str.sort()); // ['apple', 'bee', 'cow', 'owl', 'zeebra']

// let num = [10, 5, 6, 9, 2, 5, 1]
// console.log(num.sort()); //  [1, 10, 2, 5, 5, 6, 9]

// console.log(num.sort((a, b) => a - b)); // [1, 2, 5, 5, 6, 9, 10]
// console.log(num.sort((a, b) => b - a)); // [10, 9, 6, 5, 5, 2, 1]

// // objects

// let people = [{name:"chandru", age:21, cgpa:8.3},
//                 {name:"Dhinesh", age:22, cgpa:8.9},
//                 {name:"kruthik", age:20, cgpa:8.1}]

// console.log(people.sort((a, b) => a.age - b.age)); // 1 - 10
// console.log(people.sort((a, b) => b.age - a.age)); // 10 - 1

// console.log(people.sort((a, b) => b.name - a.name)); //{name: 'Dhinesh', age: 22, cgpa: 8.9}{name: 'chandru', age: 21, cgpa: 8.3}{name: 'kruthik', age: 20, cgpa: 8.1}
// console.log(people.sort((a, b) => a.name.localeCompare(b.name)));// a- z

// console.log(people.sort((a, b) => b.name.localeCompare(a.name)));// z - a



// pass : 6:36
// 42. suffle 

// let arr = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];

// arr.sort(() => Math.random() - 0.5);
// console.log(arr);

// // fisher-yates algo
// shuffle(arr);
// function shuffle(arr){
//     for (let i= arr.length-1; i>0; i--){
//         const ran = Math.floor (Math.random() * (i+1));

//         [arr[i], arr[ran]] = [arr[ran], arr[i]];
//     }
// }
// console.log(arr);



// 43. date objects =  objects that contains value represent dates and times these date objects can be chaged and formatted
// pass 6.40

const date = new Date();
console.log(date);


// date (year, month, day, hou, minute, second, ms)
const date1 = new Date(2003, 4, 25, 6, 30, 50, 30);
console.log(date1);

const date2 = new Date("2003-01-02T12:00:00");
console.log(date2);

const date3 = new Date(1700000000000);
console.log(date3);


const date4 = new Date();

console.log(date4.getFullYear());
console.log(date4.getMonth());
console.log(date4.getDate());
console.log(date4.getHours());
console.log(date4.getMinutes());
console.log(date4.getSeconds());
console.log(date4.getMilliseconds());
console.log(date4.getTime());
console.log(date4.getTimezoneOffset());
console.log(date4.getDay());


const date6 = new Date();
date6.setFullYear(2003);
date6.setMonth(4);
date6.setDate(25);
date6.setHours(6);
date6.setMinutes(30);
date6.setSeconds(30);
console.log(date6);


const date1com = new Date("2003-4-25"); 
const date2com = new Date("2003-9-17"); 
console.log(date1com);
console.log(date2com);

if(date1com < date2com){
    console.log("young");
}



// pass: 6;48
