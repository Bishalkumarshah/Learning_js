// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "bishal321"
tinderUser.name = "sammy"
tinderUser.isLoogedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "bishal@123gmail.ocm",
    fullname: {
        userfullname: {
            firstname: "bishal",
            lastname: "shah"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign(target{},source obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2, ...obj4} // 99% used in real code
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },   
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLooged'));


const course = {
    coursename: "Hindi Js course",
    price: "999",
    courseInstructor: "Bishal"
}

//  course.courseInstructor

// const {courseInstructor} = couser
const {courseInstructor:instructor} = couser

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "bishal kumar shah"
//     "coursename": "Js hindi"
//     "price": "free"
// }


[
   {},
   {},
   {}

]