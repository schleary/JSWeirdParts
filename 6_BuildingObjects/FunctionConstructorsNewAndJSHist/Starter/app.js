function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

// uses 'new' keyword
var john = new Person('John', 'Doe');
console.log(john);
// returns Person { firstname: "John", lastname: "Doe"}

// New is an operator
// An empty object is immediately created. 

// Invokes/calls the function
var john = new Person();
// As long as the function doesn't return anything, 
// it will return the Person Object

// Creates a new separate object
var jane = new Person('Jane', 'Doe');
console.log(jane);

// Using new sets 'this' to a new object
// It also returns the object (unless the function has a return value)

// Constructing objects using functions = function constructor