//Create an array that has strings, bumbers and booleans in it, at least two of each type
//our first mixed type array. Using array functions 
//(like . filters, .sort, .includes, .map, .forEach, etc), do the following
//(DO NOT USE FOR LOOPS) and log them out to the console.
//
let mixedArray =["Mfer", "leFt", 20, "timeS", true, "no", false, 6,9]
// A. Create a new array consisting only of the strings in the array, then sort
// the array alphabetically ascending A-Z
let stringAlpha= []
console.log(mixedArray);
mixedArray.forEach((a) => {
    if (typeof a === 'string'){
        stringAlpha.push(a)
    }
})
stringAlpha.sort();
console.log(stringAlpha);
// B. Create a new array consisting only of numbers in the array, then sort ascending
let numAscending = [];
mixedArray.forEach((a) => {
    if (typeof a === 'number'){
        numAscending.push(a);
    }
})
numAscending.sort((a,b) => {return(a-b)});
console.log(numAscending);
// C. Create a new array consisting only of numbers in the array, then sort decending
let numDescending=[];
mixedArray.forEach((a) => {
    if (typeof a === 'number'){
        numDescending.push(a);
    }
})
numDescending.sort((a,b) => {
    return (b-a);
})
console.log(numDescending)
// D. Create a new array consisting only of the strings in the array, but lowercase all of the strings
let loweCaseArray = [];
mixedArray.forEach((a) =>{
    if (typeof a === 'string'){
        a.toLowerCase();
        loweCaseArray.push(a);
    }
})
console.log(loweCaseArray)

