// Object singleton and constructor

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Arohi"
tinderUser.age = 23

// console.log(tinderUser);

const regularUser = {
    email: "every@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Lava",
            lastname: "5G"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);         // regular ke inside fullname ke inside userfullname ke inside firstname or lastname

const obj1 = {1: "q", 2: "b"}
const obj2 = {3: "r", 4: "b"}
const obj5 = {5: "y", 6: "u"}
const obj4 = {7: "p", 8: "i"}

// const obj3 = { obj1, obj2 }
//const obj3 = Object.assign(obj1, obj2)                       // both object combines into one
// const obj3 = Object.assign({}, obj1, obj2, obj4, obj5)         // it use less in some cases

const obj3 = {...obj1, ...obj2, ...obj4, ...obj5}                 // most ideal method to used is spread 
// 

const Users = [
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
]

Users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));
// console.log(tinderUser.hasOwnProperty('isLogged'));        // to know if this property exist in object or not


/***********************************************De-structure of Object******************************** */
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh sir"
}

// course.courseInstructor[0];

// const {price} = course
// console.log(courseInstructor);
// console.log(price);

const {courseInstructor: instructor} = course
console.log(instructor);

const navbar = () => {

}
navbar()