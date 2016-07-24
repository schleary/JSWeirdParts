function b() {
	var myVar;
	// undefined
	console.log(myVar);
}

function a() {
	var myVar = 2;
	// 2
	console.log(myVar);
	b();
}

var myVar = 1;
// 1 
consol.log(myVar);
a();
// 1 again
consol.log(myVar);

// What is the value of myVar at every point?

// myVar = 1;
// a();
// myVar = 2;
// b();
// myVar = undefined;

// Every execution has its own variable environment
// This has to do with SCOPE

// Even though myVar is called 3 times, they're distinct. They're unique, and they don't touch each other.