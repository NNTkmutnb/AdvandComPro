// Arrow function with two arguments
const sum = (firstPara, secondParam) => {
    return firstPara + secondParam
};
console.log(sum(2, 5)); // Prints: 7

// Arrow function with no arguments
const printHello = () => {
    console.log("hello");
};
printHello(); //Prints: hello

// Arrow function with a single argument
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms.`);
};
checkWeight(25); // Prints: Baggage weight : 25 kilograms.

// Concise arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); //Prints: 60