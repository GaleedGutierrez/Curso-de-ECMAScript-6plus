const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.';

const replacedString = string.replace('JavaScript', 'Python');
// console.log(replacedString);

const replacedString2 = string.replaceAll('JavaScript', 'Python');
// console.log(replacedString2);

// class Message {
//     #show (val) {
//         console.log(val);
//     }

//     get #add(val) {
//         ...
//     }

//     set #see(val) {
//         ...
//     }
// }

// const message = new Message();
// message.show('Hola.');

// const promise1 = new Promise((resolve, reject) => reject('1'));
// const promise2 = new Promise((resolve, reject) => resolve('2'));
// const promise3 = new Promise((resolve, reject) => resolve('3'));

// Promise.any([promise1, promise2, promise3])
//     .then(response => console.log(response));

class anyClass {
    constructor () {
        this.ref = new WeakRef(element);
    }
}

let isTrue = true;
const isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);

isTrue = undefined;
console.log(isTrue ??= isFalse);
