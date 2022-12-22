const prompt = require("prompt-promise")
// 1. Write a function that returns a promise that resolves after a five
//second timeout with the word "hello". Call this function, and using
//.then syntax, log the result of the promise in the callback to .then

// const sayHello = new Promise ((input) => {
//     setTimeout(() =>{
//  //       console.log (`Hello ${input}`)
//         console.log("Hello")
//     }, 5000)
//  //  setTimeout(("What's ur name") , 5*1000)
//   //  console.log (`Hello ${input} this should print first`)
// })
// //sayHello.then((input) => console.log(`Hello ${input}`))

// // try again

function sayHi(){
  console.log("Firts")
  prompt("What is your name?\n").then((a) => {
    setTimeout(() => {console.log(`Hello ${a}`)}, 2500)
  });
  console.log("After your response, I will say hello to youin 2.5 seconds")
}
// sayHi().then(() => {
//   setTimeout(() => {console.log(`Hello ${response}`)}, 2500)
// })
//sayHi();

/////////////////////////////////////////////////////////
//code here is valid, just commented for usability
// prompt("Tell me your name now\n").then(a =>{
//   console.log("Um...")
//   setTimeout(() => {console.log(`Hello ${a}`)}, 2500)
// });
///////////////////////////////////////////////
//2) write a function that returns a promise that REJECTS after a 5 second timeout, 
//with an error. call this function and, using .catch syntax, log the result of the 
//promise to .catch

 new Promise (function (resolve, reject){

  let answer = prompt("Quick, tell me Fridge's middle name\n", 1000)
  if (answer = ""){
    return resolve;
  }
  else return reject
})
  .then((a)=>{console.log(`why did you type something? ${a} is incorrect`)})
  .catch( error=> {console.log("correct, no name, so we'll give him PEN15")})
  .finally(()=>{console.log("just a log out test")})


  new Promise(userInput)
  .then(cheeringCrowds)
  .catch(booLoser)
  .finally(thnksForPlaying)

  function userInput(resolve, reject){
    let hisName = prompt("Quick, tell me Fridges' middle name\n")
    if (hisName != "pen15"){
        reject("Nope, ur dumb")
    }
    resolve(hisName)
  }
  function cheeringCrowds(){
    console.log(`Huzzah! It's ${hisName}`)
  }
  function booLoser(){
    console.log(`His name is not ${hisName}`)
  }
function thnksForPlaying(){
    console.log(`Thanks for playing restard`)
}

userInput();

//3) write a function that chains together 3 promises using .then. Each promise adds 
//together the previous result, adds 5 to it, and then resolves with that new sum. 
//the final .then should have have a callback with a value of 15, since we started 
//with 0, and added 5 to it in 3 different promises.