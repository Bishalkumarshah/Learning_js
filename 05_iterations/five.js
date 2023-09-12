const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val) {
//         console.log(val);
// })

// coding.forEach( (items) => {
//        console.log(items);
// } )

// function printMe(items){
//     console.log(items);
// }

// coding.forEach(printMe)

// coding.forEach( (items, index, arr)=>{
//      console.log(items, index, arr);
// } )

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName: "JS"
    },

    {
        languageName : "Java",
        languageFileName: "Java"
    },

    {
        languageName : "Python",
        languageFileName: "Py"
    }
]

myCoding.forEach( (items) =>{
    console.log(items.languageName);
} )