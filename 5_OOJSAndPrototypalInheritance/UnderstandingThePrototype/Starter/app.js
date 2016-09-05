var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
        // this will be which object called the method
    }
}

ar john = {
    firstname: 'John',
    lastname: 'Doe'
}

// NEVER DO THIS!!!:
// performance problem. can slow down applications dramatically
john.__proto__ = person; //2 underscores on each side
// john now inherits from person
// will look in person if it can't find something from john

console.log(john.getFullName());
console.log(john.firstname); //prototype chain uses john's first

var jane = {
    firstname: 'Jane'   
}

jane.__proto__ = person; // never do
console.log(jane.getFullName());

person.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());