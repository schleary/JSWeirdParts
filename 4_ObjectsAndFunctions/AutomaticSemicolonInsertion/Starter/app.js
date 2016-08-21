function getPerson() {
 
 	// Danger in putting curly brace below return
    return //sees carriage return, so thinks its finished and returns!!!
    {
        firstname: 'Tony'
    }
    
}

// prints undefined
console.log(getPerson());




// To fix: 
function getPerson() {
 
    return { // PUt carriage here always to have habit and avoid that problem
        firstname: 'Tony'
    }
    
}