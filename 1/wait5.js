//Create a function that takes a single argument, a number and after a timeout
//of 5 seconds, logs the number to the console.
function wait5(number){
    setTimeout(() =>  {console.log(number)}, 5000);
    
}
wait5(69);