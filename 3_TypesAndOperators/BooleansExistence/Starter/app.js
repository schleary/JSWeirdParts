var a;

// goes to internet and looks for a value

if (a) {
	console.log('Something is there.');
}

// if a is in any way nothing, it will fail

// but, if you do:

if (a || a === 0) {
	console.log('Something is there');
}

// 0 will be not be coerced for ===, so it will be true