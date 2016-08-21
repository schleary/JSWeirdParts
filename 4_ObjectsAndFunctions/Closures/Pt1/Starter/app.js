//function that returns a  function that you can invoke again
function greet(whatToSay) {
	return funtion(name) {
		cosole.log(whatToSay + ' ' + name)
	}
}

//invoking a function that returns a function so you can invoke the function that was returned
greet('Hi')('Tony'); // new execution context. returns a new obj/func & that exe contest pops off the stack
// at the moment the exe context pops off, the x is still sitting there in memory
// It creates a new exe context
// When the JS engine sees the whatToSay variable, it goes up the scope chain
// even though greet popped off the stack, any reference created in side of it is still in memory
// there's still a reference to the variable in the outer global env
// execution context has CLOSED in it's ouuter varibales - this is called a closure
// scope remains intact. Will always have access to the variables it should


// now sayHi is a function
var sayHi = greet('Hi')('Tony'); //logs Hi Tony

// Q. How does this return the whatToSay, which is the 'Hi'?
// A. Closures.




