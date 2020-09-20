console.log('Hello World'); //outputs the String to the console in developer tools 
console.error('This is an error'); //outputs the String in error format in console
console.warn('This is an error'); //outputs the String in a warning format in console 

//setting variables (three ways)- var (don't really use this anymore), let, const (let and cosnt brought by ES6)

let age1 = 30;
console.log(age1);//prints out to console 

/*const age2 = 30; 
age2 = 31; 
console.log(age2);

(scripts.js:11 Uncaught TypeError: Assignment to constant variable.) 
Because you can't reassign the value to const as it is a constant variable

*/

//SO when do we use let and when do we use const 
//always use const unless you know you're going to reassign the value 

let score; 
score = 10; 
console.log(score); //can't do this with const

//const score2; <- error because we have to initialize it like below
const score2 = 10;
console.log(score);

//DATA TYPES

/*Primitive data types - they're directly assigned to memory 
String, Numbers, Boolean, null, undefined, Symbol (added in ES6)*/

const name = 'John'; //String 
const age = 30; //Number 
const rating = 4.5; //Number - no technical floats or anything like that 
const isCool = true; //Boolean 
const x = null; //empty

const y = undefined;
let z; //This is also UNDEFINED 

//We can test the types of these inputs in console 
 
console.log(typeof name); //outputs String
console.log(typeof isCool); //outputs Boolean 

console.log(typeof x);// OBJECT is returned but it's actually NULL

//Strings 

const name2 = 'Pulasthi'; //String 
const age2 = 20; //Number 

//Concatenation - old way of doing it

console.log('My name is ' + name + ' and I am ' + age);

//Template Strings/literals

console.log(`My name is ${name2} and I am ${age2}`); //better way do it 

//can assign it to a variable as well 

const hello = `My name is ${name2} and I am ${age2}`;
console.log(hello);

const s = 'Hello World';
console.log(s.length); //if you add parenthesis after length, ie. length(), then it becomes a method.
console.log(s.toUpperCase()); //this uses a method - a function that is associated with an object 
console.log(s.substring(0,5)); //returns a part of a string

console.log(s.substring(0,5).toUpperCase()); //you can chain these onto each other 

//Splitting String into an ARRAY 

console.log(s.split('')); //this splits all the characters in the string into an array of those characters 

const a = 'technology, computers, IT, code';
console.log(a.split(', ')); //this splits the String a into an array where the separation is a comma and space, ie. ', '

//Arrays - variables that hold multiple values called Elements 

const numbers = new Array(1,2,3,4,5);
console.log(numbers); //prints an array containing each number as an element 

//IN JAVASCRIPT you can have MULTIPLE data types in a single array  

const everything = ['apples', 'oranges', 'pears', 10, true];
console.log(everything);

const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits[1]); //accessing one element of the array

fruits[3] = 'grapes'; //this adds an element to the array, but it isn't the best way to do it since you don't know how many values exist in the array 

fruits.push('mangos');//this pushes an element to the end of the array 
fruits.unshift('strawberries');//this adds an element to the start of the array
fruits.pop(); //takes the last element off

console.log(Array.isArray(fruits));//how to check if the component is an array -> gets true or false

console.log(fruits.indexOf('oranges'));//gets the index of the element specified in the array
console.log(fruits);

//OBJECT LITERALS 

const person = {
    firstName : 'John',
    lastName :'Doe',
    age : 30,
    hobbies : ['music', 'movies', 'sports'],
    address: {
        street : '50 Main Street',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);





