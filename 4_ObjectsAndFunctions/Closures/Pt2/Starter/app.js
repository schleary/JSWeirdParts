function buildFunctions() {
	var arr = []; // also called 'free variable,' meaning, outside a function you have access to
	for (var i = 0; i < 3; i++) {
		arr.push(
			function() {
				console.log(i);
			}
		)
	}
	return arr;
}

// returns an array of functions but does not yet invoke them
var fs = buildFunctions();


// This is tricky. What will i be for each of these logs
// These will all log 3, because that's what's left in memory for i
fs[0]();
fs[1]();
fs[2]();




// If you DO want it to output 0, 1, 2 the old way:
function buildFunctions2() {
	var arr = []; 
	for (var i = 0; i < 3; i++) {
		arr.push(
			// you'll have to create a function on the fly and execute it right away
			// you'll have to create a parent execution context to hold the values
			(function(j) { // use parens
				return function() {
					console.log(j); 
				}
				console.log(i);
			}(i));
		)
	}
	return arr;
}

ar fs2 = buildFunctions2();


fs2[0]();
fs2[1]();
fs2[2]();




// If you DO want it to output 0, 1, 2 the new way, you can use 'let' like so:
function buildFunctions2() {
	var arr = []; 
	for (var i = 0; i < 3; i++) {
		let j = i; // let will be a new variable in memory each time
		arr.push(
			function() {
				console.log(j);
			}
		)
	}
	return arr;
}

ar fs2 = buildFunctions2();


fs2[0]();
fs2[1]();
fs2[2]();
