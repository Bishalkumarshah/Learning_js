// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// 'for of' is direct excess the value of array
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//  Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// it not work because it is not iterable

// for (const [key, value] of myObject) {
//     console.log(key, ':-' , value);
// }
