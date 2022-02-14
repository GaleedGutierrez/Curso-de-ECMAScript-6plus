// Before ES6

function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log({name, age, country})
}

// ES6

function newFunction2
(
    name = 'Oscar', 
    age = 32, 
    country = 'MX'
) 
{
    console.log({name, age, country})
}

// newFunction2()
// newFunction2('Ricardo', 22, 'CO')

const hello = 'Hello'
const world = 'World'
const epicPhrase = hello + ' ' +world
console.log(epicPhrase)
const epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)