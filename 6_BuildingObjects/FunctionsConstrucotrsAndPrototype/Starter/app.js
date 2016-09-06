function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

// prototype property is where the prototype chain points for any objects created using that function used as a constructor
Person.prototype.getFullName = function() {
	return this.firstname + ' ' + this.lastnme;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

// Even though this is added later, it will be found down the prototype chain
Person.prototype.getFormalFullName = function() {
	return this.firstname + ' ' + this.lastnme;
}

// Properties usually sitting in function constructor
// Methods usually sitting on prototype
//Functions are objects and take up memory space
// so adding methods to every object gets its own memory
// so adding it to the prototype creates only one.
// More efficient & better to put on it on the prototype

// So instead of this:
function Person(firstname, lastname) {
    this.getFormalfullName()...   
}

// Use this:
Person.prototype.getFormalFullName = function() {
	return this.firstname + ' ' + this.lastnme;
}