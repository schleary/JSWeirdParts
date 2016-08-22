function sayHiLater() {

	var greeting = 'Hi'; // has closure for this variable

	setTimeout(function() { // function inside a function
		console.log(greeting);
	}, 3000); //callback - do it when it's done working
}

//jQuery uses function expressions and first-class functions
$("button").click(function() {

});


function tellMeWhenDone(callback) {
	var a = 1000;
	var b = 2000;

	callback();
}


// Callback function
// I call you, and then you call the funciton that I gave you
tellMeWhenDone(function() {
	alert('Done');
});

tellMeWhenDone(function() {
	alert('Finished');
});