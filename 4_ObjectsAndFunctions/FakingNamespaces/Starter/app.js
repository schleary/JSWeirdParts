var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);

//Hola will log because it comes first

// What if they're created in separate files?
// can prevent collistion by creating object that is a container

var english = {};
var spanish = {};

english.greet = 'Hello';
spanish.greet = 'Hola';

console.log(english);

//will give undefined error because of left-to-right 
//and can't find greetings

english.greetings.greet = 'Hello';

//can't create on the fly. Must:

greetings = {};
//or
var english = {
	greetings: {
		greet = 'Hello';
	}
}