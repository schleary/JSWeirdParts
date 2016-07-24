var a = 'Hello World!';

function b() {
    console.log('called b!');
}

// If you call 
// b();
// and a;
// youd expect to see:
// 'called b' and
// 'hello world!'


// but, if you order like:

b();
console.log(a);

// it gives you:
// 'called b' and 
// undefined

// if a is never defined later, you'll get an exception

// behaves more like:
var a;
// not:
var a = 'hello world';


//   - Functions in entirety get placed in memory space

//   - Valiarbles are set in memory, but do not have a valie set in memory yet. Will have a placeholder called undefined (as if not set yet).

  
// All variables are initially set to undefined

// Hoisting is tricky to use. You may not get the value you were expecting.

// BEST to actually set variables on top to avoid that trap:

var a = 'Hello World!';

function b() {
    console.log('called b!');
}

b();
console.log(a);

