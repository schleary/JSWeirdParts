function logNewPerson() {
	// used in this context, not globally, but you can use globally
	// has to be the first line
	// beware of mixing all js into one file and unknowingly using this throughout
    "use strict"; 
    // you must declare a variable in order to set and use it
    // prevents persom error below
    
    var person2;
    persom2 = {};
    console.log(persom2);
}

var person;
persom = {};
console.log(persom);
logNewPerson();