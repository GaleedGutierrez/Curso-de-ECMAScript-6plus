import { hello } from './clasesModulosYGeneradoresModule.mjs'

class Calculator {
    constructor () {
        this.valueA = 0
        this.valueB = 0
    }
    
    sum (a, b) {
        debugger
        let {valueA, valueB} = this
        valueA = a
        valueB = b
        return valueA + valueB
    }
}

const calc = new Calculator()
// console.log(calc.sum(2, 2))

// console.log(hello())

function* helloWorld () {
    if (true) {
        yield 'Hello, '
    }

    if (true) {
        yield 'World.'
    }
}

const generatorHello = helloWorld()

console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)