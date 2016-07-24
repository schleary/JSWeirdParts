// sits lexically at the global environment
// Outer environment reference is also global
function b() {
	// 1
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

// What will we see first when we run this code?
1;


// Outer reference is where it is physically sitting.
-----

function a() {

	// Now the lexical environment is no longer at the global level
	// No b at global execution context
	// sitting lexically at a
	function b() {
		// Now myVar is 2;
		console.log(myVar);
	}

	var myVar = 2;
	b();
}

var myVar = 1;
a();

// Where something sits physically, lexically, will help you figure out where it is inside the scope chain


-----

function a() {

	function b() {
		// Now myVar is 1 again. It'll go all the way out to find it.;
		console.log(myVar);
	}

	b();
}

var myVar = 1;
a();