const name = 'Galeed'
const age = 20
obj = { name: name, age: age }
obj2 = { name, age }

// console.log(obj)
// console.log(obj2)

const names = [
    {
        name: 'Galeed',
        age: 20
    },
    {
        name: 'Yesica',
        age: 27
    }
]

// const listOfNames = names.map(
//     function (item) {
//         console.log(item.name)
//     }
// )

// const listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = ({name, age}) => {console.log(name, age)}

const list = names.map(listOfNames3)

// const listOfNames4 = names => {...}

// const square = sides => sides * sides

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!')
        } else {
            reject('Ups!')
        }
    }
    )
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))