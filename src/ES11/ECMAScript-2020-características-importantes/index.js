const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

// console.log({aBigNumber, anotherBigNumber});

// const promise1 = new Promise((resolve, reject) => reject('reject'));
// const promise2 = new Promise((resolve, reject) => resolve('resolve'));
// const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

// Promise.allSettled([promise1, promise2, promise3])
//     .then(response => console.log(response));

// console.log(window);
// console.log(globalThis);

// const fooo = 'asd' ?? 'default string.';
// console.log(fooo);

const user = {};
console.log(user?.profile?.email);