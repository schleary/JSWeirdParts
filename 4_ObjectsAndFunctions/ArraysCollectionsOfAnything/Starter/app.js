car arr = new Array();

// or Array literal syntax:
var arr = [1, 2, 3];


// JS arrays are dynamically typed
var arr = [
	1, 
	false, 
	{
		name: 'Tony',
		address: '111 main st'
	}, 
	function(name) {
		var greeting = 'hello'
		console.log(greeting + name);
	}, 
	"hello"
]

console.log(arr);
// returns a number, function, obj, string

//to call the function AND gie it the name variable:
arr[3]([2].name);
