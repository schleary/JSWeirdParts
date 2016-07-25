function greet(name) {
	console.log(name);
	console.log('Hello' + name);
}

greet('Tony');

// This will just print out undefined AND
// Then say 'Hello undefined' because it coerces it.
greet();

//But

function greet(name) {
	name = name || '<Your name here>'
	console.log('Hello' + name);
}
// || is run first, before =. 

greet('Tony'); // Hello Tony
greet() // Hello <Your name here>


undefined || 'hello'
//'hello'

'hi' || 'hello'
// 'hi' returns first

0 || 1
//undefined

"" || hello
//hello