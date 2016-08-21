// Function Statement - puts in memory, doesn't execute yet.
function greet(name) {
	console.log('Hello' + name);
}

//
greet();


// Function Expression - isn't put into memory until executed
var greetFunc = function(name) {
	console.log('Hello' + name);
}

greetFunc('John');



//or set valus & 
// set function at point you create it
//This is 
// Using an Immediately Invoked Function (IIFE)
var greetFunc = function(name) {
	console.log('Hello' + name);
}('John'); // holds the string and not the function
// So you can't invoke the function elsewhere
greetFunc('Tim'); // Will error out





3; // code compiles

{
	name: 'Holly'; // code compiles
}

// expects a function statement with a name. can't be anonymous
function(name) {
	return ('Hello' + name); // code does not compile
}

// make it so the first character isn't an f for function to trick it
// for when you just want the function to sit there and not use it
// wrap with parentheses to trick the syntax parser
// JS knows that anything in parens is an expression
// This is just executing code on the fly
(function(name) {
    
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
}('Lolly')); // IIFE


(function(name) {
    
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
})('Lolly'); // You can also invoke outside the parentheses



















