var objectLiteral = {
	firstname: 'Mary', 
	isProgrammer: true
}

console.log(objectLiteral);

// Can use xml, but closing tags waste bandwidth

//JSON LOOKS like object literal syntax

// JSON vs Obj Literal
// They HAVE to be wrapped in quotes in JSON
// JSON is a subset of JS literal notation

console.log(JSON.stringify(ObjectLiteral));

var jsonValue = JSON.parse('{"firstname": "Mary", "isProgrammer": true }');

console.log(jsonValue);