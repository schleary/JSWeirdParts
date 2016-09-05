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

_.extend(john, jane, jim);

console.log(john);




