const array = [1, 2, 3, [1, 2, 3,[1, 2, 3]]];
// console.log(array.flat(2))

const array2 = [1, 2, 3, 4, 5];
// console.log(array2.flatMap(value => [value, value * 2]));

const hello = '         Hello World';
// console.log(hello);
// console.log(hello.trimStart());

const hello2 = 'Hello World         ';
// console.log(hello2);
// console.log(hello2.trimEnd());

const entries = [['name', 'Galeed'], ['age', 21]];
// console.log(Object.fromEntries(entries));

const mySymbol = 'My Symbol';
const symbol = Symbol(mySymbol);
console.log(symbol.description);