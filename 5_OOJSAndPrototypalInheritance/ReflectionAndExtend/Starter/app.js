var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// Never do!
john.__proto__ = person;


// Reflection:
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}
// returns:
 // firstname: 'Default', = true (has own property)
 // does not have own property, but would pring otherwise
 // lastname: 'Default',  = true (own property)
 // getFullName: function() {
 //     return this.firstname + ' ' + this.lastname;  
 // }



var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;   
    }
}

var jim = {
    getFirstName: function() {
        return firstname;   
    }
}

// underscore library 
// composes/combines objects and adds them directly to john object
// This does not put it on the prototype chain.
_.extend(john, jane, jim); // composistion

console.log(john);




