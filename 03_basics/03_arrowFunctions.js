const user = {
    username: "bishal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "bishal"
//     console.log(this.username);  //this.username only object work
// }

// chai()

// const chai = function(){
//     let username = "bishal"
//     console.log(this.username)
// }


const chai = () => {
    let username = "bishal"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "bishal"})


console.log(addTwo(3, 6))