const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
     // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "cpp"]

// 'for in' is not direct excess the value of array
for (const key in programming) {
     // console.log(programming[key]);
}


// const map = new Map()
// map.set('IN', "India")
// map.set('US', "United States of America")
// map.set('Fr', "France")

// it not work because it is not iterable

// for (const key in map) {
//      console.log(map);
// }