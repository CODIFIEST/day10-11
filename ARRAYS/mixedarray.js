//Create an array that has strings, bumbers and booleans in it, at least two of each type
//our first mixed type array. Using array functions 
//(like . filters, .sort, .includes, .map, .forEach, etc), do the following
//(DO NOT USE FOR LOOPS) and log them out to the console.
//
// A. Create a new array consisting only of the strings in the array, then sort
// the array alphabetically ascending A-Z
let pillars = [
    "buying tops",
    "battle cranes",
    "crane juice",
    "lawyer crow",
    "potted plant"
]
console.log(pillars);
pillars.sort();
console.log(pillars);
// B. Create a new array consisting only of numbers in the array, then sort ascending
let bestNumbers = [
    69,
    420,
    7,
    8,
    6969
]
bestNumbers.sort(function(a,b) {return(a - b)} );
console.log(bestNumbers);
// C. Create a new array consisting only of numbers in the array, then sort decending
let worstNumbers = [
    70,
    13,
    99,
    0,
    51
]
worstNumbers.sort(function(a,b){return b-a});
console.log(worstNumbers);
// D. Create a new array consisting only of the strings in the array, but lowercase all of the strings
let carBrands =[
    "tESLa",
    "rIvIan",
    "FORD",
    "Bmw",
    "yUgo"
]
// lol this doesn't do what i thought
//carBrands.forEach((a) => {return a.toLowerCase()});
// console.log(carBrands);
carBrands = carBrands.map(function(a){return a.toLowerCase()});
console.log(carBrands);
//