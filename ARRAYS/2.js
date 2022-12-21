//Create an array that has 5 objects that follow this user model
// object{
    //name: string
    //age: number
    //isAdmin: boolean
    //}
    let users = [];
const frank = {
    name: "frank",
    age: 12,
    isAdmin: false
}
const karen = {
    name: "bitchface",
    age: 47,
    isAdmin: true
}

users.push(frank, karen)
//console.log(users)
const miles = {
    name: "Mr. Davis",
    age: 96,
    isAdmin: true
}
const pimp ={
    name:"Daddy",
    age: 55,
    isAdmin: false
}
const troll ={
    name:"diply",
    age: 28,
    isAdmin:false
}
users.push(pimp, troll, miles)
console.log(users)
// 2a. Create a new array consisting only of users that have an age greater than 20
let oldUsers = [];
users.forEach((a) => {
 //   console.log(a)
    if (a.age > 20){
        oldUsers.push(a);
    }
})
console.log("old users")
console.log(oldUsers);
// 2b. Create a new array that consists only of admin users
let adminUsers = [];
users.forEach((admin) => {
    if (admin.isAdmin){
        adminUsers.push(admin);
    }
});
console.log("admin users")
console.log(adminUsers);
// 2c. Crete a new array consisting only of users that are both admin and have an age less than 50
let youngAdmins =[];
users.forEach((ya) => {
    if (ya.age < 50 && ya.isAdmin){
        youngAdmins.push(ya);
    }
})
console.log(youngAdmins);
// 2d. Sort the array by user's names alphabetically
users.sort((a, b) => a.name.localeCompare(b.name));
console.log (users);
// 2e. sort the array by users age, oldest to youngest
users.sort((a,b) => b.age - a.age)
console.log(users)
