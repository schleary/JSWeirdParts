function makeGreeting(language) { //language will trap or be collected in the closure

	return function(firstname, lastname) {
		if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);   
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);   
        }
        
	}
}

// these will point to two different spots in mem
// because they have two separate exe contexts
var greetEnglish = makeGreeting('en'); // one closure inside the result of this
var greetSpanish = makeGreeting('es'); // another closure inside the result of this

// can't use language down here, language is however, available in the greetX function
greetEnglish('john', 'doe'); // Hello John Doe
greetSpanish('john', 'doe'); // Hola John Doe

// every time you call a function, you get a new exe context
// that context's variable has a new memory space

// This will error. Language no longer available.
console.log('Holly: ' + language + ' Holly');