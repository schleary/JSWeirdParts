var arr1 = [1,2,3];
console.log(arr1);


var arr2 =[];
for (var i = 0; i < arr1.length; i++) {
	arr2.push(arr1[1] * 2);
}

console.log(arr2);



// OR:


//  map means take one array, do something to it, and get a new array out of it
function mapForEach(arr, fn) {
	var newArr = [];

	for (var i = 0; i < arr1.length; i++) {
		newArr.push(

			//functional programming
			fn(arr1[i])
		)
	};

	return newArr;
}


var arr1 = [1,2,3];


// pass the work that you want to get done
var arr2 = mapForEach(arr1, function(item) {
	return item * 2;
}); 

console.log(arr2); // [2, 4, 6]



var arr3 = mapForEach(arr1, function(item) {
	return item > 2;
}); 

console.log(arr3); // [false, false, true]



// when you want to override a preset parameter:
var checkPastLimit = function(limiter, item) {
	return item > limiter;
}

// bind creates a copy
// 'this' is whatever this is; 1 is the limiter
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

console.log(arr4);



//but, it's annoying to call bind all the time. 
// can we create a function that passed limiter as ony parameter
// and it gives back a function like something like checkPastLimit.bind(this, 1)
var checkPastLimitSimplified = function(limiter) {
	return function(limiter, item) {
		return item > limiter;
	}.bind(this., limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified);
console.log(arr5); // [false, false, true];








