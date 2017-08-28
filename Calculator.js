/**
 * Numbers
 */
var stackNum = [];

/**
 * Operators
 */
var stackOper = [];

/**
 * Show number on screen.
 * @param {int} number - Number inputted to be displayed.
 */
function displayNumber(number) {
    document.getElementById("display0").innerHTML = number;
}

// put documentation here.
function printDebug() {
    console.log("StackNum:" + stackNum);
    console.log("StackOper:" + stackOper);
}

/**
 * Input a number.
 * @param {string} number - the integer entered when a button is pressed.
 */
function enterNum(number) {
        var num = parseInt(number);
        stackNum.unshift(num); 
        displayNumber(num);
        printDebug();
    
    // other way to write: stackNum.unshift(parseInt(number));
}

/**
 * Enters an math operation.
 * @param {string} ops - the operator. Possible values: plus, minus, times, divide, and equals
 */
function enterOp(ops) {        
    if(ops === "equals") {
        if(stackOper.length >= 1 && stackNum.length >= 2) {
            total();
        }
    } else {    
        stackOper.unshift(ops);
        if(stackOper.length > 1 && stackOper.length < 2) {
            total();
        }
    }

    printDebug();
}

/**
 * This is will produce the total amount.
 */
function total() {
    // step #1: pop the two values
    var number1 = stackNum.shift();
    var number2 = stackNum.shift();

    // step #2: pop the operator
    var operator = stackOper.shift();

    // step #3: do the math based on operator
    var result;
    switch(operator) {
        case "plus":
            result = number2 + number1;
            break;
        case "minus":
            result = number2 - number1;
            break;
        case "times":
            result = number2 * number1;
            break;
        case "divide":
            result = number2 / number1;
            break; 
    }

    // step #4: push the result into stackNum
    stackNum.unshift(result);

    // step #5: display and console.log the result.
    displayNumber(result);
    console.log(result);
}

function reset() {
    displayNumber(0);
    stackNum = [];
    stackOper = [];

    printDebug();
}