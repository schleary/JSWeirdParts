// you can add properties, but be careful not to override existing ones
String.prototype.isLengthGreaterThan = function(limit) {
	// 'this' is pointing at your string object
    return this.length > limit;  
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;   
}

3.isPostive(3); // will return an error, even though a string might work in something similar, but
a.isPositive() // would work