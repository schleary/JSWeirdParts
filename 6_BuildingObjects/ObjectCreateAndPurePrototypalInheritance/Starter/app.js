// polyfill - if Object.create isn't in the browser, add your own
// If it doesn't exist, it will return undefined
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname; // you have to remember to use 'this', or it looks in global level, where it doesn't exist

    }
}

// creates an emppty object, w/ prototype pointing to whatever you passed in
// you have to override those values if you want to
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);

// This is a newer way to do this