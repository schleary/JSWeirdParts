var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

var logName = function(lang1, lang2) {
	console.log('Logged' + this.getFullName()); //will fail because 'this' is pointing to the global object
}

// Not invoking the function logName
// Those 3 methods available to all function objects
// pass the thing that you want to be 'this' when it runs
// now, whenever it's run and exe contest is created, 
// it decides that 'this' is whatever was passed to the bind object
var logPersonName = logName.bind(person) //calling a method of the object
//does not call the function; just copies it

logPersonName(); //Now 'this' IS person ^^




//OR, you can create it on the fly:
var logName = function(lang1, lang2) {
	console.log('Logged' + this.getFullName()); // now, is like person.getFullName
	console.log('Arguments: ' + lang1 + lang2); 


}.bind(person);

logPersonName(); 


// calls the function/invokes it
// like any other function call, but let's you control what 'this' is
// unlike bind, which copies the function, call actually executes it
// you can also pass it other arguments/parameters:
logName.call(person, 'en', 'es')

// works just like call, but wants an array for the input parameters
logName.apply(person ['en', 'es'])





//function borrowing
var person2 = {
	firstname = 'Jane',
	lastname = 'Doe'
}

// calls the function on top with the object above
// you've bowwored a function with apply (can also use call)
person.getFullName.apply(person2);



//function currying
function multiply(a * b) {
	return a*b;
}

// the first variable will always be 2 instead of whatever
// now you can use this method to multiply stuff by two
// sets a permanent value for first param, kind of doing away with it
var multipleByTwo = multiply.bind(this, 2); //bind does not execute. Only copies and gives params

// can call that new function
// the param you pass will be the second param
multipleByTwo(4);














