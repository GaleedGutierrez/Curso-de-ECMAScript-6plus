let lorem = 'LET y CONST, Multilínea, Spread Operator y Desestructuración \n' + 'Otra frase epica que necesitamos.'

let lorem2 = `Otra frase epica que necesitamos.
Ahora es otra frase epica.`

// console.log(lorem)
// console.log(lorem2)

let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}

const { name, age, country } = person;

// console.log(person.name, person.age, person.country)
// console.log({name, age, country})

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']
let education = ['David', ...team1, ...team2]

// console.log(education)

const [oscar, julian, ricardo] = team1
console.log(oscar, julian)