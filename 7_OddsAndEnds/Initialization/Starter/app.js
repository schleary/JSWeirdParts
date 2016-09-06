var people = [ // array literal brackets

    { // object literal braces

        firstname: 'John', // literal colons (not equals)
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function() {
            return 'Hello!';   
        }
    }
]

console.log(people);