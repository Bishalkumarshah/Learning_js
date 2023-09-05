// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "bishal",
    "full name": "Bishal kumar shah",
    [mySym]: "mykey1",
    age: 18,
    location: "Kathmandu",
    email: "Bishal@341gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "vishal@123@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "shishal@123@gmail.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());