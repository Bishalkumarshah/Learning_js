

function sayMyName() {
    console.log("B");
console.log("I");
console.log("S");
console.log("H");
console.log("A");
console.log("L");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    //OR
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);



function loginUserMassage(username = "san"){
    if(username === undefined) {  
        // console.log("Plase enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("Bishal kumar shah"));
// console.log(loginUserMassage("Bishal kumar shah"));


function calculateCardPrice(...num1){
  return num1
}

console.log(calculateCardPrice(200, 400, 500, 600));