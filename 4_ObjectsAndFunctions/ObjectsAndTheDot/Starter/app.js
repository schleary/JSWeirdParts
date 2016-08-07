var person = new Object();

person["firstname"] = "Tony"; //primitive string. A property
person["lastname"] = "Alicia";

var firstnameProperty = "firstname"

console.log(person);

//These two will pring the same thing
console.log(person[firstnameProperty]);
console.log(person.firstname);

// [] = Computed Member Access
// . = Member Access (computed left-to-right)

person.address = new Object();
person.address.street = "11 Main st.";
person.address.city = "NY";


//Does the same thing:
console.log(person.address.street);
console.log(person["address"]["state"]); //not preferred