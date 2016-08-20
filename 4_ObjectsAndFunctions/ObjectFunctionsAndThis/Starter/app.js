console.log(this); //'this  (globalwindow obj) is immediately available

function a() {
	console.log(this);
}

a(); //'this' is global window obj


function b() {
	console.log(this);
	this.newVariable = 'hello';
}

b(); //still 'this' even though 3 execution contexts, all pointig to same global 

//assumes I'm asking for the variable on the global obj
// no 'this' or 'b' necessary when global 
// (but be careful. can crash into other things)
console.log(newVariable); 



// When a value is a primitive, it's called a property
// When a value is a function, it's called a method
var c = {
	name: 'The c object';
	log: function() {

		this.name = 'Updated c object'; //changes name
		console.log(this); //'this' is attached to object: c


		//bug in js?
		var setName = function(newName) {
			// this points to the global object for some damn reason
			this.name = newName;
		}
		setName('Updated again!');
		console.log(this); // doesn't affect the c object name
	}
}

c.log();


var c = {
	name: 'The c object';
	log: function() {

		// fixes bug. Now use self wherever you'd use this
		var self = this; //c  can also use 'that' or let keyword

		self.name = 'Updated c object'; //changes name
		console.log(self); //'this' is attached to object: c


		//bug in js with internal functions using 'this'
		var setName = function(newName) {
			// now points to c
			self.name = newName;
		}
		setName('Updated again!');
		console.log(self); // now points to c
	}
}

c.log();


