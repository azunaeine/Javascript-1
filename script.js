console.log("Hi!")

// variables


// Hey JS, please store this value "0" in a box called "myNumber" 
// = is the "assignment" operator (it means "put the thing in a box with this name")
// declare a variable
const myNumber = 0 

// DOM interactions

// grab an element
const btnIncrement = document.querySelector(".increment") // grab the first element you find with class="increment"

// on click, run a function
btnIncrement.onclick = incrementNumber

/** grab the element .number, 
 * and increase its number by 1 */
function incrementNumber(){

    // this is like saying "make a box with the label 'numDiv', and put this inside it"
    const numDiv = document.querySelector(".number")

    // get the current value of the number
    const currentNumber = Number(numDiv.innerHTML) // coerce (force) the innerHTML into a number

    const nextNumber = currentNumber + 1 // add the number 1
    
    numDiv.innerHTML = nextNumber // put the new number back into the numDiv

}


// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

// const sum = addTwoNumbers(10, 12)
