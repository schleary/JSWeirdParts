var a;

// doesn't return a value
if (a === 3) {

}

// function statement; doesn't return a value:
function greet() {
	console.log('hi');
}

// function expression; returns a value:
// its spot in memory will return a function OBJECT:
var anonGreet = function() {
	console.log('hi');
}
// This is also an anonymous function. 
// It doesn't have a name, but it is set to a variable
//will run the code
anonGreet(); 

// You CAN give it a name, but it's kind of wasteful


// If you put them in a different order, re: hoisting:
anonGreet(); 
var anonGreet = function() {
	console.log('hi');
}

// It will give an uncaught error. Undefined.
//It tries to invoke it before it's defined.

// FUNCTION EXPRESSIONS AREN'T HOISTED



function log(a) {
	
	// The a property will no be set to the function. 
	// you can now call the aboe function like so:
	a();
}

//will log 3
log(3);

//the function will be passed to the above function 
log(function() {
	console.log('hi');
});

