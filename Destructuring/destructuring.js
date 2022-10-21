const user = {
    name: 'Pasha',
    study: true,
    city: 'Prague',
    age: 25,
    hobbys: {
        sport: 'football',
        game: 'wow'
    }
};

// let conuter = 0;
// for (let key in user) {
//     if (typeof(user[key]) === 'object') {
//         for (let i in user[key]) {
//             console.log(`Property ${i} has value ${user[key][i]}`);
//         }
//     }   else {console.log(`Property ${key} has value ${user[key]}`);
//     }
// } 

// for (let key in user) {
//     conuter++;
// }
// console.log(conuter);

// delete user.name;

// console.log(user);

// for (let key in user) {
//     console.log(`Property ${key} has value ${user[key]}`);
// }

// for (let key in user) {
//     if (typeof(user[key]) === 'object') {
//         for (let i in user[key]) {
//             console.log(`Property ${i} has value ${user[key][i]}`);
//         }
//     } else console.log(`Property ${key} has value ${user[key]}`);
// }


let human = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
};

console.log(Object.keys(human).length);
console.log(Object.keys(user).length);