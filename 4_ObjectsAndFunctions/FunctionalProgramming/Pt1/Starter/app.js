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