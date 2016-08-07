var person = {};

console.log(person); //Wil just log Object

// Can set many properties at once
var person = { firstname: 'Tony', lastname: 'Alicia'};

// Same as:
var person = { 
	firstname: 'Tony', 
	lastname: 'Alicia'
};

//can add on:
var person = { 
	firstname: 'Tony', 
	lastname: 'Alicia'. 
	address: {
		street: '123 Main', 
		city: 'NY'
	}
};

function greet(person) {
	console.log('Hi ' + person.firstname);
}

greet(Tony);

//Can call function and create obj on fly:
greet({
	firstname: 'Mary', 
	lastname: 'Joe'
})

//Can also do weird shit:
Tony.address2 = {
	street: '123 Fake st.'
}