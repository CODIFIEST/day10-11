//Create a function that takes a single argument, a number on an iterval of 
//every 5 seconds, logs the number to the console.
function every5(numberToLog){
    setInterval(() =>  {console.log(numberToLog)}, 5000)
  
}
every5(420);