// by value
var a = 3;
var b;

b = a; //(primitive types, so different places in memory)

// doesn't affect a because it is a different place in memory
a = 2


// by reference (all objects, including funcitons)
var c = { greeting: 'hi' };
var d;

d = c; //pointing to the same spot in memory

c.greeting = 'hello'; //mutates it. Now both are changed


//by reference (even as parameters)
function changeGreeting(obj) {
	obj.greeting = 'Hola'; //mutate
}

changeGreeting(d); //now c and d are both hola



//equals operator sets up new memory space (new address)
c = { greeting: 'howdy' }; // = obj makes it point to a different spot in memory

// c is now howdy
// but d is still hola
