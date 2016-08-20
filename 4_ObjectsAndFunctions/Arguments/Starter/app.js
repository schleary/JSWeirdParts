function greet (first, last, language) {

	console.log(first);
	console.log(last);
	console.log(language);
}

greet();
//JS is okay if you don't pass the params. Just logs undefined 3 times.


greet('John');
// assumes this is first, the rest are still undefined


// default value/paramenter concept:
function greet (first, last, language) {

	// now will give 'en' unlesss a param is passed
	language = language || 'en';

	console.log(first);
	console.log(last);
	console.log(language);
	// passes all the arguments you've passed
	// will look like:
	// ['john', 'doe']
	console.log(arguments);
}

greet('john', 'doe');


// SPREAD (will be preferred when available):
function greet (first, last, language, ...other) {

	// now will give 'en' unlesss a param is passed
	language = language || 'en';

	console.log(first);
	console.log(last);
	console.log(language);
	// passes all the arguments you've passed
	// will look like:
	// ['john', 'doe']
	console.log(arguments);
}

greet('john', 'doe', 12, 'new', 'other');