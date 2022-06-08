// utility
function printValue(value) {
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function add() {
    const addition = 40 + 1
    printValue(`Addition: ${addition}`)
}
add()

    //TODO: create a function that takes in two values and adds them
    
    // /**
    //  * 
    //  * @param {Number} num1 
    //  * @param {Number} num2 
    //  */
    function addTwo(num1, num2) {
        printValue(`addition: ${num1 + num2}`)
    }
 addTwo(23,34)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addTwoAndReturn(num1,num2){
    const myaddition = num1 + num2
    return myaddition
    
}
//the default should come after
function defaultParams(num2, num1=21){
    return (num1 + num2)
}
defaultParams()

const anotheraddition=defaultParams(10)
printValue(`default: ${anotheraddition}`)


// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const addExpression = function (){
    printValue(`this value: ${3+5}`)
    }
addExpression()

//TODO: create a function that takes in two values and adds them
const  TwoAdd = function (num3,num4){
    const addition = num3 + num4
    printValue (`twoadd: ${addition}`)
}
TwoAdd(90,1)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const  TwoAddd = function (num3,num4){
   const addition = num3 + num4
    return (`twoaddd: ${addition}`)
}


// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values

const addTwoYY = () => {
printValue(20+30)
}
addTwoYY()

//TODO: create a function that takes in two values and adds them

const addTwoParam = (num1,num2) => {
    printValue(num1+num2)
    }
    addTwoParam(34,27)

//TODO: create a function that takes in two values, adds them and returns the value of the addition

const addTwoParamReturn = (num1,num2) =>{
    return (num1 + num2)
}
