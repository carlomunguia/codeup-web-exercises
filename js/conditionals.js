"use strict";
//
var message = confirm("Would you like to enter a number?");

if (message) {
    var number = prompt("Choose a number");

    if (!isNaN(number)) {
        if ((number % 2 == 0)) {
            alert("Your number is even");
        } else {
            alert("Your number is odd");
        }

        alert("Here is your number, yo" + (+number + 100));

        if (number > 0) {
            alert("Your number is positive");
        } else {
            alert("Your number is negative")
        }
    } else {
        alert(!"Fine, be that way.")
    }
}

/**
 //  * TODO:
 //  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 //  * would like to enter a number. If they click 'Ok', prompt the user for a
 //  * number, then use 3 separate alerts to tell the user:
 //  *
 //  * - whether the number is even or odd
 //  * - what the number plus 100 is
 //  * - if the number is negative or positive
 //  *
 //  * if what the user enters is not a number, use an alert to tell them that, and
 //  * do *not* display any of the above information.
 //  *
 //  * Can you refactor your code to use functions?
 //  */
//
// /* ########################################################################## */
//
// var color = (string);



//
//  //
//  *
//  *
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined above, if the color passed is not11```
//  * one of the ones defined above, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

var colorMap = {
    red: 'The lava is red',
    orange: 'The sun is orange',
    yellow: 'the house is yellow',
    green: 'the reptile is green',
    blue: 'the sky is blue',
    indigo: 'the soul is indigo',
    violet: 'the dress is violet'
};

function analyzeColor (color) {
    return colorMap[color];
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

alert(analyzeColor(randomColor));
var input = prompt('Enter a Color, yo ');
alert(analyzeColor(input));




// // /**
// //  * TODO:
//  // * Pass the `randomColor` variable to your function and console.log the results.
//  // * You should see a different message everytime you refresh the page
//  // */
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// /* ########################################################################## */
//

function calculateTotal(luckyNumber, totalAmount) {
    var discount;
    if (luckyNumber === 0) {
        discount = 0;
    } else if (luckyNumber === 1) {
        discount = .10;
    } else if (luckyNumber === 2) {
        discount = .25;
    } else if (luckyNumber === 3) {
        discount = .35;
    } else if (luckyNumber === 4) {
        discount = .50;
    } else if (luckyNumber === 5) {
        discount = 1;
    }
    return totalAmount - (totalAmount * discount);
}
console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));


// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

input = prompt("What is your Total bill?" );

alert(calculateTotal(luckyNumber,));

